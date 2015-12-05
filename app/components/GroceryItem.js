var React = require('react');

var GroceryItem = React.createClass({


    render: function(){
        var item = this.props.item;
        var nameOfClass = '';
        if(item.purchased && item.purchased === true) {
            nameOfClass = 'strikethrough';
        }

        return (
          <div>
              <h4 className={nameOfClass}>{this.props.item.name}</h4>
          </div>
        );
    }
});

module.exports = GroceryItem;