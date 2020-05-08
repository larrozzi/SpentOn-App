 
 import React from 'react';
 import {connect} from 'react-redux';
 import ExpenseListItem from './ExpenseListItem';
 import selectExpenses from '../selectors/expenses'; // component imported by default

// const ExpenseListItem = ({description, amount, createdAt}) => (
//     <div> 
//     <h3>{description}</h3>
//     <p> {amoun t} - {createdAt}</p>
//     </div> 
// )

export const ExpenseList = (props) => (
    <div className= "content-container">
        <div className="list-header">
            <div className= "show-for-mobile">Expenses</div> 
            <div className= "show-for-desktop">Expense</div>
            <div className= "show-for-desktop">Amount</div>
        </div>
        <div className="list-body">   
        {
            props.expenses.length===0 ? (
                <div className="list-item list-item--message"> 
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expense) => { // how to take in an array of objects(expense) and get back an array of expense items
                    return <ExpenseListItem key = {expense.id} {...expense}/> //...expense to pass the props that will be deconstructed
                })
            )
        }
        </div>
    </div>
) 

const mapStateToProps = (state)=>{ //state = store.getState();
    return { 
        // expenses : state.expenses,
        // filters: state.filters,
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


