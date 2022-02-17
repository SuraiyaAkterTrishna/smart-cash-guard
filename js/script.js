// get all element id 
function getElement(id){
    const elementId = document.getElementById(id);
    return elementId;
}
// get all input value 
function getInputValue(inputId){
    const inputField = getElement(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
}
document.getElementById("calculate-button").addEventListener("click",function(){
    // get food cost
    const foodCostAmount = getInputValue('food');
    // get rent cost
    const rentCostAmount = getInputValue('rent');
    // get clothes cost
    const clothesCostAmount = getInputValue('clothes');
    // get income
    const incomeAmount = getInputValue('income');
    // get total expenses
    const totalExpensesText = getElement('total-expenses');
    // update total expenses
    const totalExpensesAmount = foodCostAmount + rentCostAmount +clothesCostAmount;
    totalExpensesText.innerText = totalExpensesAmount;
    // get balance field
    const balanceField = getElement('total-balance');
    // update balance amount
    const totalBalance = incomeAmount - totalExpensesAmount;
    balanceField.innerText = totalBalance;
})
document.getElementById('saving-button').addEventListener("click",function(){
    // get total balance
    const balanceField = getElement('total-balance');
    const totalBalance = parseFloat(balanceField.innerText);
    // get save percentage value
    const savePercentage = getInputValue('save');
    // get saving amount field
    const savingField = getElement('saving-amount');
    // update saving amount
    const savingAmount = (totalBalance / 100) * savePercentage;
    savingField.innerText = savingAmount;
    // get remaining balance
    const remainingBalanceField = getElement('remaining-balance');
    // update remaining balance
    const remainingAmount = totalBalance - savingAmount;
    remainingBalanceField.innerText = remainingAmount;
})