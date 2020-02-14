import React from 'react';
import { shallow, mount } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import { expenses } from '../test_cases';
import expensesTotal from '../../selectors/total-expenses';

test('should render ExpensesSummary component', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {[]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with one expense', () => {
    const wrapper = mount(<ExpensesSummary expenses = {[expenses[0]]} />);
    expect(wrapper.props().expenses.length).toBe(1);
});

test('should render ExpensesSummary with two expenses', () => {
    const wrapper = mount(<ExpensesSummary expenses = {[expenses[0], expenses[1]]} />);
    expect(wrapper.props().expenses.length).toBe(2);
});

test('should render ExpensesSummary with two expenses in total', () => {
    const wrapper = mount(<ExpensesSummary expenses = {[expenses[0], expenses[1]]} />);
    expect(expensesTotal(wrapper.props().expenses)).toBe(51700);
});