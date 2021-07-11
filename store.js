const fs = require('fs')

module.exports = (data, path) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
        console.log('conversion done...OK')
    } catch (err) {
        console.error(err)
    }
}