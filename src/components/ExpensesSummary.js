import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import totalExpenses from '../selectors/total-expenses';

export const ExpensesSummary = (props) => {
const { expenses } = props;
 return (
    <div>
        <p>In general there are {expenses.length} expenses!</p>
        <p>In total you have spent {numeral(totalExpenses(expenses) / 100).format('$0,0.00')} </p>
    </div>
)};

const connectedExpensesSummary = (state) => {
    return {
        expenses: state.expenses
    }
};

export default connect(connectedExpensesSummary)(ExpensesSummary);
