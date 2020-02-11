import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_DATE",
        date: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "END_DATE",
        date: moment(0)
    });
});

test('should generate sort by date object', () => {
    expect(sortByDate()).toEqual({ type: "SET_SORT_BY_DATE" });
});

test('should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SET_SORT_BY_AMOUNT",
        way: "lowest-biggest"
    });
});

test('should generate set text filters object with values', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: "SET_TEXT",
        text: 'test'
    });
});

test('should generate set text filters object without values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT",
        text: ''
    });
});

