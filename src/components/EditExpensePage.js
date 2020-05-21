import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense,startRemoveExpense} from '../actions/expenses'; 
import RemoveExpenseModal from './RemoveExpenseModal'
export class EditExpensePage extends React.Component {

    state={
        showRemoveModal:false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense) //id is passed as an object
        this.props.history.push('/dashboard')  
    }
    onRemove = () => {  
        this.props.startRemoveExpense({id: this.props.expense.id}) //id is passed as an object
        this.props.history.push('/dashboard')  
    }
    onRemoveClick = () => {
        this.setState( {showRemoveModal:true});
    }
    handleRemoveExpense = () =>{
        this.setState({showRemoveModal:false})
        this.onRemove()
    }
    handleKeepExpense = () =>{
        this.setState({showRemoveModal:false})
    }
    render(){
        return (
                <div>
                    <div className="page-header">
                        <div className="content-container">
                            <h1 className="page-header__title"> Edit Expense </h1>
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm
                            expense= {this.props.expense}
                            onSubmit = {this.onSubmit}
                        />     
                        <button className="button button--secondary" onClick={this.onRemoveClick}> Remove Expense </button> 
                    </div>
                    <RemoveExpenseModal
                        showRemoveModal= {this.state.showRemoveModal}
                        handleRemoveExpense= {this.handleRemoveExpense}
                        handleKeepExpense= {this.handleKeepExpense}
                    > 
                    </RemoveExpenseModal>
                </div>
        )    
    }
}

const mapStateToProps=(state,props) =>({
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    
}) 

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense:(id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
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
