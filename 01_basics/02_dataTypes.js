/* ---------------------------------------------------------------------
 * JavaScript | Data Types | Lecture: 2 | Revision | Author: Omprakash
 * -------------------------------------------------------------------*/

/* ---------------------------------------------------------------------
 * Old JavaScript vs Modern JavaScript
 * ---------------------------------------------------------------------
 * In early JavaScript (before ES6):
 *   - Classes, Modules, and Arrow Functions were not available.
 *   - Most legacy codebases were written in the older syntax.
 *
 * To maintain backward compatibility/To avoid breaking old code///:
 *   - The committee introduced "use strict";
 *   - This directive tells the V8 engine to treat code as modern JS.
 *
 * NOTE: Modern JavaScript engines (like V8) already follow strict mode
 *       by default. Adding "use strict"; is no longer required.
 * -------------------------------------------------------------------*/

/* ---------------------------------------------------------------------
 * Using alert() in Node.js
 * ---------------------------------------------------------------------
 * WARNING: The alert() function only works in browsers.
 *          If you run it in Node.js, it will throw an error.
 *
 * In Node.js, use console.log() or other alternatives instead.
 * -------------------------------------------------------------------*/

/* ---------------------------------------------------------------------
 * Code Readability Guidelines
 * ---------------------------------------------------------------------
 * - Semicolons are optional in JavaScript; avoid unnecessary usage.
 * - Always keep one statement per line for clarity.
 *
 * Example (Don't):
 *   console.log("Omprakash"); console.log("Deepu");
 *
 * Example (Do):
 *   console.log("Omprakash");
 *   console.log("Deepu");
 * -------------------------------------------------------------------*/

/* ---------------------------------------------------------------------
 * Primitive Data Types
 * ---------------------------------------------------------------------
 * number     -> e.g., 42 (supports values up to 2^53)
 * bigint     -> for very large integers
 * string     -> e.g., "Omprakash"
 * boolean    -> true / false
 * null       -> standalone empty value
 * undefined  -> variable declared but not assigned
 * symbol     -> unique identifier (used in React for unique components)
 * -------------------------------------------------------------------*/

/* ---------------------------------------------------------------------
 * Non-Primitive Data Types
 * ---------------------------------------------------------------------
 * object -> collection of key-value pairs
 *
 * NOTE: Only objects (including arrays, functions, dates, etc.)
 *       are non-primitive. The rest are primitive.
 * -------------------------------------------------------------------*/

/* ---------------------------------------------------------------------
 * Checking Data Types
 * ---------------------------------------------------------------------
 * Use the typeof operator:
 * -------------------------------------------------------------------*/
console.log(typeof "Omprakash"); // string
console.log(typeof null);        // object (quirk in JS)
console.log(typeof undefined);   // undefined

/* ---------------------------------------------------------------------
 * JavaScript Documentation
 * ---------------------------------------------------------------------
 * 1. MDN Documentation:
 *    - URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript
 *    - Easy to understand
 *    - Maintained by Mozilla
 *    - Not the official standard
 *
 * 2. ECMAScript Specification:
 *    - URL: https://tc39.es/ecma262/
 *    - Official and authoritative
 *    - Defines the language standard
 *    - More difficult to read
 * -------------------------------------------------------------------*/