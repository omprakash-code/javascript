/* ------------------------------------------------------------------------------
 * JavaScript | Conversion Operation | Lecture: 2 | Revision | Author: Omprakash
 * ----------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------
 * TOPIC: Converting String Input Value to Numbers
 * ---------------------------------------------------------------------*/

/*
* Case 1: Direct Number Input 
* ---------------------------
* If the value already number, no conversion needed.
 */
let score = 80 
console.log(typeof score) // number
console.log(score + 20) // 100 (works fine)

/**
 * Case 2: String Input (Numeric String)
 * --------------------------------------
 * When the input comes as a string, you must convert it.
 */
let score_2 = "80";                   // string (not usable for calculations)
let score_2_in_num = Number(score_2); // convert to number
console.log(typeof score_2_in_num);   // number
console.log(score_2_in_num + 20);     // 100 (works fine)

/**
 * Case 3: Invalid Numeric String
 * -------------------------------
 * If the string contains non-numeric characters (like "80%" or "My score is 80"),
 * `Number()` conversion will fail and return `NaN` (Not a Number).
 */
let score_3 = "80%";
let score_3_in_num = Number(score_3);
console.log(typeof score_3_in_num); // number (but value is NaN)
console.log(score_3_in_num);        // NaN (Not a valid number)
console.log(score_3_in_num + 20);     // NaN (not usable for calculation)

/**
 * Case 4: Null Value
 * -------------------------------
 * if Null Value receive in input
 * `Number()` conversion will fail and return `NaN` (Not a Number).
 */
let score_4 = null;
let score_4_in_num = Number(score_4);
console.log(typeof score_4_in_num); // number (but value is NaN)
console.log(score_4_in_num);        // 0 (valid number)
console.log(score_4_in_num + 20);     // 20 (Works fine)