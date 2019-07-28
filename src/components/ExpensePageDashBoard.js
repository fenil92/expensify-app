import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpensePageDashBoard = () => (
    <div>
        <ExpenseListFilter />
        <ExpensesList />
    </div>
);


export default ExpensePageDashBoard ;