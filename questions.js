const questions = {
        "Geschichte": [
            {
                question: "Wer war der erste Präsident der Vereinigten Staaten?",
                answer: "George Washington",
                tip: "Er war General im Unabhängigkeitskrieg.",
                options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
                points: 100
            },
            {
                question: "Wer war der erste Kaiser des Römischen Reiches?",
                answer: "Augustus",
                tip: "Er war der Adoptivsohn von Julius Caesar.",
                options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                points: 200
            },
            {
                question: "Wer war der letzte Kaiser von Deutschland?",
                answer: "Wilhelm II.",
                tip: "Er dankte am Ende des Ersten Weltkriegs ab.",
                options: ["Wilhelm I.", "Friedrich III.", "Wilhelm II.", "Otto von Bismarck"],
                points: 300
            },
            {
                question: "Wer erhielt 1990 den Friedensnobelpreis für seine Rolle bei der Beendigung des Kalten Krieges?",
                answer: "Michail Gorbatschow",
                tip: "Er wurde nach einem Wodka benannt.",
                options: ["Ronald Reagan", "Michail Gorbatschow", "Helmut Kohl", "Margaret Thatcher"],
                points: 400
            }
        ],
        "Geografie": [
            {
                question: "Welcher Fluss ist der breiteste Fluss der Welt?",
                answer: "Amazonas",
                tip: "Dieser Fluss fließt durch Südamerika und hat das größte Einzugsgebiet der Welt.",
                options: ["Nil", "Amazonas", "Mississippi", "Jangtse"],
                points: 100
            },
            {
                question: "Welche Stadt ist die bevölkerungsreichste Stadt der Welt?",
                answer: "Tokio",
                tip: "Diese Stadt ist auch die Hauptstadt Japans.",
                options: ["Shanghai", "New York", "Tokio", "Delhi"],
                points: 200
            },
            {
                question: "Welches Land hat die längste Küstenlinie der Welt?",
                answer: "Kanada",
                tip: "Es ist das zweitgrößte Land der Welt nach Fläche.",
                options: ["Australien", "Kanada", "Indonesien", "Russland"],
                points: 300
            },
            {
                question: "Welche Inselgruppe liegt östlich von Ecuador und hat eine einzigartige Tierwelt?",
                answer: "Galápagos-Inseln",
                tip: "Charles Darwin entwickelte hier seine Evolutionstheorie.",
                options: ["Philippinen", "Galápagos-Inseln", "Seychellen", "Fidschi-Inseln"],
                points: 400
            }
        ],
        "Wissenschaft und Technik": [
            {
                question: "Welcher Planet ist der größte in unserem Sonnensystem?",
                answer: "Jupiter",
                tip: "Er hat den größten Durchmesser und die größte Masse aller Planeten.",
                options: ["Saturn", "Jupiter", "Neptun", "Uranus"],
                points: 100
            },
            {
                question: "Welches Element hat die Ordnungszahl 6?",
                answer: "Kohlenstoff",
                tip: "Es ist ein essentielles Element für das Leben und bildet die Basis für alle organischen Verbindungen.",
                options: ["Sauerstoff", "Kohlenstoff", "Stickstoff", "Schwefel"],
                points: 200
            },
            {
                question: "Welches Gerät misst atmosphärischen Druck?",
                answer: "Barometer",
                tip: "Es wird oft in der Meteorologie verwendet.",
                options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
                points: 300
            },
            {
                question: "Welcher Physiker ist bekannt für seine Arbeit zur Quantenmechanik?",
                answer: "Erwin Schrödinger",
                tip: "Er ist auch bekannt für ein Gedankenexperiment mit der Katze.",
                options: ["Niels Bohr", "Werner Heisenberg", "Erwin Schrödinger", "Max Planck"],
                points: 400
            }
        ],
        "Kunst": [
            {
                question: "Wer schrieb das Theaterstück 'Romeo und Julia'?",
                answer: "William Shakespeare",
                tip: "Er ist ein berühmter englischer Dramatiker und Dichter.",
                options: ["Christopher Marlowe", "William Shakespeare", "John Milton", "Geoffrey Chaucer"],
                points: 100
            },
            {
                question: "Welcher Künstler malte das Werk 'Die Sternennacht'?",
                answer: "Vincent van Gogh",
                tip: "Er war ein niederländischer post-impressionistischer Maler.",
                options: ["Claude Monet", "Edgar Degas", "Vincent van Gogh", "Paul Cézanne"],
                points: 200
            },
            {
                question: "Welche Band/Musiker landete die meisten Nummer 1 Hits in den Charts?",
                answer: "The Beatles",
                tip: "Diese britische Band besteht aus 4 Mitglieder (George Harrison).",
                options: ["Michael Jackson", "The Beatles", "Elvis Presley", "Madonna"],
                points: 300
            },
            {
                question: "Welches Buch beginnt mit dem Satz 'Nennt mich Ismael'?",
                answer: "Moby-Dick",
                tip: "Es ist ein Roman von Herman Melville.",
                options: ["Der alte Mann und das Meer", "Moby-Dick", "Robinson Crusoe", "Die Schatzinsel"],
                points: 400
            }
        ],
        "Film und Fernsehen": [
            {
                question: "Wer spielte die Rolle des 'Jack Dawson'?",
                answer: "Leonardo DiCaprio",
                tip: "Er spielte in Filmen wie 'Inception' und 'The Revenant' mit.",
                options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
                points: 100
            },
            {
                question: "Welche Serie hat die meisten Emmy-Auszeichnungen gewonnen?",
                answer: "Game of Thrones",
                tip: "Diese Fantasy-Serie basiert auf den Büchern von George R.R. Martin.",
                options: ["Breaking Bad", "Game of Thrones", "The Sopranos", "Friends"],
                points: 200
            },
            {
                question: "Welche Rasse war der Hund Lassie in der gleichnamigen Serie?",
                answer: "Collie",
                tip: "Diese Hunderasse ist bekannt für ihre Intelligenz und ihr langes Fell.",
                options: ["Golden Retriever", "Deutscher Schäferhund", "Collie", "Labrador Retriever"],
                points: 300
            },
            {
                question: "Welcher Film war der erste Film, der farbig auf den Markt kam?",
                answer: "Der Zauberer von Oz",
                tip: "Dieser Film enthält eine ikonische Szene, in der Dorothy in einer Welt voller Farben landet.",
                options: ["Vom Winde verweht", "Schneewittchen und die sieben Zwerge", "Der Zauberer von Oz", "Star Wars"],
                points: 400
            }
        ],
        "Sport": [
            {
                question: "Bei welchem Wettbewerb starten die Schwimmer nicht von einem Absprungblock, sondern direkt im Wasser?",
                answer: "Rückenschwimmen",
                tip: "Diese Schwimmart erfordert.",
                options: ["Freistilschwimmen", "Brustschwimmen", "Rückenschwimmen", "Schmetterlingsschwimmen"],
                points: 100
            },
            {
                question: "Welcher Radprofi siegte als erster Deutscher bei der Tour de France?",
                answer: "Jan Ullrich",
                tip: "Er gewann die Tour de France im Jahr 1997.",
                options: ["Rudi Altig", "Erik Zabel", "Jan Ullrich", "Andreas Klöden"],
                points: 200
            },
            {
                question: "Welche Sportler erzielen mit einem 'Fosbury Flop' Weltrekorde?",
                answer: "Hochspringer",
                tip: "Diese Technik revolutionierte den Hochsprung in den 1960er Jahren.",
                options: ["Stabhochspringer", "Weitspringer", "Hochspringer", "Dreispringer"],
                points: 300
            },
            {
                question: "Welchem Tennisstar gelang 2005 ein Hattrick beim Rasenturnier in Wimbledon?",
                answer: "Roger Federer",
                tip: "Er wird oft als einer der größten Tennisspieler aller Zeiten angesehen.",
                options: ["Rafael Nadal", "Andy Roddick", "Roger Federer", "Lleyton Hewitt"],
                points: 400
            }
        ],
      "Natur und Umwelt": [
            {
                question: "Welches ist das größte Korallenriff der Welt?",
                answer: "Great Barrier Reef",
                tip: "Dieses Riff liegt vor der Küste Australiens.",
                options: ["Belize Barrier Reef", "Great Barrier Reef", "Andros Barrier Reef", "Ningaloo Reef"],
                points: 100
            },
            {
                question: "Welcher Vogel hat die größte Flügelspannweite?",
                answer: "Wanderalbatros",
                tip: "Dieser Vogel kann Spannweiten von über 3 Metern erreichen.",
                options: ["Königspinguin", "Andenkondor", "Wanderalbatros", "Seeadler"],
                points: 200
            },
            {
                question: "Welche Tierart lebt am längsten?",
                answer: "Grönlandwal (Balaena mysticetus)",
                tip: "Dieser Wal kann über 200 Jahre alt werden.",
                options: ["Asiatischer Elefant", "Galápagos-Riesenschildkröte", "Grönlandwal", "Koi-Karpfen"],
                points: 300
            },
            {
                question: "Welches Land besitzt die größte Anzahl an Vulkanen, die noch aktiv sind?",
                answer: "Indonesien",
                tip: "Dieses Land liegt im sogenannten 'Pazifischen Feuerring'.",
                options: ["Japan", "Island", "Indonesien", "USA"],
                points: 400
            }
        ],
        "Essen und Trinken": [
            {
                question: "Welche Farbe hat die traditionelle italienische Sauce Pesto?",
                answer: "Grün",
                tip: "Die Hauptzutat ist Basilikum.",
                options: ["Rot", "Gelb", "Grün", "Weiß"],
                points: 100
            },
            {
                question: "Aus welchem Land stammt das Croissant ursprünglich?",
                answer: "Österreich",
                tip: "Dieses Land liegt in Mitteleuropa und ist bekannt für seine Berge und klassische Musik.",
                options: ["Frankreich", "Österreich", "Deutschland", "Schweiz"],
                points: 200
            },
            {
                question: "Aus welchem Grundstoff wird das alkoholische Getränk Rum typischerweise hergestellt?",
                answer: "Zuckerrohr",
                tip: "Dieses Getränk ist besonders in der Karibik beliebt.",
                options: ["Gerste", "Trauben", "Zuckerrohr", "Kartoffeln"],
                points: 300
            },
            {
                question: "Welcher französische Käse ist bekannt für seinen starken Geruch und wurde nach einem Kloster benannt?",
                answer: "Roquefort",
                tip: "Dieser Käse wird aus Schafsmilch hergestellt.",
                options: ["Brie", "Camembert", "Roquefort", "Comté"],
                points: 400
            }
        ] 
    };
