function BuildExamplePlugin() {}

BuildExamplePlugin.prototype.apply = function(compiler) {
  let path = require("path");
  const fs = require("fs");
  // console.log("Hello Webpack");

  const deleteFolderRecursive = function(directory_path) {
    if (fs.existsSync(directory_path)) {
      fs.readdirSync(directory_path).forEach(function(file, index) {
        var currentPath = path.join(directory_path, file);
        if (fs.lstatSync(currentPath).isDirectory()) {
          deleteFolderRecursive(currentPath);
        } else {
          fs.unlinkSync(currentPath); // delete file
        }
      });
      fs.rmdirSync(directory_path); // delete directories
    }
  };
  // call function by passing directory path
  deleteFolderRecursive(path.resolve("dist"));
};
module.exports = BuildExamplePlugin;
