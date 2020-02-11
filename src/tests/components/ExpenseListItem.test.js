import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import { expenses } from '../test_cases';

test('should render an ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0] } />);
    expect(wrapper).toMatchSnapshot();
});