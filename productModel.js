const products = require('./data/products.json');
const { v4 } = require('uuid');
const { writeDataToFile } = require('./utilities');


function findAll(){

    return new Promise((resolve,reject)=>{
        resolve(products);
    });
}

function findById(id){
    const product = products.find(p=>(p.id == id));

    return new Promise((resolve,reject)=>{
        resolve(product);
    });
}


function create(product){
return new Promise((resolve,reject)=>{


const newProduct = {id: v4(),...product};

products.push(newProduct);
writeDataToFile('./data/products.json',products);
resolve(newProduct);
});

}

module.exports={

    findAll,
    findById,
    create
}