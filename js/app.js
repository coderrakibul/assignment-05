document.getElementById("calculate-btn").addEventListener("click", function(){

    // get the input field total field
    const incomeField = document.getElementById("income-field");
    const foodField = document.getElementById("food-field");
    const rentField = document.getElementById("rent-field");
    const clothField = document.getElementById("cloth-field");
    const totalExpense = document.getElementById("total-expense");
    const totalBalance = document.getElementById("total-balance");


    const totalExpenseAmount = parseFloat(totalExpense.innerText) + parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothField.value);
    totalExpense.innerText = totalExpenseAmount;

    foodField.value = "";
    rentField.value = "";
    clothField.value = "";

    const totalBalanceAmount = parseFloat(incomeField.value) - parseFloat(totalExpenseAmount);
    totalBalance.innerText = totalBalanceAmount;
    incomeField.value = "";
})

