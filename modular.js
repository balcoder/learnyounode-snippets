const mymodule = require('./mymodule');

const pathName = process.argv[2];
const ext = process.argv[3];

 mymodule(pathName, ext, function(err,list){
   if(err) {
     return console.log("There was an error: " + err );
   }

   list.forEach((element) => {
     console.log(element);
   })
 })
