const http = require('http');
const url = require('url');
const {getProducts, getProductById,createProduct,updateProduct,deleteProduct} = require('./controllers1/productController');
// const { getProducts } = require('./controllers1/productController1');

const server =  http.createServer((req,res)=>{
    if(req.url === '/api/products/' && req.method === 'GET'){
        console.log('a');
        getProducts(req,res);
        //controller here
// console.log(productController);
        // res.statusCode = 200;
        // res.setHeader('Content-Type','text/html');
        // res.end(JSON.stringify(products));
    }else if(req.url.match(/\/api\/products\/([0-9]+)|([a-z]+)|([A-Z]+)/) && req.method === 'GET'){
let id = req.url.split('/')[3];

        ///cntroller goes here
        getProductById(req,res,id);
// console.log(req.url.split('/')[3]);


    }else if(req.url === '/api/products/' && req.method === 'POST'){

        createProduct(req,res);
        // console.log('post has passed');

    }else if(req.url.match(/\/api\/products\/\d+/) && req.method === 'PUT'){
        let id = req.url.split('/')[3];

updateProduct(req,res,id);


    }else if(req.url.match(/\/api\/products\/([0-9]+)|([a-z]+)|([A-Z]+)/) && req.method === 'DELETE'){
        let id = req.url.split('/')[3];

        deleteProduct(req,res,id);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});

        res.end(JSON.stringify({message:'nothing'}));
    };


});


const PORT = process.env.PORT || 3000;

server.listen(PORT,console.log('server is running...'));