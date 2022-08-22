const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
//Output a prompt

function done(output){
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}





process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  let arr = cmd.split(" ");

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (arr[0] === "cat") {
    cat(arr[1],done);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});


