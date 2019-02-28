const allExports = require('./exports');

allExports.Utility.lastProduct1 = {id: 1, product: 'Rice and Beans', state: 'Consumer'};
console.log(allExports.Utility.lastProduct2)
console.log(allExports.Utility.isLastProduct(1))
// let utility = allExports.Utility;
// console.log(allExports.Utility.lastProduct1({id: 1, product: 'Rice', state: 'Producer'}));
// console.log(utility.utility.isLastProduct());

try {
    allExports.Utility.writeToFile('Product-output', 'this content');
} catch(e) {
    console.log('Something went wrong')
}



