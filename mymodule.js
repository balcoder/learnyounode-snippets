const fs = require('fs');
const path = require('path');

const filtered = function(name, ext, callback) {
  fs.readdir(name, (err, dirs) => {
    if(err) return callback(err);
    var list = [];
    for(i = 0; i< dirs.length; i++){
      if(path.extname(dirs[i]) === "." + ext) {
        list.push(dirs[i])
      }
    }
    callback(null,list);
  })
};

module.exports = filtered;
