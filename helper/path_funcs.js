const path = require("path");

exports.getPath = () => {
    return path.join(...(__dirname.split("\\").slice(0,-1)));
}

