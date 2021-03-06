import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilter extends React.Component
{
    state = {
        calendarFocused : null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({ calendarFocused : focusedInput}));
    }

    render(){
        return(
            <div>
            <input type='text' value={this.props.filters.text} onChange = {(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
            }}
            />
            <select onChange= {
                (e) => {
                    const val = e.target.value;
                    if(val == "date"){
                        this.props.dispatch(sortByDate())
                    }
                    else if(val == "amount"){
                        this.props.dispatch(sortByAmount());
                    }
                }
            }>
                <option value = "date">Date</option>
                <option value = "amount">Amount</option>
            </select>
            <DateRangePicker
                startDate= {this.props.filters.startDate}
                startDateId="your_unique_start_date_id"
                endDate= {this.props.filters.endDate}
                endDateId="your_unique_end_date_id" 
                onDatesChange = {this.onDatesChange}
                focusedInput = {this.state.calendarFocused}
                onFocusChange= {this.onFocusChange}
                numberOfMonths = {1}
                isOutsideRange = {() => false}
                showClearDates = {true}
            />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);