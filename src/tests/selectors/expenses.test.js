import getVisibleExpenses from '../../selectors/expenses';
import {expenses} from '../fixtures/expenses';

test('should filter by text', () => {
  const filters = {
      text : 'e',
      sortBy : 'date',
      startDate : undefined,
      endDate : undefined
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});