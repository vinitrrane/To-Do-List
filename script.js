
// Targeting Add button

var btn = document.getElementById('btn_add');

// Done & Remove Icon Tags

var compIcon = '<i class="fa-solid fa-check"></i>';
var delIcon = '<i class="fa-solid fa-trash"></i>';

// Add Button Event

btn.addEventListener('click', fun_main);

// Targeting Empty Error

var err = document.getElementById('error');

// Add Button Function

function fun_main() {

    // Storing value from input

    var inp = document.getElementById('inp_add').value;

    // Error if empty

    if (inp == "") {
        err.style.display = "block";
    }

    // Creating List if not empty

    else {

        // Value from input

        var listTxt = document.createTextNode(inp);

        // Creation of List body

        var listItem = document.createElement('div');


        // Adding ID to List Body

        listItem.setAttribute('id', 'list_add');

        // Adding Class to List Body

        listItem.className = "listIt";

        // Creating List Text

        var listTitle = document.createElement('p');

        // Adding Class to List Text

        listTitle.className = "lisTitle";

        // Adding ID to List Text

        listTitle.setAttribute('id', 'list_title');

        // Pushing value from input to List Text

        listTitle.appendChild(listTxt);

        // Pushing List Text to List Body

        listItem.appendChild(listTitle);

        // Creating Done & Remove Button Div

        var btnDiv = document.createElement('div');

        // Adding Class to Done & Remove Button Div

        btnDiv.className = "btnGroup";

        // Creating Done & Remove Buttons

        var btnComp = document.createElement('button');
        var btnDel = document.createElement('button');

        // Adding Class to Done & Remove Buttons

        btnComp.className = "btnDone";
        btnDel.className = "btnRemove";

        // Adding Done & Remove Buttons Icons to Button

        btnComp.innerHTML = compIcon;
        btnDel.innerHTML = delIcon;

        // Adding ID to Done & Remove Buttons

        btnComp.setAttribute('id', 'btn_comp');
        btnDel.setAttribute('id', 'btn_del');

        // Adding functions to Done & Remove Buttons

        btnComp.setAttribute('onclick', 'fun_done(this)');
        btnDel.setAttribute('onclick', 'fun_remove(this)');

        // Pushing Done & Remove Buttons to Button Div

        btnDiv.appendChild(btnComp);
        btnDiv.appendChild(btnDel);

        // Pushing Button Div to List Body

        listItem.appendChild(btnDiv)

        // Pushing List Body to Task Area

        document.getElementById('mainSc').appendChild(listItem);

    }

}

// Remove Button Function

function fun_remove(del) {

    var listMain = del.parentNode.parentNode;

    // Remove List Body 

    listMain.remove();
}

// Done Button Function

function fun_done(comp) {

    var listMain2 = comp.parentNode.parentNode;

    // Done List text line through

    listMain2.setAttribute('style', 'text-decoration:line-through');

    var listItem = comp.parentNode.parentNode;

    // Adding Done List class to List Body

    listItem.className = "listCan";

    // Remove Done Button 

    comp.remove();

}

// Function to remove Empty Error

function fun_enter() {

    err.style.display = "none";

}