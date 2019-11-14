import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense =( //expense deconstructed 
    {description='', note='', amount=0, createdAt=0}={}
     )=>({ //action object goes inside here
    type:'ADD_EXPENSE',
    expense:{ 
    id: uuid(),
    description, 
    note,
    amount,
    createdAt 
    }
}); 
//REMOVE_EXPENSE 
export const removeExpense = ({ id }={}) => ({
    type:'REMOVE_EXPENSE',
    id //action.id
});

//EDIT_EXPENSE
export const editExpense =(id, updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

