var mongoose = require('mongoose');

//schema...
var GroceryItemSchema = {
    name: String,
    purchased: Boolean,
    id: String
};

var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, "groceryItems");

module.exports = GroceryItem;