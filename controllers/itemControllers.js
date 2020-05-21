const Inventory = require("../models/inventory");
const Category = require("../models/categories");
const Item = require("../models/items");
const db = require("../config");
const { Schema } = require('mongoose');


module.exports = {
    // addItems:(req, res) => {
    //     const  { itemName, categoryName, price, availability, description,imageUrl} = req.body
    //     const newItem = new Item({itemName,categoryName, price, availability, description,imageUrl})
    //    newItem.save()
    //    .then((item) =>{
    //        if(item) {
    //            return res.status(201).json({message:'new stock',  newItem})
    //         }
    //    })
    //    .catch((error) =>{
    //        console.log(error)
    //    });   
    // } ,

    createItem (req, res) {
        const { name, description, price } = req.body;
        let newItem = new Item({
        name,
        description,
        price
        });
        newItem.save();
        res.status(200).json({item: newItem});
        },

        allItems(req, res) {
            Item.find({}).exec((err, items) => {
             if(err) console.log('Get Item Mongoose Error------------------', err);
             console.log('items-------------', items);
             res.status(200).send(items);
           });
           },

           specificItem(req, res) {
              const { id } = req.params;
             Item.findById(id).exec((err, item) => {
              if(err) console.log('Error---------------', err);
              console.log('item--------------', item);
              res.status(200).json({item});
             })
            },
           
     
    deleteItem: (req, res) => {
        Item.findByIdAndRemove(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted Successfully!');
        })
    },

        deleteItem(req, res) {
            const { id } = req.params;
            Item.deleteOne({_id: id}).exec((err, item) => {
            if(err) console.log('err')
            res.status(200).json({item});
            });
            }
            };