const flattenJSON = require('../src/flattenJSON');


describe('flattenJSON.js tests', () => {

    test('empty object returns empty object', () => {
        const emptyObject = {};

        expect(flattenJSON(emptyObject)).toEqual({});
    });

    test('non-nested object returns identical object', () => {
        const nonNestedObject = {
            "name": "William Steffens",
            "age": 23,
            "height": 1.86
        }

        expect(flattenJSON(nonNestedObject)).toEqual({
            "name": "William Steffens",
            "age": 23,
            "height": 1.86
        });
    });

    test('nested object returns the flat version of the object', () => {
        const nestedObject = {
            "name": {
                "firstName": "William",
                "middleName": "Frederik",
                "lastName": "Steffens"
            },
            "age": 23,
            "height": 1.86,
            "favorite": {
                "dish": "Tuna steak",
                "game": "Witcher 3",
                "number": 22,
                "database": "MongoDB"
            }
        }

        expect(flattenJSON(nestedObject)).toEqual({
            "name.firstName": "William",
            "name.middleName": "Frederik",
            "name.lastName": "Steffens",
            "age": 23,
            "height": 1.86,
            "favorite.dish": "Tuna steak",
            "favorite.game": "Witcher 3",
            "favorite.number": 22,
            "favorite.database": "MongoDB"
        });
    });

    test('double nested object returns the flat version of the object', () => {
        const doubleNestedObject = {
            "magicHat": {
                "rabbit": true,
                "rabbitsMagicHat": {
                    "cards": true,
                    "wand": false,
                    "coloredRope": true
                }
            }
        }

        expect(flattenJSON(doubleNestedObject)).toEqual({
            "magicHat.rabbit": true,
            "magicHat.rabbitsMagicHat.cards": true,
            "magicHat.rabbitsMagicHat.wand": false,
            "magicHat.rabbitsMagicHat.coloredRope": true,
        });
    });
});