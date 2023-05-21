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

// Create new li element
var li = document.createElement('li');

// Add class
li.className = 'list-group-item';
// console.log(li)
// Add text node with input value
li.appendChild(document.createTextNode(newItem));

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
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none'
        }
    }); 
}