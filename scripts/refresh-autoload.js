const env = process.env.NODE_ENV || "development";

let labels = {};

console.log(env);

if (env === 'development') {
    labels.GameDong = 'GameDong';
    labels.prefix = 'prefix';
    labels.require = 'require';
    labels.indent = '    ';
    labels.space = ' ';
    labels.newline = '\n';
}

else {
    labels.GameDong = 'g';
    labels.prefix = 'p';
    labels.require = 'r';
    labels.indent = '';
    labels.space = '';
    labels.newline = '';
}

const fs = require('fs');
const path = require('path');

const autoload_dir = path.resolve('./autoload');

const stream = fs.createWriteStream(`autoload/index.js`);

if (env === 'development') {
    stream.write('/** Generated from cli **/\n');
}

// stream.write(`module.exports${labels.space}=${labels.space}${labels.GameDong}${labels.space}=>${labels.space}{${labels.newline}${labels.indent}const ${labels.prefix}${labels.space}=${labels.space}'${autoload_dir}';${labels.newline}`);
stream.write(`module.exports${labels.space}=${labels.space}${labels.GameDong}${labels.space}=>${labels.space}{${labels.newline}${labels.indent}const ${labels.prefix}${labels.space}=${labels.space}'.';${labels.newline}`);

if (env !== 'development') {
    stream.write(`const ${labels.require}${labels.space}=${labels.space}require;${labels.newline}`);
}

fs.readdir(autoload_dir, (err, files) => {
    if (err) {
        console.error(err);
    }

    else {
        //console.table(files);
        files.forEach(file => {
            if (file !== 'index.js') {
                stream.write(`${labels.indent}${labels.require}(${labels.prefix}${labels.space}+${labels.space}'/${file}')(${labels.GameDong});${labels.newline}`);
            }
            
        });

        stream.write(`${labels.newline}};${labels.newline}`);
    }
});

stream.on('finish', () => {
    console.log('wrote all data to file');
    stream.end(); 
});

// close the stream

