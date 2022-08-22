module.exports = function (file) {
  const fs = require("fs");

  fs.readFile(`${file}`, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write("prompt > ");
  });
};
