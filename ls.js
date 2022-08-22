module.exports = function (done) {
  const fs = require("fs");
  // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join("\n"));
      // process.stdout.write("prompt > ");
    }
  });
};
