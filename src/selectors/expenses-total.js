export default (expenses) => {
 /*   if (expenses.length===0){
    return 0;
    } else*/ //redundant

    return expenses
        .map((expense) => expense.amount)
        .reduce((sum,value)=>sum+value,0); //start counting at 0
 
};  