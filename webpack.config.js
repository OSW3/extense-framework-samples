const ExtenseFramework = require('extense');

let chromeExtension = new ExtenseFramework( __dirname );
    // chromeExtension.debug = true;

module.exports = chromeExtension.load();