import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectTotalExpenses from '../selectors/expenses-total'; // component imported by default
import selectExpenses from '../selectors/expenses';
 
const ExpensesSummary =({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount === 1? 'expense':'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return(
    <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
    </div>
    )
}


const mapStateToProps = (state)=>{ //state = store.getState();
    const visibleExpenses= selectExpenses(state.expenses, state.filters);

    return { 
    expenseCount :visibleExpenses.length,
    expensesTotal: selectTotalExpenses(visibleExpenses)
    }
}
export default connect(mapStateToProps)( ExpensesSummary)
