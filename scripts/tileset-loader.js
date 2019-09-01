const fs = require('fs');
const path = require('path');

const tileset_path = path.resolve(process.argv[2]);

const tokens = tileset_path.split('/');
const tileset_name = tokens[tokens.length - 1];

const stream = fs.createWriteStream(`autoload/${tileset_name}.tileset.loader.js`);
console.log('stream open at', `${tileset_name}.tileset.loader.js`);

stream.write(`
/** Generated from cli **/
module.exports = (GameDong) => {
    const AssetManager = GameDong.AssetManager;
    const prefix = '${tileset_path}';
`);

fs.readdir(tileset_path, (err, files) => {
    if (err) {
        console.error(err);
    }

    else {
        //console.table(files);
        files.forEach(file => {
            // stream.write(`    AssetManager.store('${file}', require(prefix + '/${file}'));\n`);
            stream.write(`    AssetManager.store('${file}', require('${tileset_path}/${file}'));\n`);
        });

        stream.write(`
};

        `);
    }
});

stream.on('finish', () => {
    console.log('wrote all data to file');
    stream.end(); 
});

// close the stream

