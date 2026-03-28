const {add, subtract} = require('./calculator');

test('add: 2 + 3 should equal 5', () => {
    expect(add(2, 3)).toBe(5);
});
test('subtract: 10 - 4 should equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
});