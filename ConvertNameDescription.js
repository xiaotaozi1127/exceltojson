const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
var old = JSON.parse(fs.readFileSync('name-description-old.json', 'utf8'));
var unique = [];
old.forEach(element => {
    if(!unique.includes(element)){
        unique.push(element);
    }
});
console.log('old length', old.length);
console.log('unique length', unique.length);

 
const result = excelToJson({
    sourceFile: 'name-description.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    },
    sheets: ['test'],
    columnToKey: {
        A: 'ISBN13',
        B: 'In App Display Name',
        C: 'In App Description'
    }
});

result.test.forEach(item => {
    if(!item['ISBN13']){
		item['ISBN13'] = ''
	}
	if(!item['In App Display Name']){
		item['In App Display Name'] = ''
	}
	if(!item['In App Description']){
		item['In App Description'] = ''
    }
    if(!unique.includes(item)){
        unique.push(item);
    }
})

console.log('final length', unique.length);

var json = JSON.stringify(unique);
fs.writeFile ("name-description.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);