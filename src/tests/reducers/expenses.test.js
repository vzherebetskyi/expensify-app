import expensesReducer from '../../reducers/expenses';
import { expenses } from '../test_cases';

test('should set a default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[2].id
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[3]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '5',
            description: 'Leisure',
            amount: 30000,
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, {
        id: '5',
        description: 'Leisure',
        amount: 30000
    }]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
        description: 'Leisure'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe('Leisure');
});

test('should not edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
        description: 'Leisure'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

