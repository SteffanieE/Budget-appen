// SELECTOR ELEMENTS
const option= document.querySelector (".optionContainer");
const description = document.querySelector(".description");
const amount = document.querySelector(".amount");
const btn = document.querySelector(".addItemBtn");
const costDiv = document.querySelector (".listCostDiv");
const incomeDiv= document.querySelector(".listIncomeDiv");
const income = document.querySelector (".totalInc");
const balance = document.querySelector(".totalBalance");
const costs = document.querySelector(".totalCost");

// DEFINED VARIABLES 
let costslist = [];
let incomelist = [];
var costSum= 0;
var incomeSum=0;

// EVENT LISTENERS
btn.addEventListener("click", addtolist);
btn.addEventListener("click", calculateBudget);

// FUNCTIONS
function addtolist(e) {
    e.preventDefault();

    if(option.value =="+"){   
        incomelist.push(amount.value);
        incomeDiv.innerHTML   += `<li>${description.value} ${amount.value}</li>`
        amount.value= "";
        description.value= "";
    }

    else if (option.value =="-"){
        costslist.push(amount.value);
        costDiv.innerHTML += `<li> ${description.value}  ${amount.value} </li>`
        amount.value= "";
        description.value= "";
    }

    else {
        alert("Du måste välja +/-");
    } 
}

function calculateBudget(e) {
    e.preventDefault();
    
    for( var i= 0; i<costslist.length ; i++){
        costSum += Number(costslist[i]);
    }

    for( var i= 0; i<incomelist.length; i++){ 
        incomeSum += Number(incomelist[i])
    }

    costs.textContent = costSum;
    income.textContent = incomeSum;
    balance.textContent = incomeSum-costSum; 
}