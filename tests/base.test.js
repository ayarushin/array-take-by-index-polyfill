test('Base test for checking polyfill', function () {
    Array.prototype.takeByIndex = undefined;
    require('../take-by-index-polyfill');

    const testArray = ['John Smith', 'Sherlock Holms', 'James Moriarty'];

    expect(testArray.takeByIndex(0)).toBe('John Smith');
    expect(testArray.takeByIndex(1)).toBe('Sherlock Holms');
    expect(testArray.takeByIndex(2)).toBe('James Moriarty');
    expect(testArray.takeByIndex(3)).toBeUndefined();

    expect(testArray.takeByIndex(-1)).toBe('James Moriarty');
    expect(testArray.takeByIndex(-2)).toBe('Sherlock Holms');
    expect(testArray.takeByIndex(-3)).toBe('John Smith');
    expect(testArray.takeByIndex(-4)).toBeUndefined();
});