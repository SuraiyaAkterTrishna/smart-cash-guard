// get all element by id 
function getElement(id){
    const elementId = document.getElementById(id);
    return elementId;
}
// error handling
function verifyInputValue(id,amount) {
    const errorMessage = getElement('notify-'+id);
    if (isNaN(amount)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        return amount;
    }
}
// get all input value 
function getInputValue(inputId){
    const inputField = getElement(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return verifyInputValue(inputId,inputAmount);
}
// update balance 
function updateBalance(income, expense, balanceField){
    const total = income - expense;
    balanceField.innerText = total;
}
document.getElementById("calculate-button").addEventListener("click",function(){
    // get food cost
    const foodCostAmount = getInputValue('food-cost');
    // get rent cost
    const rentCostAmount = getInputValue('rent-cost');
    // get clothes cost
    const clothesCostAmount = getInputValue('clothes-cost');
    // get income
    const incomeAmount = getInputValue('income-amount');
    // get total expenses
    const totalExpensesText = getElement('total-expenses');
    // update total expenses
    const totalExpensesAmount = foodCostAmount + rentCostAmount +clothesCostAmount;
    totalExpensesText.innerText = totalExpensesAmount;
    // get balance field
    const balanceField = getElement('total-balance');
    // update remaining balance
    updateBalance(incomeAmount, totalExpensesAmount, balanceField);
});
document.getElementById('saving-button').addEventListener("click",function(){
    // get total balance
    const balanceField = getElement('total-balance');
    const totalBalance = parseFloat(balanceField.innerText);
    // get save percentage value
    const savePercentage = getInputValue('save-percentage');
    // get saving amount field
    const savingField = getElement('saving-amount');
    // update saving amount
    const savingAmount = (totalBalance / 100) * savePercentage;
    savingField.innerText = savingAmount;
    // get remaining balance
    const remainingBalanceField = getElement('remaining-balance');
    // update remaining balance after saving
    updateBalance(totalBalance, savingAmount, remainingBalanceField);
})