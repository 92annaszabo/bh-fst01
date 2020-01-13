adatmodell (elozo feladatbol)

Employee
- id: int
- name: varchar 80
- email: varchar 120
- salary: int
- department_id: int

Department
- id: int
- name: varchar 80
- director_id: int

data.json szerkezete:


{
    "employees": [
        {
            "id": 1, "name": "Gizio", "email": "gizio@astrotv.hu", 
            "salary": 70000000, "department_id": 1
        },
        ...
    ],
    "departments": [
        {"id":1, "name":"department of quackery", "director_id": 1},
        ...
    ]
}

Feladat: írjunk egy programot ami két parancssori argumentumot vár

Az első argumentum egy SQLite adatbázist azonosít, a második argumentum
pedig egy adatforrást. Az adatforrás egy JSON fájl.

A program futása során hozza létre a megfelelő adatbázis sémát és
importálja az adatokat a JSON fájlból.

Ha valamelyik adat, hibás (pl nem jó az oszlopnév), a program
ugorja át az adott sort, de ne álljon le fatális hibával.