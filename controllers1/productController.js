const Product = require('../productModel');
const { uuid } = require('uuidv4');
const { getPostData } = require('../utilities');



async function getProducts(req,res){
try{
    res.writeHead(200, {'Content-Type': 'application/json'});

const products = await Product.findAll();
// res.statusCode = 200;
// res.setHeader('Content-Type','application/json');
res.end(JSON.stringify(products));

}catch(err){
console.log(err);
}
}


async function getProductById(req,res,id){
    const product = await Product.findById(id);
//   const product = products.find(p=>(p.id == id));
  if(!product){
    res.end(JSON.stringify({message:'nothing'}));

  }
  console.log(product);
              res.end(JSON.stringify(product));




}

async function createProduct(req,res){
 try{

const body = await getPostData(req);
const {title,description,price} = JSON.parse(body);
const product = {
    title,
    description,
    price
}
const newProduct = await Product.create(product);



res.writeHead(201,{'Content-Type':'application/json'});
return res.end(JSON.stringify(newProduct));

 }catch(err){
     console.log(err);
 }



}




module.exports = {

    getProducts,
    getProductById,
    createProduct
}

// module.exports = 'Hello world';
