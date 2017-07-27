var chalk = require("chalk")

const boldRed = chalk.red.bold
const underlineGreen = chalk.underline.green
var message = underlineGreen("Hello") + " " + boldRed("World")
console.log(message)