# exceltojson

This is a small tool which used to convert to excel to json.

## ConvertISBNMapping 
If you want to convert ISBN-Mapping.xlsx to purchase-mapping.json. please prepare ISBN-Mapping.xlsx which only contains a sheet which name is called 'test'. Please note that: ISBN-Mapping.xlsx should contain all the items rather than some updated items. We need some columns which are the same as follows:
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

please run `node ConvertISBNMapping.js` you can get the purchase-mapping.json

## ConvertNameDescription
If you want to convert name-description.xlsx to name-description.json. Please prepare name-description.xlsx which only contains a sheet which name is called 'test'. we need some columns which are the same as follows:
        A: 'ISBN13',
        B: 'In App Display Name',
        C: 'In App Description'
        
please copy existing name-description.json content to name-description-old.json. so i can compare the old json file with new generated json file name-description.json.
name-description.xlsx can be a whole set, also it can be some newly added items. This tool will merge the result with existing items.

Please run `node ConvertNameDescription.js` you can get name-description.json





