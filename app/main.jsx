var React = require('react');
var GroceryItemList = require('./components/GroceryItemList');
var initial = [
    {
        name: 'Ice Cream'
    },
    {
        name: 'Waffles'
    },
    {
        name:'Candy',
        purchased: true
    },
    {
        name: 'Sharks'
    }
];
React.render(
    <GroceryItemList items={initial} />,
    document.getElementById("app")
);

