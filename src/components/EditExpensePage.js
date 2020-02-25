import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ExpenseForm from './ExpenseForm';
import { editExpenses, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpenses(this.props.expenses.id, expense);
        this.props.history.push('/');
    };

    removeExpense = () => {
        this.props.removeExpense({ id: this.props.expenses.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
              <ExpenseForm
               expense = {this.props.expenses}
               onSubmit = {this.onSubmit}
              />
               <button onClick = {this.removeExpense} >Remove</button>
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
    editExpenses: (id, expense) => dispatch(editExpenses(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(connectedEditExpensePage, mapDispatchToProps)(EditExpensePage);
