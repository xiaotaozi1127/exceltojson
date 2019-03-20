const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    sourceFile: 'upsell-format-mapping.xlsx',
	sheets:[{
		name: 'Upsell map',
		header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Base Course Type',
			B: 'ISBN',
			C: 'Course name',
			D: 'Upsell in-app purchase ISBN',
			E: 'Upsell course name',
			F: 'Upsell2 in-app purchase ISBN',
			G: 'Upsell2 course name',
			H: 'Upgrade in-app purchase ISBN',
			I: 'Upgrade course name'
        }
    },{
		name: 'Format map',
		header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Base Course Type',
			B: 'ISBN',
			C: 'Course name - Upsell Card & Library',
			D: 'Course name - Learn Page',
			E: 'Course Description - Upsell Card',
			F: 'Other format 1 (Upsell) ISBN',
			G: 'Other format 2 (Upgrade) ISBN',
			H: 'Other format 3 (DVD) ISBN'
        }
    }]
});

let upsell_map_output = [];
let format_map_output = [];

result["Upsell map"].forEach(item => {
	if(!item['Base Course Type']){
		item['Base Course Type'] = ''
	}
	if(!item['ISBN']){
		item['ISBN'] = ''
	}
	if(!item['Course name']){
		item['Course name'] = ''
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
	upsell_map_output.push(item);
})

console.log('upsell_map_output length', upsell_map_output.length);

result["Format map"].forEach(item => {
	if(!item['Base Course Type']){
		item['Base Course Type'] = ''
	}
	if(!item['ISBN']){
		item['ISBN'] = ''
	}
	if(!item['Course name - Upsell Card & Library']){
		item['Course name - Upsell Card & Library'] = ''
	}
	if(!item['Course name - Learn Page']){
		item['Course name - Learn Page'] = ''
	}
	if(!item['Course Description - Upsell Card']){
		item['Course Description - Upsell Card'] = ''
	}
	if(!item['Other format 1 (Upsell) ISBN']){
		item['Other format 1 (Upsell) ISBN'] = ''
	}
	if(!item['Other format 2 (Upgrade) ISBN']){
		item['Other format 2 (Upgrade) ISBN'] = ''
	}
	if(!item['Other format 3 (DVD) ISBN']){
		item['Other format 3 (DVD) ISBN'] = ''
	}
	format_map_output.push(item);
})

upsell_map_output.forEach((item) => {
	let isbn = item['ISBN'];
	let searchItem = format_map_output.find(search => search['ISBN'] == isbn);
	if(searchItem){
		item['Other format 1 (Upsell) ISBN'] = searchItem['Other format 1 (Upsell) ISBN'];
		item['Other format 2 (Upgrade) ISBN'] = searchItem['Other format 2 (Upgrade) ISBN'];
		item['Other format 3 (DVD) ISBN'] = searchItem['Other format 3 (DVD) ISBN'];
	}else{
		item['Other format 1 (Upsell) ISBN'] = "";
		item['Other format 2 (Upgrade) ISBN'] = "";
		item['Other format 3 (DVD) ISBN'] = "";
	}
})

console.log('format_map_output length', format_map_output.length);

var upsell_mapping_json = JSON.stringify(upsell_map_output);
fs.writeFile ("upsell-mapping.json", upsell_mapping_json, function(err) {
    if (err) throw err;
    console.log('convert upsell-mapping complete');
    }
);

var format_mapping_json = JSON.stringify(format_map_output);
fs.writeFile ("format-mapping.json", format_mapping_json, function(err) {
    if (err) throw err;
    console.log('convert format-mapping complete');
    }
);