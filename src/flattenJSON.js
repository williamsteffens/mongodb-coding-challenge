const fs = require('fs');

// I/O
process.stdin.on('data', data => {
    let inJson = JSON.parse(data);
    let outJson = JSON.stringify(flattenJSON(inJson), null, 4);
    fs.writeFileSync('./flatJson.json', outJson, err => {
        if (err) {
            console.log(err)
        }
        return
    })
})

const flattenJSON = (obj) => {
    let outJSON = {};

    const flattenNestedObj = (parentKey, obj) => {
        for (let [key, value] of Object.entries(obj)) {
            if (typeof value != "object") {
                if (parentKey == "") {
                    outJSON[key] = value;
                } else {
                    outJSON[parentKey + '.' + key] = value; 
                }
            } else {
                if (parentKey == "") {
                    flattenNestedObj(key, value);
                } else {
                    flattenNestedObj(parentKey + '.' + key, value); 
                }
            }
        }
    }

    flattenNestedObj("", obj);

    return outJSON;
}

// export for testing - see test/flattenJSON.test.js for unit tests
module.exports = flattenJSON;