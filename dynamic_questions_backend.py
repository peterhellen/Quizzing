from flask import Flask, jsonify
import pandas as pd
import os
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define the path to the Excel file on your system
FILE_PATH = r'C:\\Users\\Peter\\OneDrive\\Dokumente\\Projekte\\Quizz-Duell\\Fragen\\Fragen.xlsx'

# Endpoint to get questions based on category and points
@app.route('/get_questions/<category>/<points>', methods=['GET'])
def get_questions(category, points):
    try:
        # Load the Excel file
        questions_df = pd.read_excel(FILE_PATH, sheet_name='Tabelle1')

        # Filter the DataFrame by category and points
        filtered_questions = questions_df[(questions_df['Kategorie'] == category) & (questions_df['Punkte'] == int(points))]

        # Shuffle the filtered questions and get a random question
        if not filtered_questions.empty:
            random_question = filtered_questions.sample(n=1).to_dict(orient='records')[0]
            return jsonify(random_question), 200
        else:
            return jsonify({'error': 'Keine Fragen gefunden'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to get all categories
@app.route('/get_categories', methods=['GET'])
def get_categories():
    try:
        # Load the Excel file
        questions_df = pd.read_excel(FILE_PATH, sheet_name='Tabelle1')

        # Extract unique categories
        categories = questions_df['Kategorie'].unique().tolist()

        return jsonify(categories), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to get all available questions with points
@app.route('/get_all_questions', methods=['GET'])
def get_all_questions():
    try:
        # Load the Excel file
        questions_df = pd.read_excel(FILE_PATH, sheet_name='Tabelle1')

        # Convert entire DataFrame to a list of dictionaries
        questions_list = questions_df.to_dict(orient='records')

        return jsonify(questions_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Run the Flask server on port 5000
    app.run(debug=True, host='0.0.0.0', port=5000)
