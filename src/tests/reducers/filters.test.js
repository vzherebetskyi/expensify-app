import moment from 'moment';

import filterReducer from '../../reducers/filters';

test('should set up the dafault value', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set up sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SET_SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'amount',
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month')
    // });
});

test('should set up sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SET_SORT_BY_DATE' }
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set up sort by text', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT', text: 'eeer' });
    expect(state.text).toBe('eeer');
});

test('should set up sort by start date', () => {
    const state = filterReducer(undefined, { type: 'SET_DATE', date: moment().add(4, 'days').valueOf() });
    expect(state.startDate).toBe(moment().add(4, 'days').valueOf());
});

test('should set up sort by end date', () => {
    const endDate = moment().add(4, 'days').valueOf();
    const state = filterReducer(undefined, { type: 'END_DATE', date: endDate });
    expect(state.endDate).toBe(endDate);
});