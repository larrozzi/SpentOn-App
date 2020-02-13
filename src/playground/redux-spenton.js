import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
 
//ADD_EXPENSE
const addExpense =(
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
const removeExpense = ({ id }={}) => ({
    type:'REMOVE_EXPENSE',
    id //action.id                                                                                                                                                              
});

//EDIT_EXPENSE
const editExpense =(id, updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT FILTER
const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate=()=>({
    type:'SORT_BY_DATE'
})

//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})
//SET_END_DATE
const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})

//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
switch (action.type){
    case 'ADD_EXPENSE':
        //    return state.concat(action.expense); 
        return [...state, action.expense]; //array spread operator
    case 'REMOVE_EXPENSE':
       //return  state.filter((expense)=>{return expense.id!==action.id})
        //return state.filter(({id})=>{return id!==action.id})
        return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
         if (expense.id == action.id){
            return{
                ...expense,
                ...action.updates
            };
        } else {
            return expense;
        };
        });
    default:
        return state;
    } 
};

//Filters Reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endData:undefined
};
 
const filtersReducer=(state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{ //return a new filtered one 
                ...state,
                text:action.text //overrides state.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }    
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }   
        default:
            return state;
    }
}
//timestamps
  
//Get visible expenses
const getVisibleExpenses= (expenses,{text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{ 
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
       
        return startDateMatch && endDateMatch && textMatch; // when this is true item is kept, if it's false item is filterd out
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdAT < b.createdAt ? 1 : -1 ; //if a.createdAT is less than b.createdAT, b comes first(most recent)
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1 ; //if a.createdAT is less than b.createdAT, b comes first(most recent)
        }
    })
};
 
//Store Creation
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    }) 
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   //console.log(store.getState());
  //  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt:-31000} ));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300, createdAt:-1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id})) ;//grabbing the id

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

//S  store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
 store.dispatch(sortByDate());
 
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState ={
    expenses:[{ //EXPENSES IS A ROOT PROPERTY IN THE REDUX STORE
        id:'pgare',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:35000,
        createdAt:0
    }], 
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};

// const user={
//     name:'Jen',
//     age:24
// }

// console.log({
//     lastname:'anny',
//     ...user,
//     location:'LA',
//     age:27
// })