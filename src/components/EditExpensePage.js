import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expenses.id, expense);
        this.props.history.push('/');
    };

    removeExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expenses.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                 <div className="content-container">
                  <h1 className="page-header__title">Edit Expense</h1>
                 </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                    expense = {this.props.expenses}
                    onSubmit = {this.onSubmit}
                    />
                    <button className="edit-expense__secondary" onClick = {this.removeExpense}>Remove Expense</button>
                </div>
            </div>
        );
    }
}

const connectedEditExpensePage = (state, props) => {
    return{
        expenses: state.expenses.find((expense) => 
        expense.id === props.match.params.id
        )
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(connectedEditExpensePage, mapDispatchToProps)(EditExpensePage);
