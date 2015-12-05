var React = require('react');
var groceryItemStore = require('./stores/GroceryItemStore');
var GroceryItemList = require('./components/GroceryItemList');

var initial = groceryItemStore.getItems();

function render(){
    React.render(
        <GroceryItemList items={initial} />,
        document.getElementById("app")
    );
}

groceryItemStore.onChange(function(items){
    initial = items;
    render();
});
render();


