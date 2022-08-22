const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
//Output a prompt
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  let arr = cmd.split(" ");

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (arr[0] === "cat") {
    cat(arr[1]);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

function done(output){
  if(output === err){
    throw err
  } else {
    process.stdout.write(files.join("\n"));
    process.stdout.write("prompt > ");
  }
};
