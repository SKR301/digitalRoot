const digitalRoot = require('../index');

test('checks digital root for a valid input', () => {
    expect(digitalRoot(123)).toBe(6);
});