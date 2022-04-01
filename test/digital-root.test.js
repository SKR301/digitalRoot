const digitalRoot = require('../index');

test('checks for 0', () => {
    expect(digitalRoot(0)).toBe(0);
});
test('checks for a valid input', () => {
    expect(digitalRoot(123)).toBe(6);
});
test('checks for a valid input which adds upto 9', () => {
    expect(digitalRoot(1233)).toBe(9);
});
test('checks for string as input', () => {
    expect(digitalRoot('123')).toBe('Invalid input. Input must be a whole number.');
});
test('checks for negative number as input', () => {
    expect(digitalRoot(-123)).toBe('Invalid input. Input must be a whole number.');
});
test('checks for decimal number as input', () => {
    expect(digitalRoot(12.3)).toBe('Invalid input. Input must be a whole number.');
});