var dispatcher = require('./../dispatcher');

var GroceryItemActionCreator = {

    add: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:add'
        });
    }
    ,
    delete: function(item){
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:delete'
        });
    }
};

module.exports = GroceryItemActionCreator;


