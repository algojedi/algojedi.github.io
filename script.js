// var menu = document.getElementById("navbar_list");
var listItems = document.getElementsByClassName("list_item");

function myFunction() {

    var checked = document.getElementById("icon_check").checked;
    
    // checked ? menu.className += ' overlay' : menu.className = 'navbar_list';
    
    for (var i = 0; i < listItems.length; i++) {
        checked ?   listItems.item(i).className += " active" :
                    listItems.item(i).className = "list_item";
    }
}

function handleMenuClick() {
    console.log("handled link click");
}

function closeLinks() {
    document.getElementById("icon_check").checked = false;
    
    for (var i = 0; i < listItems.length; i++) {
        listItems.item(i).className = "list_item";
    }
}