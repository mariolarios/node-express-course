const { readFile, writeFile } = require("fs");

console.log("start")

readFile("./answers/content/first.txt","utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./answers/content/second.txt","utf8", (err, result)=>{
    if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile("./answers/content/result_async.txt", `Here is the result: ${first}, ${second}`
      , (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
      })

     } )
    });

    console.log('starting next task')