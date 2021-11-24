// SELECT ELEMENTS
const option= document.querySelector (".optionContainer");
const description = document.querySelector(".description");
const amount = document.querySelector(".amount");
const btn = document.querySelector(".addItemBtn");

const liCost = document.querySelector (".listCost");
const liIncome= document.querySelector(".listIncome");

const income = document.querySelector (".totalInc");
const balance = document.querySelector(".totalBalance");
const costs = document.querySelector(".totalCost");

//const spanX= document.querySelector("span");


// VARIABLES
let kostnadLista = [];
let inkomstLista = [];


// EVENT LISTENERS

btn.addEventListener("click", addtolist);
btn.addEventListener("click", calculateBudget);
//spanX.addEventListener("click", removeItem);
//spanX.addEventListener("click", calculateBudget);




// FUNCTIONS

function addtolist(e) {
    e.preventDefault();

    if(option.value =="+"){   
        
        inkomstLista.push(amount.value);
        console.log (inkomstLista);
        liIncome.innerHTML   += `<li>${description.value} ${amount.value}<span> ${"x"} </span></li>`
    }

    else if (option.value =="-") {

        kostnadLista.push(amount.value);
        console.log (kostnadLista)
        liCost.innerHTML += `<li> ${description.value}  ${amount.value} <span> ${"x"} </span></li>`
        
    }

    else {
        alert("Du måste välja");
    } 


    /*const item = document.querySelectorAll("span");
    //const list = document.querySelectorAll("li");
    for(let i=0; i<item.length; i++){
        item[i].addEventListener("click", ()=>{
            item[i].parentElement.style.display = "none";
            
        })

    }*/

    const item = document.querySelectorAll("span");
    const list = document.querySelectorAll("li");
    const ul = document.querySelectorAll ("ul");
    for(let i=0; i<item.length; i++){
        item[i].addEventListener("click", function(){
            ul.removeChild(list);
        })

    }
    

}



function calculateBudget(e) {
    e.preventDefault();
    
    var kostnadSumma= 0;
    for( var i= 0; i<kostnadLista.length ; i++){
        kostnadSumma += Number(kostnadLista[i]);
    }

    var inkomstSumma=0;
    for( var i= 0; i<inkomstLista.length; i++)
    { 
        inkomstSumma += Number(inkomstLista[i])
    }

    console.log(inkomstSumma, kostnadSumma)

    costs.textContent = kostnadSumma;
    income.textContent = inkomstSumma;
    balance.textContent = inkomstSumma-kostnadSumma; 
}




/*
//const removeItem = document.querySelectorAll("span");
    for(let i=0; i<removeItem.length; i++){
        removeItem[i].addEventListener("click", ()=>{
            removeItem[i].parentElement.style.display = "none";
           // console.log ("hmmmm");
        
        })  
        
    }*/





