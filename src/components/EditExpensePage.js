import React from 'react';
import { connect } from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm  expense={props.expense} onSubmit={
            (expense) => {
                props.editExpense(props.expense.id, expense)
                props.history.push('/');
            }
        }/>
        <button onClick ={() => {
            props.removeExpense({ id: props.expense.id });
            props.history.push('/');
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    editExpense : (id, expense) => dispatch(startEditExpense(id, expense)),
    removeExpense : (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);