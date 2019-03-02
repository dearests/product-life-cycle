const fs = require('fs');

class Utility {
    constructor() {
        this.lastProduct = undefined;
    }

    set setLastProduct(product) {
        this.lastProduct = product;
        return this.lastProduct;
    }

    get getLastProduct() {
        return this.lastProduct;
    }

    isLastProduct(id) {
        return id === this.lastProduct.id
    }

    writeToFile(path, data, options ='utf8') {
        return new Promise((resolve, reject) => {
            fs.appendFile(path, data, options, this.callback)
        })
    }

    callback(error) {
        if (error) console.log(error);
        console.log('success');
    }
}

module.exports = new Utility();