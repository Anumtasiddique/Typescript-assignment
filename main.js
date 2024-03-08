//In this file i practice all my work which I learnt from class 1 to 5 
//-------------  Variable   -------------
//A variable is a named location in memory to store data 
//There are three different keywords to define variable 
//------------> Var , Let and Constant ------------->
var PersonName = "Anumta";
var message = 'My age is';
var age = 17;
console.log(PersonName, message, age);
// There are seven basic types of Data types
// String , Number , Boolean , Null , Undefined , Symbol , Bigint 
// String : Represent a sequence of character
// Number : Represent numeric Values
//Boolean : Represent True or False Values
// Null : Represent the absent or empty value
// Undefined : That's has'nt been assigned any value , which means 'emty' or 'nothing'
//Symbol : Represent a unique non - numeric value
// Bigint : Is a new data type to store integers bigger
//Example 1 string
var fullName = "Shezi";
console.log(fullName);
//Example 2 number
var Myage = 17;
console.log(Myage);
//Example 3 Boolean
var isStudent = true;
console.log(isStudent);
//Example 4 null;
var A = null;
console.log(A);
//Example 5 undefined
var B = undefined;
console.log(B);
//Example 6 symbol
var uniquesymbol = ("bye");
console.log(uniquesymbol);
//Example 7 Bigint
var bignumber = 2578;
console.log(bignumber);
// ---------> Cases ---------->
//camelCase
//snake_case
//PascalCase
var dryFruits = "Badaam"; //camelCase
var dry_fruits = "Pista"; //snake_case
var DryFruits = "Kishmish"; //PascalCase
var isDryFruit = true;
var is_dry_fruit = 40;
var IsDryFruit = false;
var antype;
console.log(dryFruits, dry_fruits, DryFruits, isDryFruit, is_dry_fruit, IsDryFruit, antype);
// array = > [] = > [] 0 ,
//Create string array        
var GuestsName = ["Ahmed", "Bilal", "Laiba", "laraib", "Mehwish"];
var firstguestname = GuestsName[0];
console.log(firstguestname);
var fruitsName = ["Apple", "Grapes", "Mango"];
fruitsName[0] = "Banana";
console.log(fruitsName);
//Create number araay
var studentsscore = [10, 20, 30, 40, 50];
var firststudentscore = studentsscore[1];
console.log(firststudentscore);
studentsscore[3] = 60;
console.log(studentsscore);
//Create boolean array
var isPatient = [true, false, true, false];
var firstpatientname = isPatient[3];
console.log(firstpatientname);
isPatient[2] = false;
console.log(isPatient);
