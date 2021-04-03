

export default function NumberCompacter(num) {
        // Changes a long inputed number into a shorter form starting from millions.
        // ex int 3784587 changes to '3.78 Million'


        // fifty-seven Zeroes for Octodecillions
        return Math.abs(Number(num)) >= 1.0e+57
        ? (Math.abs(Number(num)) / 1.0e+57).toFixed(2) + " Octodecillion"

        // Fifty-four Zeroes for Septendecillions
        : Math.abs(Number(num)) >= 1.0e+54
        ? (Math.abs(Number(num)) / 1.0e+54).toFixed(2) + " Septendecillion"

        // Fifty-one Zeroes for Sexdecillions
        : Math.abs(Number(num)) >= 1.0e+51
        ? (Math.abs(Number(num)) / 1.0e+51).toFixed(2) + " Sexdecillion"

        // Forty-eight Zeroes for Tredecillions
        : Math.abs(Number(num)) >= 1.0e+48
        ? (Math.abs(Number(num)) / 1.0e+48).toFixed(2) + " Quindecillion"

        // Forty-five Zeroes for Quattuordecillions
        : Math.abs(Number(num)) >= 1.0e+45
        ? (Math.abs(Number(num)) / 1.0e+45).toFixed(2) + " Quattuordecillion"

        // Forty-two Zeroes for Tredecillions
        : Math.abs(Number(num)) >= 1.0e+42
        ? (Math.abs(Number(num)) / 1.0e+42).toFixed(2) + " Tredecillion"

        // Thirty-nine Zeroes for Duodecillions
        : Math.abs(Number(num)) >= 1.0e+39
        ? (Math.abs(Number(num)) / 1.0e+39).toFixed(2) + " Duodecillion"

        // Thirty-six Zeroes for Undecillions
        : Math.abs(Number(num)) >= 1.0e+36
        ? (Math.abs(Number(num)) / 1.0e+36).toFixed(2) + " Undecillion"

        // Thirty-three Zeroes for Decillions
        : Math.abs(Number(num)) >= 1.0e+33
        ? (Math.abs(Number(num)) / 1.0e+33).toFixed(2) + " Decillion"

        // Thirty Zeroes for Nonillions
        : Math.abs(Number(num)) >= 1.0e+30
        ? (Math.abs(Number(num)) / 1.0e+30).toFixed(2) + " Nonillion"

        // Twenty-seven Zeroes for Octillions
        : Math.abs(Number(num)) >= 1.0e+27
        ? (Math.abs(Number(num)) / 1.0e+27).toFixed(2) + " Octillion"

        // Twenty-four Zeroes for Septillions
        : Math.abs(Number(num)) >= 1.0e+24
        ? (Math.abs(Number(num)) / 1.0e+24).toFixed(2) + " Septillion"

        // Twenty-one Zeroes for Sextillions
        : Math.abs(Number(num)) >= 1.0e+21
        ? (Math.abs(Number(num)) / 1.0e+21).toFixed(2) + " Sextillion"

        // Eighteen Zeroes for Quintillions
        : Math.abs(Number(num)) >= 1.0e+18
        ? (Math.abs(Number(num)) / 1.0e+18).toFixed(2) + " Quintillion"

        // Fifteen Zeroes for Quadrillions
        : Math.abs(Number(num)) >= 1.0e+15
        ? (Math.abs(Number(num)) / 1.0e+15).toFixed(2) + " Quadrillion"

        // Twelve Zeroes for Trillions
        : Math.abs(Number(num)) >= 1.0e+12
        ? (Math.abs(Number(num)) / 1.0e+12).toFixed(2) + " Trillion"

        // Nine Zeroes for Billions
        : Math.abs(Number(num)) >= 1.0e+9
        ? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + " Billion"

        // Six Zeroes for Millions 
        : Math.abs(Number(num)) >= 1.0e+6
        ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + " Million"
    
        : Math.abs(Number(num).toFixed(0))
    
}