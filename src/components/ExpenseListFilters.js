import React from 'react'
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'
import uuid from 'uuid';
import {setTextFilter,sortByDate, sortByAmount,setStartDate, setEndDate} from  '../actions/filters'

class ExpenseListFilters extends React.Component{ 
    state ={
        calendarFocused:null
    }
    onDatesChange=({startDate,endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange=(calendarFocused)=>{
        this.setState(() => ({calendarFocused}))
    }

    render(){
        return( //implicit arrow function
            <div>
                <input type ='text' value ={this.props.filters.text} onChange ={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                    // console.log(e.target.value)
                }}>
                </input>
                <select value={this.props.filters.sortBy} onChange= {(e) => { 
                    if (e.target.value==='amount')
                        this.props.dispatch(sortByAmount());
                    else  
                        this.props.dispatch(sortByDate())
                    }}
                > 
                    <option value="date">  Date </option>
                    <option value ="amount"> Amount </option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={uuid()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuid()}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        ); 
    }
}
// const ExpenseListFilters = (props) =>
// export default ExpenseListFilters;

const mapStateofStoreToProps = (state) =>{
    return {
        filters :state.filters  //filters is the prop that will be passed in the ExpenseListFilters componenet
    }
} 

export default connect(mapStateofStoreToProps)(ExpenseListFilters)
