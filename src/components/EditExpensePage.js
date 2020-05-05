import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense,startRemoveExpense} from '../actions/expenses'; 
 
export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.dispatch(editExpense(props.expense.id,expense)) //id is passed as an object
        this.props.history.push('/')  
    }
    onRemove = () => {  
        this.props.dispatch(startRemoveExpense({id:props.expense.id})) //id is passed as an object
        this.props.history.push('/')  
    }
    render(){
        return (
            <div>
            <ExpenseForm
            expense= {props.expense}
            onSubmit = {this.onSubmit}
            />     
            <button onClick={this.onRemove}> Remove </button> 
            </div>
        )    
    }
}

const mapStateToProps=(state,props) =>({
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    
}) 

const mapDispatchToProps = (dispatch, props) => ({
    editExpense:(id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data0) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);

// const EditExpensePage=(props)=>{
//    // console.log(props) //can only be used with return way of writing arrow function;
//     return (
//         <div>
//             <ExpenseForm
//             expense= {props.expense}
//             onSubmit = {(expense) => {
//                 props.dispatch(editExpense(props.expense.id,expense)) //id is passed as an object
//                 props.history.push('/')  
//                 console.log('updated', expense)
//             }}
//             />
//             <button 
//             onClick={ () => {  
//                 props.dispatch(startRemoveExpense({id:props.expense.id})) //id is passed as an object
//                 props.history.push('/')  
//             }}>Remove 
//             </button> 
//         </div>
//     ) 
// }

// const mapStateToProps=(state,props) =>{
//     return { //if we need to pass additional props
//         expense : state.expenses.find((expense) => expense.id === props.match.params.id)
//     }
// }
// export default connect(mapStateToProps)(EditExpensePage);

//  <div>
// <EditExpensePage >
// <button onClick={ () => {
//     //store.dispatch(removeExpense({id})); // store.dispatch(removeExpense({id})); thi gives error _store_configureStore__WEBPACK_IMPORTED_MODULE_1__.default.dispatch is not a function at onClick
//     dispatch(editExpense({id})) //id is passed as an object
//     history.push("./edit/:id")
// }}>Edit </button> 
// </EditExpensePage>
// </div>
