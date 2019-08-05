import React from 'react';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
    <div>
        <ExpenseForm  onSubmit={
            (expense) => {
               props.addExpense(expense);
               props.history.push('/');
            }
        }/>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addExpense : (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);