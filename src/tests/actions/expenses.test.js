import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should return add expense action.', () => {
    const expense = {
        description : 'test',
        note : 'test note',
        amount : 1200,
        createdAt : 0
    }

    const result = addExpense(expense);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense : { ... expense,  id: expect.any(String)},
    });
}); 