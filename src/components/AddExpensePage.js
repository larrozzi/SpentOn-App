import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
//import {addExpense} from '../actions/expenses' //replaced by line below
import {startAddExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component{
  onSubmit =(expense) => {
    this.props.startAddExpense(expense)
    this.props.history.push('/dashboard');       
  };
  render(){
    return (
      <div>
        <h1> Add Expense</h1>
        <ExpenseForm onSubmit = {this.onSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)


// const AddExpensePage = (props) => ( //props comes from the store, and passes it to the component including a dispatch attribute
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//         onSubmit ={(expense) => { // expense object is  the prop we need to pass to ExpenseForm
//           //console.log(expense)
//         props.dispatch(addExpense(expense)) 
//         props.history.push('/');       
//         }}
//         />
//     </div>
// ) 
// export default connect()(AddExpensePage);
