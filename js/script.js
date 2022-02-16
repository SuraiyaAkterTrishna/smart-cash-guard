
document.getElementById("calculate-button").addEventListener("click",function(){
    // get food cost
    const foodCostField = document.getElementById("food");
    const foodCostAmount = parseFloat(foodCostField.value);
    foodCostField.value = '';
    // get rent cost
    const rentCostField = document.getElementById("rent");
    const rentCostAmount = parseFloat(rentCostField.value);
    rentCostField.value = '';
    // get clothes cost
    const clothesCostField = document.getElementById("clothes");
    const clothesCostAmount = parseFloat(clothesCostField.value);
    clothesCostField.value = '';
    // get income cost
    const incomeCostField = document.getElementById("income");
    const incomeCostAmount = parseFloat(incomeCostField.value);
    incomeCostField.value = '';
    // get total expenses
    const totalExpensesText = document.getElementById("total-expenses");
    // update total expenses
    const totalExpensesAmount = foodCostAmount + rentCostAmount +clothesCostAmount;
    totalExpensesText.innerText = totalExpensesAmount;
    // get balance field
    const balanceField = document.getElementById('total-balance');
    // update balance amount
    const totalBalance = incomeCostAmount - totalExpensesAmount;
    balanceField.innerText = totalBalance;
})
document.getElementById('saving-button').addEventListener("click",function(){
    // get total balance
    const balanceField = document.getElementById('total-balance');
    const totalBalance = parseFloat(balanceField.innerText);
    // get save percentage value
    const saveInput = document.getElementById('save');
    const savePercentage = parseFloat(saveInput.value);
    saveInput.value = '';
    // get saving amount field
    const savingField = document.getElementById('saving-amount');
    // update saving amount
    const savingAmount = (totalBalance / 100) * savePercentage;
    savingField.innerText = savingAmount;
    // get remaining balance
    const remainingBalanceField = document.getElementById('remaining-balance');
    // update remaining balance
    const remainingAmount = totalBalance - savingAmount;
    remainingBalanceField.innerText = remainingAmount;
})