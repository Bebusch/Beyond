// Professionelle Raid-Datenbank für BEYOND
const RAID_DATABASE = {
    // Gesamtanzahl aller stattgefundenen Raids (wichtig für die %-Quote)
    totalRaidCount: 4,

    // Hier wird pro Raid penibel festgehalten, wer wirklich eingepackt und mitgenommen wurde:
    raids: [
        {
            id: "raid-15-05",
            date: "15.05.2026",
            zone: "TK & SSC",
            attendees: [
                "Lokomotivejj", "Størmdude", "Yubjap", "Lobstars", "Tempêst", 
                "Augustinaa", "Nanev", "Elyrii", "Zaccheo", "Tanabro", 
                "Aevips", "Shârpshoter", "Wasserpause", "Zilinei", "Purine", 
                "Schamänä", "Thyndal", "Fckmogli", "Bruegal", "Hemmø", 
                "Submeonof", "Helumi", "Tibsenshami", "Dysoncyclone", "Alessâ"
            ]
        },
        {
            id: "raid-17-05",
            date: "17.05.2026",
            zone: "SSC",
            attendees: [
                "Lmbgg", "Tempêst", "Chaixi", "Yubjap", "Nanev", 
                "Aevips", "Shârpshoter", "Dagegen", "Lobstars", "Sunnysideupp", 
                "Zaccheo", "Tombery", "Elyrii", "Schamänä", "Zilinei", 
                "Thyndal", "Størmdude", "Fckmogli", "Bruegal", "Hemmø", 
                "Chalawan", "Helumi", "Schuppenhuhn", "Safedich", "Tibsenshami"
            ]
        },
        {
            id: "raid-20-05",
            date: "20.05.2026",
            zone: "TK",
            attendees: [
                "Lmbgg", "Yubjap", "Augustinaa", "Vaeroketh", "Aevips", 
                "Størmdude", "Tempêst", "Schamänä", "Zaccheo", "Purine", 
                "Thyndal", "Elyrii", "Tibsenshami", "Chalawan", "Helumi", 
                "Schuppenhuhn", "Alessâ", "Fckmogli", "Tombery", "Salzstange", "Safedich"
            ]
        },
        {
            id: "raid-21-05",
            date: "21.05.2026",
            zone: "SSC",
            attendees: [
                "Konsequenz", "Tempêst", "Elyrii", "Yubjap", "Nanev", 
                "Thyndal", "Aevips", "Lmbgg", "Tombery", "Zaccheo", 
                "Chaixi", "Schamänä", "Tibsenshami", "Blackzillaqt", "Størmdude", 
                "Vaeroketh", "Dagegen", "Fckmogli", "Salzstange", "Bruegal", 
                "Pukipala", "Chalawan", "Helumi", "Schuppenhuhn", "Safedich", "Alessâ"
            ]
        },
        {
        id: "raid-27-05", 
        date: "2026-05-27",
        zone: "SSC / TK",
        score: "2-",
        attendees: [
            "Bruegal", "Salzstange", "Fckmogli", "Nanev", "Vaeroketh", 
            "Chaixi", "Tempêst", "Jibbi", "Tombery", "Schamänä", 
            "Aevips", "Thyndal", "Konsequenz", "Glebbo", "Størmdude", 
            "Elyrii", "Blackzillaqt", "Zilinei", "Dagegen", "Purine", 
            "Chalawan", "Helumi", "Schuppenhuhn", "Takko", "Alessâ"
        ]
    }
    ],

    // Spielerspezifische Stammdaten (Damit Klassenfarben und Klarnamen IMMER stimmen)
    players: {
        "konsequenz": { name: "Konsequenz", class: "Jäger", css: "color-hunter" },
        "tempest": { name: "Tempêst", class: "Schurke", css: "color-rogue" },
        "elyrii": { name: "Elyrii", class: "Schamane", css: "color-shaman" },
        "yubjap": { name: "Yubjap", class: "Hexenmeister", css: "color-warlock" },
        "nanev": { name: "Nanev", class: "Krieger", css: "color-warrior" },
        "thyndal": { name: "Thyndal", class: "Paladin", css: "color-paladin" },
        "aevips": { name: "Aevips", class: "Magier", css: "color-mage" },
        "lmbgg": { name: "Lmbgg", class: "Hexenmeister", css: "color-warlock" },
        "tombery": { name: "Tombery", class: "Druide", css: "color-druid" },
        "zaccheo": { name: "Zaccheo", class: "Druide", css: "color-druid" },
        "chaixi": { name: "Chaixi", class: "Jäger", css: "color-hunter" },
        "schamana": { name: "Schamänä", class: "Schamane", css: "color-shaman" },
        "tibsenshami": { name: "Tibsenshami", class: "Schamane", css: "color-shaman" },
        "blackzillaqt": { name: "Blackzillaqt", class: "Jäger", css: "color-hunter" },
        "stormdude": { name: "Størmdude", class: "Schamane", css: "color-shaman" },
        "vaeroketh": { name: "Vaeroketh", class: "Hexenmeister", css: "color-warlock" },
        "dagegen": { name: "Dagegen", class: "Magier", css: "color-mage" },
        "fckmogli": { name: "Fckmogli", class: "Krieger", css: "color-warrior" },
        "salzstange": { name: "Salzstange", class: "Paladin", css: "color-paladin" },
        "bruegal": { name: "Bruegal", class: "Paladin", css: "color-paladin" },
        "pukipala": { name: "Pukipala", class: "Paladin", css: "color-paladin" },
        "chalawan": { name: "Chalawan", class: "Priester", css: "color-priest" },
        "helumi": { name: "Helumi", class: "Druide", css: "color-druid" },
        "schuppenhuhn": { name: "Schuppenhuhn", class: "Schamane", css: "color-shaman" },
        "safedich": { name: "Safedich", class: "Paladin", css: "color-paladin" },
        "alessa": { name: "Alessâ", class: "Priester", css: "color-priest" },
        "augustinaa": { name: "Augustinaa", class: "Magier", css: "color-mage" },
        "lobstars": { name: "Lobstars", class: "Hexenmeister", css: "color-warlock" },
        "sunnysideupp": { name: "Sunnysideupp", class: "Priester", css: "color-priest" },
        "zilinei": { name: "Zilinei", class: "Priester", css: "color-priest" },
        "hemmo": { name: "Hemmø", class: "Krieger", css: "color-warrior" },
        "lokomotivejj": { name: "Lokomotivejj", class: "Magier", css: "color-mage" },
        "tanabro": { name: "Tanabro", class: "Krieger", css: "color-warrior" },
        "wasserpause": { name: "Wasserpause", class: "Schamane", css: "color-shaman" },
        "submeonof": { name: "Submeonof", class: "Priester", css: "color-priest" },
        "dysoncyclone": { name: "Dysoncyclone", class: "Schamane", css: "color-shaman" },
        "purine": { name: "Purine", class: "Krieger", css: "color-warrior" }
    }
};
