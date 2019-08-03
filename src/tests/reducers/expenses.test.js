import expenseReducer from '../../reducers/expenses';
import {expenses} from '../fixtures/expenses';

test('should remove expense by id', () => {
    const action = { 
        type : 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const result = expenseReducer(expenses, action);
    expect(result).toEqual([ expenses[0], expenses[2], expenses[3]]);
});