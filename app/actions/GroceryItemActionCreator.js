var dispatcher = require('./../dispatcher');

var GroceryItemActionCreator = {

    add: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:add'
        });
    }
};

module.exports = GroceryItemActionCreator;


