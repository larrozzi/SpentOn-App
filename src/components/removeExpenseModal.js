import React from 'react';
import Modal from 'react-modal';

const removeExpenseModal =(props)=( 
    <Modal
    isOpen={props.sureUwannaRemove== true}
    onRequestClose={props.handleKeepExpense || props.handleRemoveExpense}
    contentLabel="Remove Expense"
    closeTimeoutMs={200}
    >
    
    <p> are you sure ?</p>
    <button onClick= {props.handleRemoveExpense}> Yes </button>
    <button onClick= {props.handleKeepExpense}> No </button>
    </Modal>

)
export default removeExpenseModal;
