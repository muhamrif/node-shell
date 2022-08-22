module.exports = function (file,done) {
  const fs = require("fs");

  fs.readFile(`${file}`, (err, data) => {
    if (err) {done("error, something went wrong : (")};
    done(data);
  });
};
