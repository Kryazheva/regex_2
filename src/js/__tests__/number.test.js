// eslint-disable-next-line no-unused-vars
import replaceNumbers from '../replaceNumber';

test('Test number phone', () => {
  expect(replaceNumbers('+7(903)-121-00-00')).toBe('+79031210000');
});

test('Test number phone', () => {
  expect(replaceNumbers('+86 000 000 0000')).toBe('+860000000000');
});
