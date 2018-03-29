

  const fs = require('fs');
  const path = require('path');

  if (process.argv.length <= 2) {
      console.log("Usage: " + __filename + " path/to/directory");
      process.exit(-1);
  }

  const pathName = process.argv[2];

  fs.readdir(pathName, (err, dirs) => {
    ;

    for(i = 0; i< dirs.length; i++){
      if(path.extname(dirs[i]) === "." + process.argv[3]) {
        //console.log(dirs[i]);
        var list = []
        list.push(dirs[i])
      }
    }

  })
