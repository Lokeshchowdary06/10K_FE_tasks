/**
 * Arrow Functions Task - Java Script
 */
                    //Task-1

var add=(a,b)=>{
    return a+b;
}
console.log("Sum of two Numbers:",add(10,5));

                    //Task-2

var greetings=name=>console.log(`Hello,${name}!`);
greetings("Lokesh Chowdary");

                    //Task-3

var iseven= a => a%2===0;
console.log("Is Number Even:",iseven(11));

                    //task-4

var isgreater= a => a>10;
console.log("Number is greater than 10:",isgreater(2));

                    //Task-5

var len=(str1,str2)=>{
    if(str1.length ===str2.length)
        return "Equal Length";
    return str1.length>str2.length?str1:str2;
}
console.log("Greater String:",len("Lokesh","Chowdary"));