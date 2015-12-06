var React = require('react');
var action = require('./../actions/GroceryItemActionCreator');

var GroceryItem = React.createClass({

    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },

    render: function(){
        var item = this.props.item;
        var nameOfClass = '';
        if(item.purchased && item.purchased === true) {
            nameOfClass = 'strikethrough';
        }

        return (
          <div>
              <div>
                <h4 className={nameOfClass}>{this.props.item.name}</h4>
              </div>
              <form className="three columns" onSubmit={this.delete}>
                <button>&times;</button>
              </form>
          </div>
        );
    }
});

module.exports = GroceryItem;