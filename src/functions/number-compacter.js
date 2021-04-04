

export default function NumberCompacter(num) {
        /*
                Changes number over a thousand into a shorter form
                or adds a comma if in the thousands range

                EX: int 3784587 changes to '3.78 Million'
                EX: int 1000 changes to '1,000'
                EX: int 222 stays the same
        */
        num = Math.abs(Number(num)).toFixed(0);

        // fifty-seven Zeroes for Octodecillions
        return num >= 1.0e+57
        ? (num / 1.0e+57).toFixed(2) + " Octodecillion"

        // Fifty-four Zeroes for Septendecillions
        : num >= 1.0e+54
        ? (num / 1.0e+54).toFixed(2) + " Septendecillion"

        // Fifty-one Zeroes for Sexdecillions
        : num >= 1.0e+51
        ? (num / 1.0e+51).toFixed(2) + " Sexdecillion"

        // Forty-eight Zeroes for Tredecillions
        : num >= 1.0e+48
        ? (num / 1.0e+48).toFixed(2) + " Quindecillion"

        // Forty-five Zeroes for Quattuordecillions
        : num >= 1.0e+45
        ? (num / 1.0e+45).toFixed(2) + " Quattuordecillion"

        // Forty-two Zeroes for Tredecillions
        : num >= 1.0e+42
        ? (num / 1.0e+42).toFixed(2) + " Tredecillion"

        // Thirty-nine Zeroes for Duodecillions
        : num >= 1.0e+39
        ? (num / 1.0e+39).toFixed(2) + " Duodecillion"

        // Thirty-six Zeroes for Undecillions
        : num >= 1.0e+36
        ? (num / 1.0e+36).toFixed(2) + " Undecillion"

        // Thirty-three Zeroes for Decillions
        : num >= 1.0e+33
        ? (num / 1.0e+33).toFixed(2) + " Decillion"

        // Thirty Zeroes for Nonillions
        : num >= 1.0e+30
        ? (num / 1.0e+30).toFixed(2) + " Nonillion"

        // Twenty-seven Zeroes for Octillions
        : num >= 1.0e+27
        ? (num / 1.0e+27).toFixed(2) + " Octillion"

        // Twenty-four Zeroes for Septillions
        : num >= 1.0e+24
        ? (num / 1.0e+24).toFixed(2) + " Septillion"

        // Twenty-one Zeroes for Sextillions
        : num >= 1.0e+21
        ? (num / 1.0e+21).toFixed(2) + " Sextillion"

        // Eighteen Zeroes for Quintillions
        : num >= 1.0e+18
        ? (num / 1.0e+18).toFixed(2) + " Quintillion"

        // Fifteen Zeroes for Quadrillions
        : num >= 1.0e+15
        ? (num / 1.0e+15).toFixed(2) + " Quadrillion"

        // Twelve Zeroes for Trillions
        : num >= 1.0e+12
        ? (num / 1.0e+12).toFixed(2) + " Trillion"

        // Nine Zeroes for Billions
        : num >= 1.0e+9
        ? (num / 1.0e+9).toFixed(2) + " Billion"

        // Six Zeroes for Millions 
        : num >= 1.0e+6
        ? (num / 1.0e+6).toFixed(2) + " Million"
    
        // Three Zeroes for Thousands
        : num >= 1.0e+3
        ?  // Slice string to add comma and then rejoin
         num.toString().slice(0, num.toString().length - 3)
         + ',' +
         num.toString().slice(num.toString().length - 3)

        // No change
        : num;
}