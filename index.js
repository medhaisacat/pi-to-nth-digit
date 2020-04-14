// Get input from console
var decimals = process.argv[2]

if (decimals > 51) {
    console.error("Sorry! I can only print upto 51 digits after the decimal! ***Please enter a valid number***")
    return
}

var pi = 22 / 7

// Print pi upto input number of decimals if input is less than 52
try {
    console.log(pi.toFixed(decimals))
}
catch (error) {
    console.error(error.message)
}