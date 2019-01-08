const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    sourceFile: 'ISBN-Mapping.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    },
    sheets: ['test'],
    columnToKey: {
        A: 'Base Course Type',
        B: 'ISBN',
        C: 'Course name',
        D: 'Other format 1 ISBN',
        E: 'Other format 1 Type',
        F: 'Other format 2 ISBN',
        G: 'Other format 2 Type',
        H: 'Other format 3 ISBN',
        I: 'Other format 3 Type',
        J: 'Upsell in-app purchase ISBN',
        K: 'Upsell course name',
        N: 'Upsell2 in-app purchase ISBN',
        O: 'Upsell2 course name',
        R: 'Upgrade in-app purchase ISBN',
        S: 'Upgrade course name'
    }
});

let output = [];

result.test.forEach(item => {
	if(!item['Base Course Type']){
		item['Base Course Type'] = ''
	}
	if(!item['ISBN']){
		item['ISBN'] = ''
	}
	if(!item['Course name']){
		item['Course name'] = ''
	}
	if(!item['Other format 1 ISBN']){
		item['Other format 1 ISBN'] = ''
	}
	if(!item['Other format 1 Type']){
		item['Other format 1 Type'] = ''
	}
	if(!item['Other format 2 ISBN']){
		item['Other format 2 ISBN'] = ''
	}
	if(!item['Other format 2 Type']){
		item['Other format 2 Type'] = ''
	}
	if(!item['Other format 3 ISBN']){
		item['Other format 3 ISBN'] = ''
	}
	if(!item['Other format 3 Type']){
		item['Other format 3 Type'] = ''
	}
	if(!item['Upsell in-app purchase ISBN']){
		item['Upsell in-app purchase ISBN'] = ''
	}
	if(!item['Upsell course name']){
		item['Upsell course name'] = ''
	}
	if(!item['Upsell2 in-app purchase ISBN']){
		item['Upsell2 in-app purchase ISBN'] = ''
	}
	if(!item['Upsell2 course name']){
		item['Upsell2 course name'] = ''
	}
	if(!item['Upgrade in-app purchase ISBN']){
		item['Upgrade in-app purchase ISBN'] = ''
	}
	if(!item['Upgrade course name']){
		item['Upgrade course name'] = ''
	}
	output.push(item);
})

console.log(output.length);

var json = JSON.stringify(output);
fs.writeFile ("isbn-mapping.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);