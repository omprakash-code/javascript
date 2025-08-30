/*---------------------------------------------------------------------
* JavaScript | DataTypes | lectur: 2 | Revision | Author: Omprakash
*----------------------------------------------------------------------

/*
* There difference between old JavaScript and New JavaScript
* Classes, Modules, Arrow Functions, these were not available
* Most programm was written in old javaScript
* JavaScipt organization/Commetee don't wanted to make the old code useless because you are now writing new js code
* they introduced a new keyword ("Use Strict";) so the all code will be treated as new version of js by V8 engine
* However, now this is not necessary to write "use strict"; becuase advance V8 already treat as new version code
*/


/*----------------------
* Use of alert() in node 
*------------------------
* It will throw an error, it only work on browser, there are different method to run this in node.js
* Don't run alert() in node.js
*/

/*----------------------
* Code Readability
*------------------------
* Avoid writing semicolon in js (Not required).
* Always write code line by line, do not write 2 and more line of code in one line by using semicolon
*
*****************
* Example (Don't)
* 
*  console.log("Omprakash"); console.log("Deepu")
* --------------------------------------------------
* Example (Do)
* 
*  console.log("Omprakash"); 
*  console.log("Deepu")
* 
*/


/*----------------------
* Premitives DataTypes
*------------------------
* number    => 2 (2 to the power of 53)
* bigint    => Large number
* string    => "Omprakash"
* boolean   => true/false
* null      => this is standalone value
* undefined => 
* symbol    => unique //To find uniqe value, we will use this in react to check unque componants
*
*/

/*----------------------
* Non-Premitives DataTypes
*------------------------
* object   => 2 (2 to the power of 53)
* bigint    => Large number
* string    => "Omprakash"
* boolean   => true/false
* null      => this is standalone value
* undefined => 
* symbol    => unique //To find uniqe value, we will use this in react to check unque componants
*
*/

// Use typeof keyword to check the datatype of any variable or value
// Example 
console.log(typeof "Omprakash") //Return: string
console.log(typeof null) //Return: object (This is cons of js)
console.log(typeof undefined) //Return: undefined (This is cons of js)

/*----------------------
* JavaScipt Documentation
*------------------------
* There are two main documentation
* 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript 
*    - This is not original documentation
*    - This is easy to read
*    - Maintained by Mozilla
*
* 2. https://tc39.es/ecma262/
*    - This is original documentation
*    - This is hard to read
*    - This is standerd set by EcmaScript
*/