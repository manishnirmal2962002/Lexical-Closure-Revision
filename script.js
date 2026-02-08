//ek herarichy upar jakar dekhata  hai ki hai ya nahi.
//scope chaning (by using check the upper code one by one).
//------------------------------Lexical Scope Start-----------------------------------------------------------------
function parent()
{
    let b = "Manish"
    function child(){
        let b = "kunal"
        console.log(b)
    }
    child()
}
parent()

//------------------------Start Closure(Private banata hai)------------------------------------------------------------------
 
function increment(){
    let counter = 0
    function childCounter(){
        counter = counter+1
        console.log(counter)
    }
    return childCounter;
}
let result = increment()
//console.dir(result)//
result()
result()
result()



//------------------------------Add in a number----------------------------------------------------------------
function Adder(){
    let x = 20;
    function Addchild(){
        Adding =  x + 30;
        console.log(Adding)
    }
    return Addchild;
}
let res = Adder()
res()


//----------------------Stores a private balance------------------------------------------------------

function Privatebalance(){
    let balance = 20000;
    function Deposit(){
        Amount = balance + (20000)
        console.log(Amount)
    }
    return Deposit;
}
let resu =   Privatebalance()
resu()