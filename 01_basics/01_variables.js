/*---------------------------------------------------------------------
* JavaScript | Variable | Version: 1 | Revision | Author: Omprakash
*----------------------------------------------------------------------

/*--------------------------------- var, let and const | Start --------------------------------------
* 1.The (let) keyword was introduced in ES6 (2015).
* 2.Variables defined with (let) cannot be Redeclared.
* 3.Variables defined with (let) must be Declared before use.
* 4.Variables defined with (let) have Block Scope. 
*/


//With "let" you can not do this:
{
    let x = "John Doe";

    //	let x = 0;  // SyntaxError: 'x' has already been declared
}

//With var you can:
{
    var y = "John Doe";
    var y = 0;
}


/*--------------------------
 BLOCK SCOPE
*-----------------------------
*Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
*ES6 introduced two important new JavaScript keywords: let and const.
*These two keywords provide Block Scope in JavaScript.
*Variables declared inside a { } block cannot be accessed from outside the block:
*
*/

{
    let myPhone = "SamsungA50";
    const myHandset = "SamsungA50plus";
    var myMobile = "SamsungA50s";
    //	variables declared with "let" and "const" keyword can be used here
}
//	variables declared with "let" and "const" keyword can not be used here

// console.log(myPhone);   // return: myPhone is not defined
// console.log(myHandset); // return: myHandset is not defined

//Variables declared with the "var" keyword can not have block scope.
//Variables declared inside a { } block can be accessed from outside the block. 
console.log(myMobile); // Return: SamsungA50s


/*-------------
* let Hoisting
*--------------
* Variables defined with "var" are hoisted to the top and can be initialized at any time.
* Meaning: You can use the variable before it is declared: 
*/

//It is ok
{

    carName = "Volvo";
    var carName;
    console.log(carName);
}

/*
* Variables defined with "let" are also hoisted to the top of the block, but not initialized.
* Meaning: Using a "let" variable before it is declared will result in a ReferenceError: 
*/

//return: error
{
    //	carName = "Saab";
    //	let carName = "Volvo"; 
    //	console.log(carName);
}
/*------------------------------------- Block Scope | End -----------------------------------------*/


/*-------------------------------------------------------------------------------------------
Note: It's a good programming practice to declare all variables at the beginning of a script.
---------------------------------------------------------------------------------------------

/*------------------------------
* One Statement, Many Variables
*-------------------------------
* You can declare many variables in one statement.
* Start the statement with let and separate the variables by comma
*/
{
    let name = "mike", age = 26, address = "USA";

    console.log(name);
    console.log(age);
    console.log(address);
}

{
    //Variable declaration can span multiple lines: 
    let name = "Deepu singh",
        age = 24,
        address = "new Delhi";
    console.log(name);
    console.log(age);
    console.log(address);
}


//if you calculate number but if you add strings in this list this will be concatenated insted of calculation
//Note: If you put a number in quotes, the rest of the numbers will be treated as strings and concatenated.
{
    // It will concatenated
    let x = "5" + 2 + 3;
    console.log(x); // Return: 523

    //	It will be calculated
    let y = 5 + 2 + 3;
    console.log(y); // Return: 10
}


/*------------------------
* JavaScript Dollar Sign $
*-------------------------
* Since JavaScript treats a dollar($) sign as a letter, we can use the "$" as varible Name/identifiers.
* This is valid variable names.
* Using the dollar sign is not very common in JavaScript but professional programmers often use it as an alias for the main function in a JavaScript library like jQuery.
* In the JavaScript library jQuery, for instance, the main function "$" is used to select HTML elements. In jQuery $("p"); means "select all p elements".
*/
{
    let $ = 15;
    let $$ = 20;
    let $myMoney = "Rupees";
    console.log($);
    console.log($$);
    console.log($myMoney);

}

/*-------------------------
* JavaScript Underscore (_)
*--------------------------
* Since JavaScript treats underscore as a letter, identifiers/Variables containing _ are valid variable names.
* Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
*/
{
    let _name = "Deepu singh";
    let _age = 25;
    let _address = "Raniganj -" + `${_name}`;

    console.log(_name);
    console.log(_age);
    console.log(_address);
}

/*------------------------------------- var, Let and const | End ------------------------------------*/