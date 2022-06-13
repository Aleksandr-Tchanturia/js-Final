// burger animation
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
});






// serveridan infoo
let currentPage = 1;
let totalPages;

function getUser(gverdi) {
    fetch('https://reqres.in/api/users?page=' + gverdi, {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status !== 200) {
            throw 'error';
        }
        return response.json();
    })
    .then(function(responseData) {

        var fragment = document.createDocumentFragment();

        responseData.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.email + ' ' + element.first_name;

            fragment.appendChild(li);
        });
        document.getElementById('user-list').innerHTML = ' ';
        document.getElementById('user-list').appendChild(fragment);

        totalPages = responseData.total_pages;
    })
    .catch(function(error) {
       
        if (error == 404) {
            let p = document.createElement('p');
            p.textContent = 'Page not Found';

            document.getElementById('api').appendChild(p)
        } else {
            let p = document.createElement('p');
            p.textContent = 'Server Error';

            document.getElementById('api').appendChild(p)
        }

    })
}


document.getElementById('prev').addEventListener('click', function() {
    if (currentPage === 1){
        return;
    }
    currentPage -= 1;
    getUser(currentPage);
})


document.getElementById('next').addEventListener('click', function() {
    if(currentPage === totalPages){
        return;
    }
    currentPage += 1;
    getUser(currentPage);
})

getUser(currentPage);



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
