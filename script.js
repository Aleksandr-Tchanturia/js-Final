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

// სლაიდი

let arrowleft =  document.getElementById('left-arrow');
let arrowright = document.getElementById('right-arrow');
let sliderContent = document.getElementById('slider-cont');
let dotslist = document.getElementsByClassName('dot');

let data = [
    {
        id: 1,
        imageUrl: 'https://www.mensjournal.com/wp-content/uploads/2018/04/properbarbershop.jpg?quality=86&strip=all',
        title: '',
        url: 'https://www.youtube.com/'
    },

    {
        id: 2,
        imageUrl: 'https://media.istockphoto.com/photos/barber-shop-picture-id1096942614?k=20&m=1096942614&s=612x612&w=0&h=qHaM1WQ212tgDLs3gWzyCO7dIY-RXvVXYaqkfcPdYxE=',
        title: '',
        url: 'https://www.youtube.com/'
    },

    {
        id: 3,
        imageUrl: 'https://www.salondeauville.com/wp-content/uploads/2018/07/montreal-barber-shop-haircuts-and-shaves-for-the-modern-man.jpg',
        title: '',
        url: 'https://www.youtube.com/'
    },
    {
        id: 4,
        imageUrl: 'https://bestlifeonline.com/wp-content/uploads/sites/3/2018/09/barber-man-getting-shave.jpg?quality=82&strip=all',
        title: '',
        url: 'https://www.youtube.com/'
    }
]


function aTag(item){
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2(item){
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);
    

    return tagtitle;
}

function createImgtag(item){
    // let tagimage = document.createElement('div');
    // tagimage.style.backgroundImage = url($ {item.imageUrl});
    // tagimage.setAttribute('class', 'slidebg');

    let tagimage = document.createElement('img');
    tagimage.setAttribute('src', item.imageUrl);
    tagimage.setAttribute('alt', item.title);

    return tagimage;
}

let sliderIndex = 0;

function createDots(item){
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (elem) => { 
         let dotelem = document.createElement('div');
         dotelem.setAttribute('class', 'dot');
         dotelem.setAttribute('data-id', elem.id-1);

         dotelem.onclick = function(event) {
             let id =  event.target.getAttribute('data-id');
             sliderIndex = id;
             setSlide();
         }

         dots.appendChild(dotelem);
    });
    return dots;
}

function dotactive(){
    dotslist[sliderIndex].classList.add('active');
}

function setSlide(){
    sliderContent.innerHTML = ' ';
    let slideItem = aTag(data[sliderIndex]);
    let h2Tag =  createH2 (data[sliderIndex]);
    let imgtag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgtag);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    dotactive();
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowleft.addEventListener('click', arrowleftClick);
arrowright.addEventListener('click', arrowRightClick);


setSlide();







let counter = sessionStorage.getItem('count');

let newValue;

if(!counter) {
    newValue = 1;
}else {
    newValue = parseInt(counter) + 1;
}

sessionStorage.setItem('count', newValue);

