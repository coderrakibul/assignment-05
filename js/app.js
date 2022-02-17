// function for getting id
function getInputId(id) {
    const getId = document.getElementById(id);
    return getId;

}

// calculate part is here
document.getElementById("calculate-btn").addEventListener("click", function () {

    // get the input fields with calling function
    const incomeField = getInputId("income-field");
    const foodField = getInputId("food-field");
    const rentField = getInputId("rent-field");
    const clothField = getInputId("cloth-field");
    const totalExpense = getInputId("total-expense");
    const totalBalance = getInputId("total-balance");


    //calculate expenses and balance
    if (isNaN(incomeField.value) || incomeField.value < 0 || incomeField.value == "" || isNaN(foodField.value) || foodField.value < 0 || foodField.value == "" || isNaN(rentField.value) || rentField.value < 0 || rentField.value == "" || isNaN(clothField.value) || clothField.value < 0 || clothField.value == "") {
        incomeField.value = "";
        foodField.value = "";
        rentField.value = "";
        clothField.value = "";
        return alert("please insert positive number only")
    }


    const totalExpenseAmount = parseFloat(totalExpense.innerText) + parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothField.value);
    if (totalExpenseAmount > incomeField.value) {
        incomeField.value = "";
        foodField.value = "";
        rentField.value = "";
        clothField.value = "";
        return alert("sorry! not enough balance to expense");
    }
    totalExpense.innerText = totalExpenseAmount;

    foodField.value = "";
    rentField.value = "";
    clothField.value = "";

    const totalBalanceAmount = parseFloat(incomeField.value) - parseFloat(totalExpenseAmount);
    totalBalance.innerText = totalBalanceAmount;

})

// money saving part is here
document.getElementById("save-btn").addEventListener("click", function () {
    // get the input fields
    const savingField = document.getElementById("saving-field");
    const savingTotal = document.getElementById("saving-Total");
    const remainingBalance = document.getElementById("remaining-balance");
    const incomeField = document.getElementById("income-field");
    const totalBalance = document.getElementById("total-balance");

    //calculate the saving and remaining balance
    const savingFieldInput = savingField.value;
    const savingAmount = (incomeField.value / 100) * savingFieldInput;
    if (savingAmount > totalBalance.innerText) {
        incomeField.value = "";
        savingField.value = "";
        return alert("sorry! not enough balance to save");
    }
    if (isNaN(savingField.value) || savingField.value == "" || savingField.value < 0) {
        savingField.value = "";
        return alert("pleae! enter a valid number")
    }

    savingTotal.innerText = savingAmount;

    incomeField.value = "";
    savingField.value = "";

    const remainingBalanceAmount = parseFloat(totalBalance.innerText) - parseFloat(savingAmount);
    remainingBalance.innerText = remainingBalanceAmount;
})
