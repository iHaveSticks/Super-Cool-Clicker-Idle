
export default function NumberCompacter(num) {
  /*
    Changes numbers over a thousand into a shorter form
    or adds a comma if in the thousands range
    EX: 3784587 changes to '3.78 Million'
    EX: 1000 changes to '1,000'
    EX: 222 stays the same
  */
  num = Number(num); //Ensure num is Number not BigInt

  return num < 1.0e+3
  ? num

  // Thousands
  : num < 1.0e+6
  ?  // Slice string to add comma and then rejoin
  num.toString().slice(0, num.toString().length - 3)
  + ',' +
  num.toString().slice(num.toString().length - 3)

  // Millions 
  : num < 1.0e+9
  ? (num / 1.0e+6).toFixed(2) + " Million"

  // Billions
  : num < 1.0e+12
  ? (num / 1.0e+9).toFixed(2) + " Billion"

  // Trillions
  : num < 1.0e+15
  ? (num / 1.0e+12).toFixed(2) + " Trillion"

  // Quadrillions
  : num < 1.0e+18
  ? (num / 1.0e+15).toFixed(2) + " Quadrillion"

  // Quintillions
  : num < 1.0e+21
  ? (num / 1.0e+18).toFixed(2) + " Quintillion"

  // Sextillions
  : num < 1.0e+24
  ? (num / 1.0e+21).toFixed(2) + " Sextillion"

  // Septillions
  : num < 1.0e+27
  ? (num / 1.0e+24).toFixed(2) + " Septillion"

  // Octillions
  : num < 1.0e+30
  ? (num / 1.0e+27).toFixed(2) + " Octillion"

  // Nonillions
  : num < 1.0e+33
  ? (num / 1.0e+30).toFixed(2) + " Nonillion"

  // Decillions
  : num < 1.0e+36
  ? (num / 1.0e+33).toFixed(2) + " Decillion"

  // Undecillions
  : num < 1.0e+39
  ? (num / 1.0e+36).toFixed(2) + " Undecillion"

  // Duodecillions
  : num < 1.0e+42
  ? (num / 1.0e+39).toFixed(2) + " Duodecillion"

  // Tredecillions
  : num < 1.0e+45
  ? (num / 1.0e+42).toFixed(2) + " Tredecillion"

  // Quattuordecillions
  : num < 1.0e+48
  ? (num / 1.0e+45).toFixed(2) + " Quattuordecillion"

  // Tredecillions
  : num < 1.0e+51
  ? (num / 1.0e+48).toFixed(2) + " Quindecillion"

  // Sexdecillions
  : num < 1.0e+54
  ? (num / 1.0e+51).toFixed(2) + " Sexdecillion"

  // Septendecillions
  : num < 1.0e+57
  ? (num / 1.0e+54).toFixed(2) + " Septendecillion"

  // Octodecillions
  : num < 1.0e+60
  ? (num / 1.0e+57).toFixed(2) + " Octodecillion"

  : num
}