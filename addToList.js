function addToList(event) {
    let input = document.getElementById('data').value;
    let ul = document.getElementById('myList');

    let newLi = document.createElement('li');
    newLi.textContent = input;
    ul.append(newLi);

    document.getElementById('data').value = "";
    
    
};

function removeItem() {
    let item = document.querySelector('li');
    item.addEventListener('click', function() {
        item.style.textDecoration = 'line-through';
        setTimeout(function() {
            item.style.display = 'none';
        }, 1000);
    });
    
};

let button = document.getElementById('button');

button.addEventListener('click', addToList);

removeItem();