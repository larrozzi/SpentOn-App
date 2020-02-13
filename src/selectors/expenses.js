import moment from 'moment'

//Get visible expenses
export default (expenses,{text, sortBy, startDate, endDate})=>{ //diff way of export default
    return expenses.filter((expense)=>{  
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true
        // const startDateMatch = typeof startDate !== 'number' || (expense.createdAt).isAfter >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
       
        return startDateMatch && endDateMatch && textMatch; // when this is true item is kept, if it's false item is filterd out
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdAt > b.createdAt ? 1 : -1 ; //if a.createdAT is less than b.createdAT, b comes first(most recent)
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1 ; //if a.createdAT is less than b.createdAT, b comes first(most recent)
        }
    })
};

