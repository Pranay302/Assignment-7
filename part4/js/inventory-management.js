/*eslint-env browser*/
var inventory = [
    [4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99],[9382, "Jacket", 5, 49.99]
    ]
    function displayMessage(){
        console.log('COMMANDS:');
        console.log("VIEW - View all product list from inventory and their details \nUPDATE - Update the quantity of a existing product for given sku. \nEXIT - exit from the program.");
    }
    while (true) {
        displayMessage();
        var success=0;
        var choice = window.prompt("Enter the command : (VIEW/UPDATE/EXIT)");
        
        if (choice.toUpperCase() == "VIEW") {
            inventory.sort();
            for (var i = 0; i < inventory.length; i++) {
                var element = inventory[i];
                console.log(element[0] + " " + element[1] + " (" + element[2] + ") $" + element[3]);
            }
        }
    
    if (choice.toUpperCase() == "UPDATE") {
        var sku = window.prompt("Enter a valid sku")
        var quantity = window.prompt("Enter the new quantity for that sku")
        
        for (var i = 0; i < inventory.length; i++) {
            if(inventory[i][0] == sku) {
                inventory[i][2] = Number(quantity)
                success = 1;
            }
        }
        if(success === 0){
            window.alert("Better view the existing sku and enter the valid one to update")
        }
    }
    
    if (choice.toUpperCase() == "EXIT") break;
    
    }
    
