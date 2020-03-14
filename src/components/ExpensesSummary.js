import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import totalExpenses from '../selectors/total-expenses';

export const ExpensesSummary = (props) => {
const { expenses } = props;
 return (
    <div className="page-header">
     <div className="content-container">
        <h1 className="page-header__title">In general there are <span>{expenses.length}</span> expense(-s)! In total you have spent <span>{numeral(totalExpenses(expenses) / 100).format('$0,0.00')}</span></h1>
        <div className="page-header__actions">
            <Link className="expense-summary__add-expense-button" to="/create">Add Expense</Link>
        </div>
     </div>
    </div>
)};

const connectedExpensesSummary = (state) => {
    return {
        expenses: state.expenses
    }
};

export default connect(connectedExpensesSummary)(ExpensesSummary);
