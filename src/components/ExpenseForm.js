import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates' //airbnb

import 'react-dates/initialize';// to prevent uncaught ref error of createLTR undefined error
import 'react-dates/lib/css/_datepicker.css' // calender picker library that requires moment()

const now =moment();
console.log(now.format('MMM Do, YYYY')) 

export default class ExpenseForm extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      description:props.expense? props.expense.description:'',
      note:props.expense? props.expense.note:'',
      amount:props.expense? (props.expense.amount/100).toString():'',
      createdAt : props.expense? moment(props.expense.createdAt):moment(),
      calendarfocused:false,
      error:""
    }
  }
  state ={ //local component state to track the changes of the inputs
      description:'',
      note:'',
      amount:'',
      createdAt : moment(),
      calendarfocused:false,
      error:""
  }
  onDescriptionChange = (e) => {
      const description= e.target.value
      this.setState(()=> ({description})) //returning an object {description:description}
  }

  onNoteChange = (e) => {
    const note= e.target.value
    this.setState(() => ({note})) // () is an update function)
  }

  onAmountChange = (e) => {
        const amount= e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(() => ({amount})) 
  }

  onDateChange=(createdAt)=> {
    if (createdAt)
    this.setState(() => ({createdAt})) 
  }

  onFocusChange=({focused})=>{ // focused :boolean expression
  this.setState(() => ({ calendarfocused: focused}));
  }

  onSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh
   
    if (!this.state.description || !this.state.amount){
      this.setState(()=> ({error:"Please provide description and amount"})) 
    }
    else {
    this.setState(()=> ({error:""})) 
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10)*100,  //format in cents needed
      createdAt: this.state.createdAt.valueOf(), //value of moment()
      note:this.state.note
    }) 
  }
} 
    render() { // class based component has state so only when submitting the form, something happens 
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.onSubmit}>
            <input
              type ="text"
              className="text-input"
              placeholder = "Description"
              autoFocus
              value={this.state.description} 
              onChange={this.onDescriptionChange}
            />
            <input
              type= "text" // to limit the number of dceimals
              // type= "number"
              className="text-input"
              placeholder = "Amount"
              value={this.state.amount} 
              onChange={this.onAmountChange}
            />  
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused= {this.state.calendarfocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <textarea
              className="textarea"
              placeholder ="Add a note for your expense (optional)"
              value={this.state.note} 
              onChange={this.onNoteChange}
            />
            <button>Add Expense</button> 
        </form>
      </div>
    ) 
  }
}