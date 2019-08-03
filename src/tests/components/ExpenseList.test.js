import React from 'react';
import {ExpenseListComponent} from '../../components/ExpensesList';
import { shallow } from 'enzyme';
import {expenses} from '../fixtures/expenses';

test('should render expenselist correctly', () => {
    const wrapper = shallow(<ExpenseListComponent expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenselist correctly when there is no expense', () => {
    const wrapper = shallow(<ExpenseListComponent expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});