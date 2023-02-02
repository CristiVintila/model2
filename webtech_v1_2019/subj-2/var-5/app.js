const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        name: "Iphone XS",
        category: "Smartphone",
        price: 5000
    },
    {
        name: "Samsung Galaxy S10",
        category: "Smartphone",
        price: 3000
    },
    {
        name: "Huawei Mate 20 Pro",
        category: "Smartphone",
        price: 3500
    }
];

app.get('/products', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/products', (req, res, next) => {
    try {
        // if(req.body==""){
        //     res.status(500).json({message: 'Body is missing'})
        // } else if(req.body.name){
        //     if(req.body.category){
        //         if(req.body.price){
        //             if(req.body.price>0){
        //                 let v = app.locals.products.map(x=>x.name)
        //                 if(v.findIndex(x=>x===req.body.name)==-1){
        //                     let prod = {
        //                         name:req.body.name,
        //                         category:req.body.category,
        //                         price: parseInt(req.body.price)
        //                     }
        //                     app.locals.products.push(prod)
        //                     res.status(201).json({message:"Created"})
        //                 } else res.status(500).json({message: "Product already exists"})
        //             } else res.status(500).json({message: "Price should be a positive number"})
        //         } else res.status(500).json({message: "Invalid body format"})
        //     } else res.status(500).json({message: "Invalid body format"})
        // } else res.status(500).json({message: "Invalid body format"})

        if (Object.keys(req.body).length>0){
            if(req.body.name){
                if(req.body.category){
                    if(req.body.price){
                        if(req.body.price>0){
                            let v = app.locals.products.map(x=>x.name)
                            if(v.findIndex(x=>x===req.body.name)==-1){
                                let prod = {
                                    name:req.body.name,
                                    category:req.body.category,
                                    price: parseInt(req.body.price)
                                }
                                app.locals.products.push(prod)
                                res.status(201).json({message:"Created"})
                            } else res.status(500).json({message: "Product already exists"})
                        } else res.status(500).json({message: "Price should be a positive number"})
                    } else res.status(500).json({message: "Invalid body format"})
                } else res.status(500).json({message: "Invalid body format"})
            } else res.status(500).json({message: "Invalid body format"})
        } else res.status(500).json({message: 'Body is missing'});
    } catch (error) {
        res.status(500).json({message: 'Body is missing'});
    }
    
})

module.exports = app;