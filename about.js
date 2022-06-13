// ბურგერის ანიმაცია
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
});



// აკორდეონი

let accordition = document.getElementsByClassName('container-accordion');

for (let i = 0; i < accordition.length; i++) {
    accordition[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


// ფილტრი

let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItems = [];

function getUsers() {
    fetch('https://reqres.in/api/users?page=1', {
        method: 'GET',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        responseData.data.forEach(item => {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.innerHTML = `${item.first_name} ${item.last_name}`;

            let img = document.createElement('img');
            img.src = item.avatar;
            li.appendChild(img);
            li.appendChild(span);
            listItems.push(li);


            result.appendChild(li);
        });
    })
    .catch(function(e) {
        console.log(e);
    })
}
getUsers();


function filterData(searchItem) {
    listItems.forEach( (item) => {
        console.log(item);
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase() ) ) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

filter.addEventListener('input', (event) => filterData(event.target.value));






// filter button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  // localstorage

// let counter = localStorage.getItem('count');

// let newValue;

// if(!counter) {
//     newValue = 1;
// }else {
//     newValue = parseInt(counter) + 1;
// }

// localStorage.setItem('count', newValue);





// sessionstorage

let counter = sessionStorage.getItem('count');

let newValue;

if(!counter) {
    newValue = 1;
}else {
    newValue = parseInt(counter) + 1;
}

sessionStorage.setItem('count', newValue);