import React from 'react';
import Modal from 'react-modal';


const RemoveExpenseModal =(props)=>( 
        <Modal
        isOpen={props.showRemoveModal===true}
        onRequestClose={props.handleKeepExpense || props.handleRemoveExpense}
        contentLabel="Remove Expense"
        closeTimeoutMs={200}
        >
        
        <p> Are you sure?</p>
        {}
        <button onClick= {props.handleRemoveExpense}> Yes </button>
        <button onClick= {props.handleKeepExpense}> No </button>
        </Modal>
)

export default RemoveExpenseModal;
