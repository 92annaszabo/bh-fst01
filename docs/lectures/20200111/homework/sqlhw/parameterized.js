const sqlite3 = require('sqlite3').verbose(); 
const db = new sqlite3.Database('sqlhw01'); 

const queryId = process.argv[2];
const queryParam = process.argv[2]

db.serialize(() => { 

    switch(queryId){
        case '1':
            db.all(`SELECT nominee FROM awards WHERE ceremony = ${queryParam} AND category LIKE "%Actress%" OR category LIKE "%Actor%";`, (err, rows) => { 
                console.log(`Azoknak a színészeknek a nevei, akiket a(z) ${queryParam}. díjátadón jelöltek:`);
                if(err) {
                    console.log(err)
                    return
                }
                rows.forEach(row => console.log(`- ${row.nominee}`))
                    
                });
        case '2':
            db.all(`SELECT nominee FROM awards WHERE ceremony = ${queryParam} AND category LIKE "%Actress%" OR category LIKE "%Actor%" AND win = True;`, (err, rows) => { 
                console.log(`Azoknak a színészeknek a nevei, akiket a(z) ${queryParam} díjátadón jelöltek és díjat is kaptak:`);
                if(err) {
                    console.log(err)
                    return
                }
                rows.forEach(row => console.log(`- ${row.nominee}`))
                    
                });
        case '3':
            db.all(`SELECT DISTINCT nominee FROM awards WHERE year_award >= ${queryParam} AND year_award < ${parseInt(queryParam) + 10} AND (category LIKE "%Actress%" OR category LIKE "%Actor%");`, (err, rows) => { 
                console.log(`A(z) ${queryParam}-es években jelölt színészek nevei. Egy név csak egyszer szerepeljel az eredményben.`);
                if(err) {
                    console.log(err)
                    return
                }
                rows.forEach(row => console.log(`- ${row.nominee}`))
                    
                });
        case "4":
            db.all(`SELECT DISTINCT this_year.year_award FROM awards AS this_year JOIN awards AS last_year WHERE this_year.nominee = ${queryParam} AND last_year.nominee = ${queryParam} AND this_year.year_award = last_year.year_award + 1 AND this_year.win = True AND last_year.win = False ;`, (err, rows) => { 
                console.log(`Azoknak az éveknek a listája, amikor ${queryParam} úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert.`);
                if(err) {
                    console.log(err)
                    return
                }
                rows.forEach(row => console.log(`- ${row.year}`))
                    
                });
    }
    
});

db.close();