//In this file i practice all my work which I learnt from class 1 to 5 

                   //-------------  Variable   -------------

             //A variable is a named location in memory to store data 
             //There are three different keywords to define variable 
             //------------> Var , Let and Constant ------------->

let PersonName : string = "Anumta";
let message : string = 'My age is';
let age : number = 17

console.log(PersonName , message , age);


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
 let fullName : string = "Shezi";
 console.log(fullName);

 //Example 2 number
 let Myage : number = 17;
 console.log(Myage);

//Example 3 Boolean
let isStudent : boolean = true;
console.log(isStudent);

//Example 4 null;
let A :null = null;
console.log(A);

//Example 5 undefined
let B : undefined = undefined;
console.log(B);

//Example 6 symbol
let uniquesymbol = ("bye");
console.log(uniquesymbol);

//Example 7 Bigint
let bignumber = 2578;
console.log(bignumber);



                  // ---------> Cases ---------->
  //camelCase
  //snake_case
  //PascalCase
  
let dryFruits : string = "Badaam"  ; //camelCase
let dry_fruits : string = "Pista"  ; //snake_case
let DryFruits : string = "Kishmish"; //PascalCase

let isDryFruit : boolean = true;
let is_dry_fruit : number = 40;
let IsDryFruit : boolean = false;
let antype : any;

console.log(dryFruits , dry_fruits , DryFruits , isDryFruit , is_dry_fruit , IsDryFruit , antype );


         // array = > [] = > [] 0 ,

 //Create string array        
 
 let GuestsName : string[] = ["Ahmed" , "Bilal" , "Laiba" ,  "laraib" , "Mehwish"] ;
 let firstguestname = GuestsName[0]  ;
 console.log(firstguestname)  ;

let fruitsName :string[] = ["Apple" , "Grapes" , "Mango"];
fruitsName[0] = "Banana";
console.log(fruitsName);


//Create number araay
let studentsscore : number[] = [10 , 20 , 30 , 40 , 50 ];
let firststudentscore =  studentsscore[1];
console.log(firststudentscore);
studentsscore[3] = 60;
console.log(studentsscore);

//Create boolean array
let isPatient: boolean[] = [true , false , true , false];
let firstpatientname = isPatient[3];
console.log(firstpatientname);
isPatient[2] = false;
console.log(isPatient);



