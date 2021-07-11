const store = require('./store');
const states = require('./states.json');
const json = require('./locations.json');

(() => {
    const getCode = (key) => {
        let state = '';
        states.forEach(loc => {
            if(loc.name == key) state = loc.abbreviation
        });

        return state;
    }

    let code = ''
    const locations = []

    Object.keys(json).map(item => {
        code = getCode(item)
        json[item].forEach(city => {
            if(code) {
                locations.push({
                    city,
                    state: code
                })
            }
        })
    });

    const pathfile = './output.json'
    store(locations, pathfile)
})()