import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({expenses}) => (
<div>
    {/* <h1>Expense List</h1> */}
    {
        expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (expenses.map(element => {
                return <ExpenseListItem key = {element.id} {...element} />;
             }))
    }    
</div>
);

const connectedExpenseList = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(connectedExpenseList)(ExpenseList);