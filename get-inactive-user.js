const pg = require('pg');
const fs = require('fs');
const config = {
    database: "",
    user: "",
    password: "",
    host: '',
    port: 5432,
    max: 20, 
    idleTimeoutMillis: 3000
}
const pool = new pg.Pool(config);

writeToFile = (path, content) => {
    fs.writeFileSync(path, content);
}

runTable = async () => {
    const emails = [];
    const dataset = await pool.query(``);

        const rows = dataset.rows;
        
    for(let i = 0; i < rows.length; i++) {
        emails.push(rows[i].email);
    }
    writeToFile('/data/inactive-user-emails.txt', emails.join('\n'));
    console.log('rows length', rows.length);
    console.log('Write to file done.');
}

runTable();