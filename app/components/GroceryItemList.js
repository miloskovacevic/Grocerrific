var React = require('react');
var GroceryItem = require('./GroceryItem');
var GroceryListAddItem = require('./GroceryListAddItem');

var GroceryItemList = React.createClass({

    renderItems: function(item, i){
        return (
            <GroceryItem item={item} key={'Item' + i} />
        );
    },


    render: function () {
        return (
            <div>
               <h1>Grocery List</h1>
                <div>
                    {this.props.items.map(this.renderItems)}
                </div>
                <GroceryListAddItem />
            </div>
        );
    }
});

module.exports = GroceryItemList;