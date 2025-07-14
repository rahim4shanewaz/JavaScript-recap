/**comparison 
//console.log(5>10)






var amount = 500;

if (amount > 300) {
    console.log("I will eat")
    
}
else{
    console.log()
        "Not Gonna eat"
}

const salary = 3000;
const bcs = true;
const height = 61;

if (salary>25000 && height>60) {
    console.log("talented")
    
}
else{
    console.log("Need to Improve")
}


if (salary>25000 || height>62) {
    console.log("talented")
    
}
else{
    console.log("Need to Improve")
}


// multi level ef else

    const price = 1500;

    if (price <= 5000) {
        const discount = price * 10/100;
        
        const newPrice = price - discount;

        console.log(newPrice)

    }
   
    else{
        console.log("no Discount")
    }
    

*/

//ternary

const ages = 20;
if (ages>=25) {
    console.log("you can vote")
}
else{
    console.log("you cant vote")
}

ages>18 ? console.log("voter") : console.log("not voter")