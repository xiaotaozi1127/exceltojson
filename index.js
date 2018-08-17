const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    sourceFile: 'sample.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    },
    sheets: ['test'],
    columnToKey: {
        '*': '{{columnHeader}}'
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


var json = JSON.stringify(output);
fs.writeFile ("input.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);