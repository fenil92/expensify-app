import React from 'react';
import { shallow } from "enzyme";
import ExpenseForm from '../../components/ExpenseForm';
import {expenses} from '../fixtures/expenses';

test('should render expense form', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense ={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error on invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description : expenses[2].description,
        note : expenses[2].note,
        amount : expenses[2].amount,
        createdAt : expenses[2].createdAt
    });
});