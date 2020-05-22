import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal =(props)=>( 
        <Modal
                className= "remove-modal"
                isOpen={props.showRemoveModal===true}
                onRequestClose={props.handleKeepExpense || props.handleRemoveExpense}
                appElement={document.getElementById('app')}
                contentLabel="Remove Expense"
                closeTimeoutMs={200}
                >
                
                <h3 className='modal__title'> Are you sure?</h3>
                {}
                <button className='button button--modal' onClick= {props.handleRemoveExpense}> Yes </button>
                <button className='button button--modal' onClick= {props.handleKeepExpense}> No </button>
        </Modal>
)

export default RemoveExpenseModal
