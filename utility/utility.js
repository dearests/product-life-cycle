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
        new Promise((resolve, reject) => {
            fs.appendFile(path, data, options, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                    
                }
            })
        })
    }
    
}

module.exports = new Utility();