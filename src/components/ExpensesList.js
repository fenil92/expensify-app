import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseListComponent = (props) => (
    <div>
        <h3>Expense List</h3>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseListComponent);