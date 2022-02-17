// // calculate part is here
// document.getElementById("calculate-btn").addEventListener("click", function(){

//     // get the input fields
//     const incomeField = document.getElementById("income-field");
//     const foodField = document.getElementById("food-field");
//     const rentField = document.getElementById("rent-field");
//     const clothField = document.getElementById("cloth-field");
//     const totalExpense = document.getElementById("total-expense");
//     const totalBalance = document.getElementById("total-balance");


//     //calculate expenses and balance
//     const totalExpenseAmount = parseFloat(totalExpense.innerText) + parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothField.value);
//     totalExpense.innerText = totalExpenseAmount;

//     foodField.value = "";
//     rentField.value = "";
//     clothField.value = "";

//     const totalBalanceAmount = parseFloat(incomeField.value) - parseFloat(totalExpenseAmount);
//     totalBalance.innerText = totalBalanceAmount;
    
// })

// // money saving part is here
// document.getElementById("save-btn").addEventListener("click", function(){
//    // get the input fields
//     const savingField = document.getElementById("saving-field");
//     const savingTotal = document.getElementById("saving-Total");
//     const remainingBalance = document.getElementById("remaining-balance");
//     const incomeField = document.getElementById("income-field");
//     const totalBalance = document.getElementById("total-balance");

//     //calculate the saving and remaining balance
//     const savingFieldInput = savingField.value;
//     const savingAmount = (incomeField.value / 100) * savingFieldInput;

//     savingTotal.innerText = savingAmount;

//     incomeField.value = "";
//     savingField.value = "";

//     const remainingBalanceAmount = parseFloat(totalBalance.innerText) - parseFloat(savingAmount);
//     remainingBalance.innerText = remainingBalanceAmount;
// })



























//code test
// calculate part is here
document.getElementById("calculate-btn").addEventListener("click", function(){

    // get the input fields
    const incomeField = document.getElementById("income-field");
    const foodField = document.getElementById("food-field");
    const rentField = document.getElementById("rent-field");
    const clothField = document.getElementById("cloth-field");
    const totalExpense = document.getElementById("total-expense");
    const totalBalance = document.getElementById("total-balance");


    //calculate expenses and balance
    if(isNaN(incomeField.value) || incomeField.value < 0 || incomeField.value == "" || isNaN(foodField.value) || foodField.value < 0 || foodField.value == ""  || isNaN(rentField.value) || rentField.value < 0 || rentField.value =="" || isNaN(clothField.value) || clothField.value < 0 || clothField.value =="" ){
        incomeField.value = "";
        return alert("please insert number")
    }
    const totalExpenseAmount = parseFloat(totalExpense.innerText) + parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothField.value);
    totalExpense.innerText = totalExpenseAmount;

    foodField.value = "";
    rentField.value = "";
    clothField.value = "";

    const totalBalanceAmount = parseFloat(incomeField.value) - parseFloat(totalExpenseAmount);
    totalBalance.innerText = totalBalanceAmount;
    
})

// money saving part is here
document.getElementById("save-btn").addEventListener("click", function(){
   // get the input fields
    const savingField = document.getElementById("saving-field");
    const savingTotal = document.getElementById("saving-Total");
    const remainingBalance = document.getElementById("remaining-balance");
    const incomeField = document.getElementById("income-field");
    const totalBalance = document.getElementById("total-balance");

    //calculate the saving and remaining balance
    const savingFieldInput = savingField.value;
    const savingAmount = (incomeField.value / 100) * savingFieldInput;

    savingTotal.innerText = savingAmount;

    incomeField.value = "";
    savingField.value = "";

    const remainingBalanceAmount = parseFloat(totalBalance.innerText) - parseFloat(savingAmount);
    remainingBalance.innerText = remainingBalanceAmount;
})


