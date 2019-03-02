const allExports = require('../exports');
const data = {id: 1, product: 'Rice and Beans', state: 'Consumer'};


test('testing to set product method to return last product', () => {
    expect(allExports.Utility.setLastProduct = data).toEqual(data);
});

test('testing product method to return last product', () => {
    expect(allExports.Utility.getLastProduct).toEqual(data);
});

test('testing set product method to return true', () => {
    expect(allExports.Utility.isLastProduct(1)).toBeTruthy();
});

test('testing set product method to return true', () => {
    expect(allExports.Utility.isLastProduct(2)).toBeFalsy()
});

test('testing set product method to return true', () => {
    expect(allExports.Utility.writeToFile('Product-output', 'Content1\n')).toBeTruthy()
});

// test('testing set product method to return false', () => {
//     expect(allExports.Utility.writeToFile('', 'Content1\n')).toThrowError({ [Error: ENOENT: no such file or directory, open ''] errno: -2, code: 'ENOENT', syscall: 'open', path: '' });
// });