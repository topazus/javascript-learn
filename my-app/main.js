
const fs = require('fs'), path = require('path');
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};

walkDir('/Users/felix/test-ocaml', function (filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    console.log(filePath, fileContents);
});
