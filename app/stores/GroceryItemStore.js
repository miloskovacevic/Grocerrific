var dispatcher = require('./../dispatcher');
var helper = require('./../helpers/RestHelper');

function GroceryItemStore(){
    var items = [];

    helper.get("api/items")
    .then(function (data) {
        items = data;
        triggerListeners();
    });

    var listeners = [];

    function getItems(){
        return items;
    }

    function addGroceryItem(item){
        items.push(item);
        triggerListeners();
        helper.post("api/items", item);
    }

    function deleteGroceryItem(item){
        var index;
        items.filter(function(_item, _index){
          if(_item.name == item.name){
              index = _index;
          }
        });

         items.splice(index, 1);
         triggerListeners();
    }

    function onChange(listener){
        listeners.push(listener);
    }

    function triggerListeners(){
        listeners.forEach(function(listener){
            listener(items);
        });
    }

    function setGroceryItemBought(item, isBought){
        var _item = items.filter(function(a){
            return a.name == item.name
        })[0];
        item.purchased = isBought || false;
        triggerListeners();
    }

    //ovde paket je klasican paket sa propsima 'payload' i 'type'
    dispatcher.register(function (paket) {
        var split = paket.type.split(':');

        if(split[0]==='grocery-item'){
            switch(split[1]){
                case "add":
                    addGroceryItem(paket.payload);
                    break;
                case "delete":
                    deleteGroceryItem(paket.payload);
                    break;
                case "buy":
                    setGroceryItemBought(paket.payload, true);
                    break;
                case "unbuy":
                    setGroceryItemBought(paket.payload, false);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    };

}


module.exports = new GroceryItemStore();