import { expenses } from '../test_cases';
import expensesTotal from '../../selectors/total-expenses';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = expensesTotal(expenses);
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const singleExpense = [expenses[0]];
  const result = expensesTotal(singleExpense);
  expect(result).toEqual(200);
});

test('should correctly add up multiple expenses', () => {
  const multipleExpenses = expenses;
  const result = expensesTotal(multipleExpenses);
  expect(result).toEqual(171700);
});