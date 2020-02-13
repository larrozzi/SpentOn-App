// export a stateless functional component
// description, amount, createdAt

import React from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';

//const ExpenseListItem = (props) => ( //deconstructing props
// const state = store.getState();

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to ={`/edit/${id}`}> 
        <h3>{description}</h3>
        </Link>
        <p>
         {numeral(amount/100).format('$0,0.00')} 
         - 
         {moment(createdAt).format('MMMM Do, YYYY')}</p>
       
      
    </div>
)
  
// export default ExpenseListItem;
export default ExpenseListItem;

//  <div>
// <EditExpensePage >
// <button onClick={ () => {
//     //store.dispatch(removeExpense({id})); // store.dispatch(removeExpense({id})); thi gives error _store_configureStore__WEBPACK_IMPORTED_MODULE_1__.default.dispatch is not a function at onClick
//     dispatch(editExpense({id})) //id is passed as an object
//     history.push("./edit/:id")
// }}>Edit </button> 
// </EditExpensePage>
// </div>