import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
    startAddExpense, addExpense, removeExpense, editExpenses, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense 
} from '../../actions/expenses';
import { expenses } from '../test_cases';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = {auth: { uid }};
const createMockStore = configureMockStore([ thunk ]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createAt }) => {
        expensesData[id] = { description, note, amount, createAt };
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should set up remove action object', () => {
    const action = removeExpense({ id: 'ekekdkdj293' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        expense: { id: 'ekekdkdj293' }
    })
});

test('should set up edit action object', () => {
    const action = editExpenses('ekekdkdj293', { note: 'New note - value 7' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: 'ekekdkdj293',
        updates: {note: 'New note - value 7'}
    });
});

test('should set up add expense object with values', () => {   
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Nice mouse',
        createAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        note: '', 
        amount: 0,
        createAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
    });
});

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expenses', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = '';

    store.dispatch(startRemoveExpense(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            expense: {
                id: ''
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(null);
        done();
    });
});

test('should edit expenses', (done) => {
    const store = createMockStore(defaultAuthState);
    const testData = {
        description: 'Wine',
        note: 'Some dummy info',
        amount: 200,
        createAt: 0
    };

    store.dispatch(startEditExpense(expenses[2].id, testData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[2].id,
            updates: testData
        });

        return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(testData);
        done();
    });
});
