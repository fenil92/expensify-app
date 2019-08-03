import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseListComponent = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (<p>No Expenses</p>) : 
            (props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
            }))
        }
       
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseListComponent);