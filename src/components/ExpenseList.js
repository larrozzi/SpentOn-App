 
 import React from 'react';
 import {connect} from 'react-redux';
 import ExpenseListItem from './ExpenseListItem';
 import selectExpenses from '../selectors/expenses'; // component imported by default

// const ExpenseListItem = ({description, amount, createdAt}) => (
//     <div> 
//     <h3>{description}</h3>
//     <p> {amount} - {createdAt}</p>
//     </div> 
// )

const ExpenseList = (props) => ( //stateless component that can receive props (expenses from connect )
<div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => { // how to take in an array of objects(expense) and get back an array of expense items
        return <ExpenseListItem key = {expense.id} {...expense}/> //...expense to pass the props that will deconstructed
    })}
</div>
) 

const mapStateToProps = (state)=>{ //state = store.getState();
    return { 
        // expenses : state.expenses,
        // filters: state.filters
        expenses :selectExpenses(state.expenses, state.filters) //feeding the selectors of instead of expenses only 
    }
}

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state)=>{
//     return {
//         expenses : state.expenses
//     }
// })(ExpenseList);

//  export default ConnectedExpenseList;
