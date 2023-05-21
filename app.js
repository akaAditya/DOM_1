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

// // BY QUERYSELECTORALL
// var secondItem = document.querySelectorAll('.list-group-item');
// secondItem[1].style.color = 'green';

//  // Another alternate way for odd & even elements.
//  // var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

// for(var i=0; i<secondItem.length; i++){
//     if(i%2==0){
//         secondItem[i].style.backgroundColor = 'green';
//     }
// }

// TRAVERSING THE DOM

// var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'yellow'
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'yellow'
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// use "'children'" instead of 'chileNode'
// console.log(itemList.children);
// console.log(itemList.children[1]); // selects item no. 2 from itemlist
// itemList.children[1].style.backgroundColor = 'cyan';

// firstChild
// console.log(itemList.firstChild)// return whitespace or element;

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hey there!';

// lastChild
// console.log(itemList.lastChild)// return whitespace or element;

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.firstElementChild.textContent = 'hey there!';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling); // use this instead of 'nextSibling'

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling); // use this instead of 'previousSibling'



// createElement

// create a div
// var newDiv = document.createElement('div');

// // add className
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello1';

// // add attribute
// newDiv.setAttribute('title', 'Hello div');

// // create text node
// var newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// // var container = document.querySelector('header .container ');
// // var h1 = document.querySelector('header h1');

// // // console.log(newDiv);
// // container.insertBefore(newDiv, h1)


// // add hello world before item 1

// var newdiv2 = document.querySelector('body #items');
// var li = document.querySelector('body li');

// console.log(newDiv);   
// newdiv2.insertBefore(newDiv, li);

// Add eventListner
// var button = document.getElementById('button').addEventListener('click', buttonCLick);

// function buttonCLick(e){
    // console.log('button clicked');
    // document.getElementById("header-title").textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 'yellow';

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+ e.target.id+'</h2>'

// }

// var button = document.getElementById('button');

// button.addEventListener('click', runEvent);
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }
