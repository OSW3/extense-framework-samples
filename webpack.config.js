const ExtenseFramework = require('extense');

let extension = new ExtenseFramework( __dirname );
    // extension.debug = true;

module.exports = extension.load();