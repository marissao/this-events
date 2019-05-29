//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var menuClass = document.getElementsByClassName('navi');
// console.log(menuClass)

for(var i = 0; i<menuClass.length; i++){
    menuClass[i].addEventListener('mouseover', showNav);
}

function showNav(){
    // console.log(this.innerHTML)
    var nav = this.querySelector('.inner');
    if(nav.style.display === 'block'){
        nav.style.display = 'none';
    }else{
        nav.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restaurantClass = document.getElementsByClassName('name');
// console.log(restaurantClass)

for(var i = 0; i<restaurantClass.length; i++){
    restaurantClass[i].addEventListener('click', popMenu);
}

function popMenu(){
    var secretMenu = this.querySelector('.menu');
    if(secretMenu.style.display === 'block'){
        secretMenu.style.display = 'none';
    }else{
        secretMenu.style.display = 'block';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbClass = document.getElementsByClassName('thumb');
// console.log(thumbClass)

for(var i = 0; i<thumbClass.length; i++){
    thumbClass[i].addEventListener('click', numDislikes);
    var numBox = document.createElement('div');
    numBox.className = 'thumbsDown';
    thumbClass[i].appendChild(numBox);
}

function numDislikes(){
    // console.log('test')
    var dislikes = this.querySelector('.thumbsDown');
    // console.log(dislikes)
    dislikes.innerHTML++;
}
