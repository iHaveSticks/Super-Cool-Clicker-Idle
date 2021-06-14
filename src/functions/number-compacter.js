/* global BigInt */ //<-- enable BigInt()

export default function NumberCompacter(num) {

        /*
                Changes numbers(BigInts) over a thousand into a shorter form
                or adds a comma if in the thousands range

                EX: 3784587 changes to '3.78 Million'
                EX: 1000 changes to '1,000'
                EX: 222 stays the same
        */
        num = BigInt(num);

        return num < BigInt(1.0e+3)
        ? `${num}`

        // Thousands
        : num < BigInt(1.0e+6)
        ?  // Slice string to add comma and then rejoin
        num.toString().slice(0, num.toString().length - 3)
        + ',' +
        num.toString().slice(num.toString().length - 3)

        // Millions 
        : num < BigInt(1.0e+9)
        ? (num / BigInt(1.0e+6)) + " Million"

        // Billions
        : num < BigInt(1.0e+12)
        ? (num / BigInt(1.0e+9)) + " Billion"

        // Trillions
        : num < BigInt(1.0e+15)
        ? (num / BigInt(1.0e+12)) + " Trillion"

        // Quadrillions
        : num < BigInt(1.0e+18)
        ? (num / BigInt(1.0e+15)) + " Quadrillion"

        // Quintillions
        : num < BigInt(1.0e+21)
        ? (num / BigInt(1.0e+18)) + " Quintillion"

        // Sextillions
        : num < BigInt(1.0e+24)
        ? (num / BigInt(1.0e+21)) + " Sextillion"

        // Septillions
        : num < BigInt(1.0e+27)
        ? (num / BigInt(1.0e+24)) + " Septillion"

        // Octillions
        : num < BigInt(1.0e+30)
        ? (num / BigInt(1.0e+27)) + " Octillion"

        // Nonillions
        : num < BigInt(1.0e+33)
        ? (num / BigInt(1.0e+30)) + " Nonillion"

        // Decillions
        : num < BigInt(1.0e+36)
        ? (num / BigInt(1.0e+33)) + " Decillion"

        // Undecillions
        : num < BigInt(1.0e+39)
        ? (num / BigInt(1.0e+36)) + " Undecillion"

        // Duodecillions
        : num < BigInt(1.0e+42)
        ? (num / BigInt(1.0e+39)) + " Duodecillion"

        // Tredecillions
        : num < BigInt(1.0e+45)
        ? (num / BigInt(1.0e+42)) + " Tredecillion"

        // Quattuordecillions
        : num < BigInt(1.0e+48)
        ? (num / BigInt(1.0e+45)) + " Quattuordecillion"

        // Tredecillions
        : num < BigInt(1.0e+51)
        ? (num / BigInt(1.0e+48)) + " Quindecillion"

        // Sexdecillions
        : num < BigInt(1.0e+54)
        ? (num / BigInt(1.0e+51)) + " Sexdecillion"

        // Septendecillions
        : num < BigInt(1.0e+57)
        ? (num / BigInt(1.0e+54)) + " Septendecillion"

        // Octodecillions
        : num < BigInt(1.0e+60)
        ? (num / BigInt(1.0e+57)) + " Octodecillion"

        : `${num}`
}