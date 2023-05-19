// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);

// console.log(document.all);
// document.all[10].textContent = 'hello' // manipulating title
// document.all[19].textContent = 'Mug'
// document.all[20].textContent = 'Cutlery'
// document.all[21].textContent = 'Plates';
// document.all[21].textContent = 'Wafers & Cold-drinks';

// var getHeader = document.getElementById('main-header');
// getHeader.style.borderBottom= 'solid 3px black';

// var getAddItem = document.getElementById('add-items');
// getAddItem.style.fontWeight = 'bold'
// getAddItem.style.color = 'green'

var items = document.getElementsByClassName('list-group-item');
var allItems = document.getElementsByClassName('list-group')

// console.log(items)
// console.log(document.items[2]);
items[2].textContent = 'Ferrari';
// items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green'

// give error
// allItems.style.fontWeight = 'bold';

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold'
}
