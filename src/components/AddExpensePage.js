import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props) => ( //props comes from the store, and passes it to the component including a dispatch attribute
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
        onSubmit ={(expense) => { // expense object is  the prop we need to pass to ExpenseForm
          //console.log(expense)
        props.dispatch(addExpense(expense)) 
        props.history.push('/');       
        }}
        />
    </div>
) 
export default connect()(AddExpensePage);
