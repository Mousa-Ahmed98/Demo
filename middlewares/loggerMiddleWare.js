const writeFile = require("../utilities/writeToFile")
function loggerMiddleWare(req, res, next){
    const time = new Date().toISOString();
    console.log(`Server log ${req.method} ${req.url} ${res.statusCode} ${time}`)
    const loggRequest = {method: req.method, url: req.url, time: time};


    writeFile(JSON.stringify(loggRequest)+"\n");
    next();

}

module.exports = loggerMiddleWare