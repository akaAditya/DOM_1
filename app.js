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

//  BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// var allItems = document.getElementsByClassName('list-group')

// // console.log(items)
// // console.log(document.items[2]);
// items[2].textContent = 'Ferrari';
// // items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green'

// // give error
// // allItems.style.fontWeight = 'bold';

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold'
// }

// BY TAGNAME
// let newItem = document.getElementsByClassName('new-item');
// newItem[0].textContent = 'Maserati';

// let li = document.getElementsByTagName('li');
// li[4].textContent = 'Porsche';

// BY QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// var addItems = document.querySelector('input[type="text"]');
// addItems.value = 'hello';

// var input = document.querySelector('input[type="submit"]');
// input.value = 'SEND';

// var item = document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundColor = 'green'

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility = 'hidden';

// BY QUERYSELECTORALL

var secondItem = document.querySelectorAll('.list-group-item');
secondItem[1].style.color = 'green';

 // Another alternate way for odd & even elements.
 // var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

for(var i=0; i<secondItem.length; i++){
    if(i%2==0){
        secondItem[i].style.backgroundColor = 'green';
    }
}




