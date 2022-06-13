// form validation
document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;


    //usename
    let username = document.getElementById('namelname').value;
    if (username.length < 2 || username == ""){
        errors.username = 'please enter 2 or more character';
    } 


    // password
    let password = document.getElementById('passname').value;
    let password2 = document.getElementById('passname2').value;

    if (password != password2){
        errors.password = 'passwords do not match';
    }

    // checkbox and cookies
    let checkbox = document.getElementById('agreecheckbox');
    if (checkbox.checked == false){
        errors.notagree = 'you must agree terms';
    }

    if (checkbox.checked) {
                let namelname = document.getElementById('namelname').value;
                Cookies.set('saved_fname', namelname);
            } else {
                Cookies.remove('saved_fname');
            }
        
        
           

            let savedFirstName = Cookies.get('namelname');
         if (savedFirstName) {
      document.getElementById('namelname').value = savedFirstName;
      document.getElementById('agreecheckbox').checked = true;
      
    

    }


    // radio
    let age = false;

    form.querySelectorAll('.asakii').forEach(event => {
        if (event.checked){
            age = true;
        }
    });

    if (!age){
        errors.age = 'select your age';
    }

    // console.log(errors);


    form.querySelectorAll('.error-text').forEach(item => {
                item.textContent = '';
            })
        
            for (let item in errors) {
                let errorPlaceholder = document.getElementById('error_' + item);
        
                if (errorPlaceholder) {
                    errorPlaceholder.textContent = errors[item];
                }
            }
        
            if(Object.keys(errors).length == 0) {
                form.submit();
            }

            
});

let password = document.getElementById('passname');
let toggleIcon = document.getElementById('toggle-icon');


toggleIcon.addEventListener('click', function() {
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        toggleIcon.classList.remove('fa-eye-slash');
        password.setAttribute('type', 'password');
    }
});

let passw = document.getElementById('passname2');
let togglee = document.getElementById('toggle-icon2');

togglee.addEventListener('click', function(){
    if (passw.type == 'password') {
        passw.setAttribute('type', 'text');
        togglee.classList.add('fa-eye-slash');
    } else {
        togglee.classList.remove('fa-eye-slash');
        passw.setAttribute('type', 'password');
    }
});

// burger animation
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
});


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

