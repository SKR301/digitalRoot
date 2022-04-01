const digitalRoot = require('../index');

test('checks for string as input', () => {
    expect(digitalRoot('123')).toBe('Invalid input. Input must be a whole number.');
});
test('checks for negative number as input', () => {
    expect(digitalRoot(-123)).toBe('Invalid input. Input must be a whole number.');
});
test('checks for decimal number as input', () => {
    expect(digitalRoot(12.3)).toBe('Invalid input. Input must be a whole number.');
});