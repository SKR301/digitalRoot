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