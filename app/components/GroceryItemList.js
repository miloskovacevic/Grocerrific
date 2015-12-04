var React = require('react');

var GroceryItemList = React.createClass({
    render: function () {
        return (
            <div>
               <h1>Grocery List</h1>
                <div>
                    {this.props.items.map(function (item, i) {
                        return (


                        )
                    })}
                </div>
            </div>
        );
    }
    
    
});

module.exports = GroceryItemList;