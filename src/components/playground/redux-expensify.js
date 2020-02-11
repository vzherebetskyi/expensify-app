import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

//REMOVE_EXPENSE

const removeExpense = (
    {
        id = ''
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

//EDIT_EXPENSE

const editExpenses = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//SET_SORT_BY_AMOUNT
//options - lowest-biggest (default) || biggest-lowest

const sortByAmount = (way = 'lowest-biggest') => ({
    type: 'SET_SORT_BY_AMOUNT',
    way
});

//SET_SORT_BY_DATE

const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

//SET_START_DATE

const setStartDate = (date = '') => ({
    type: 'SET_DATE',
    date
});

//SET_END_DATE
const setEndDate = (date = '') => ({
    type: 'END_DATE',
    date
});

//Expenses Reducer

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return [
              ...state,
              action.expense
            ];
        case 'REMOVE_EXPENSE':
          return state.filter(({ id }) => id !== action.expense.id);
        case 'EDIT_EXPENSE':
          return state.map((object) => object.id === action.id ?{...object, ...action.updates} : object
          );
        // case 'SET_SORT_BY_AMOUNT':
        //   return action.way === 'lowest-biggest' ? state.sort((a,b) => a.amount - b.amount) : state.sort((a,b) => b.amount - a.amount);
        default: 
         return state;
    }
};

//Filters Reducer

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
        return {...state, text: action.text};
        case 'SET_SORT_BY_AMOUNT':
        return {...state, sortBy: 'amount'};
        case 'SET_SORT_BY_DATE':
        return {...state, sortBy: 'date'};
        case 'SET_DATE':
        // let d = new Date();
        //     action.date === '' ? state.startDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}` : state.startDate = new Date(action.date);
        return {...state,
        startDate: action.date};
        case 'END_DATE':
        // d = new Date();
        //     action.date === '' ? state.endDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}` : state.endDate = new Date(action.date);
        return {...state,
            endDate: action.date};;
        default:
        return state;
    }
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= startDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return b.amount - a.amount;
        }
    });
};

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpenses( expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('what the fuck'));
// store.dispatch(setTextFilter());
const expenseThree = store.dispatch(addExpense({ description: 'Food', amount: 400,createAt: 2000 }));
const expenseFour = store.dispatch(addExpense({ description: 'Phone', amount: 100,createAt: -2000 }));
const expenseFive = store.dispatch(addExpense({ description: 'Booze', amount: 700,createAt: 3000 }));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setStartDate('September 28, 1991'));
// store.dispatch(setEndDate('September 30, 1995'));


const demoState = {
    expenses: [{
        id: 'fghjjlkl;',
        description: 'January Rent',
        note: 'That was the final payment for this year',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};