/**
 * CallBack Functions Task - JavaScript
 */
                //Task-1 
//function definition
function processNumber(num,CallBack)
{
    num*=2;
    CallBack(num);
}
function display(num)
{
    console.log("After Doubling the Number: ",num);
}
//Function Calling
processNumber(5,display)
                    //Task-2
                    //Task-3
function sayHello(name,CallBack)
{
    setTimeout(CallBack(name),1000);
}
function message(name)
{
    console.log("Hello,",name,"!");
}
sayHello("Lokesh",message)
                    //Task-4
//Function Definition
function checkEven(num,CallBack1,CallBack2)
{
    if(num%2==0)
        CallBack1(num);
    else
        CallBack2(num);
}
function evenNum(num)
{
    console.log(num,"is an Even Number");
}
function oddNum(num)
{
    console.log(num,"It is an Odd Number");
}
//Function Calling
checkEven(15,evenNum,oddNum)
                    //Task-5
function perTask(num,CallBack1,CallBack2)
{
    console.log(CallBack2(CallBack1(num)));
}
function add(num)
{
    return num+=5;
}
function mul(num)
{
    return num*=2;
}
//Function Calling
perTask(10,add,mul);
