var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit event
form.addEventListener('submit', addItem);

// filter event

filter.addEventListener('keyup', filterItems)

// Delete event
itemList.addEventListener('click', removeItem)

// add item
function addItem(e){
    e.preventDefault();
    console.log(1)


// Get input value

var newItem = document.getElementById('item').value;
var newDesc = document.getElementById('description').value;

// Create new li element
var li = document.createElement('li');

// Add class
li.className = 'list-group-item';
// console.log(li)
// Add text node with input value
li.appendChild(document.createTextNode(newItem+'\n'));
li.appendChild(document.createTextNode(' '+newDesc));

// create edit button
var editBtn = document.createElement('button');
editBtn.className = 'btn btn-warning float-right btn-sm ml-1';

// append text node
editBtn.appendChild(document.createTextNode("Edit"));

// append button to li
li.appendChild(editBtn);

// append button to list
itemList.appendChild(li);

// Create del button element
var deleteBtn = document.createElement('button');

deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// append text node
deleteBtn.appendChild(document.createTextNode('X'));

// append button to li
li.appendChild(deleteBtn)

// Append li to list 
itemList.appendChild(li);



}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    // console.log(text)
    // get all li's
    var items = itemList.getElementsByTagName('li');
    
    // Convert to an array

    Array.from(items).forEach(function(item){
        var itemName = item.childNodes[0].textContent;
        
        // Adding item description 
        var itemDesc = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none'
        }
    }); 
}