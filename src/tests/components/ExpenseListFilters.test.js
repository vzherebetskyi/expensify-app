import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../test_cases';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with the alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'Test';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle start date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: altFilters.startDate });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
});

test('should handle end date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({endDate: altFilters.endDate });
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')( calendarFocused );
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});