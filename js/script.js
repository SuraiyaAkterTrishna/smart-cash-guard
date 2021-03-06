// get all element by id 
function getElement(id){
    const elementId = document.getElementById(id);
    return elementId;
}
// get all input value
function getInputValue(inputId){
    const inputField = getElement(inputId);
    const inputAmount = parseFloat(inputField.value);
    return verifyInputValue(inputId,inputAmount);
}
// verifying all input value
function verifyInputValue(id,amount) {
    const errorMessageForNumber = getElement('error-valid-number-'+id);
    const errorMessageForValidNumber = getElement('error-negative-number-'+id);
    if (isNaN(amount)) {
        errorMessageForNumber.style.display = 'block';
    } else if (amount < 0) {
        if (errorMessageForNumber.style.display = 'none') {
            errorMessageForValidNumber.style.display = 'block';
        }
    } else {
        errorMessageForNumber.style.display = 'none';
        errorMessageForValidNumber.style.display = 'none';
        return amount;
    }
}
// calculate balance and error handling for total expenses & saving amount
function updateBalance(income, expense, balanceField){
    const idName = balanceField.getAttribute('id');
    const errorTotalBalance = getElement('error-'+idName);
    if (income<expense) {
        errorTotalBalance.style.display = 'block';
    } else {
        errorTotalBalance.style.display = 'none';
        const total = income - expense;
        balanceField.innerText = total.toFixed(2);
    }
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
    // get balance field
    const balanceField = getElement('total-balance');
    // update total expenses
    const totalExpensesAmount = foodCostAmount + rentCostAmount +clothesCostAmount;
    totalExpensesText.innerText = totalExpensesAmount;
    // update remaining balance
    updateBalance(incomeAmount, totalExpensesAmount, balanceField);
});
document.getElementById('saving-button').addEventListener("click",function(){
    // get income
    const incomeAmount = getInputValue('income-amount');
    // get total balance
    const balanceField = getElement('total-balance');
    const totalBalance = parseFloat(balanceField.innerText);
    // get save percentage value
    const savePercentage = getInputValue('save-percentage');
    // get saving amount field
    const savingField = getElement('saving-amount');
    // get remaining balance
    const remainingBalanceField = getElement('remaining-balance');
    // update saving amount
    const savingAmount = (incomeAmount / 100) * savePercentage;
    savingField.innerText = savingAmount;
    // update remaining balance after saving
    updateBalance(totalBalance, savingAmount, remainingBalanceField);
})