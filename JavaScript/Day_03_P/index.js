/**
 * Java Script Parameterized Functions Task-2
 */
//Task-1
function sum(x,y)
{
    console.log("Sum of 2 Numbers",x+y);
}
sum(60,9);
//task-2
function upperCase(string)
{
    console.log(string.toUpperCase());
}
upperCase("Lokesh Chowdary");
//Task-3
function undef(x)
{
    console.log(x);
}
undef("xuv");//Passing Undefined Value
//Task-4
/**
 * Doubt how to check that it is an array(Array.isArray())
 */
//Task-5
function diff(x,y)
{
    console.log("Difference Between",x,"&",y,"is",x-y);
}
diff(70,1);
//Task-6
function greetings(name,age)
{
    console.log(`Hello,${name}\nYou are ${age} years old`);
}
greetings("Lokesh",69);
//Task-7
function isEven(num)
{
    return(num%2==0)?true:false;
}
console.log(isEven(5));
