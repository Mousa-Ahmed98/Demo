const fs = require("fs");

const path = require("path")

const filePath = path.join(__dirname, "..", "text", "logs.txt");


function writeToFile(loggRequest) {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) console.log(err.message);
        else {
            fs.writeFile(filePath, loggRequest, { flag: "a" }, (err) => {
                if (err) console.log(err.message);
            });
        }
    });
}


module.exports = writeToFile;