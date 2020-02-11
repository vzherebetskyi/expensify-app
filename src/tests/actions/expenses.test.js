import { addExpense, removeExpense, editExpenses } from '../../actions/expenses';

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
    const expenseData = { 
        description: 'test',
        note: 'this is test object', 
        amount: 10000,
        createAt: 0
    };    
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    });
});

test('without values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '', 
            amount: 0,
            createAt: 0,
            id: expect.any(String)
        }
    });
});