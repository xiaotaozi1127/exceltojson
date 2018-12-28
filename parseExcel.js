const readExcel = require('read-excel-file/node');

let result = '';
readExcel('mobile_user_1.xlsx').then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    // rows.forEach(element => {
    //     result += "'" + element[0] + "'" + ',';
    // });
    console.log(rows.length);
  })