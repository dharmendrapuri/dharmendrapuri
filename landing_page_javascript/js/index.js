// DOM Eleements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
wish = document.getElementById('wish');
// Show Time function
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
// Set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';
// 12 Hour format
    hour = hour % 12 || 12;

// output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}
//ADD Zeros on second
function addZero(n){
    return(parseInt(n,10) < 10 ? '0' : '') + n;
}

//Functions to change the background based on AM or PM
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('../landing_page_javascript/img/morning.jpeg')";
        greeting.textContent = 'Good Morning';


    }
    else if(hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url('../landing_page_javascript/img/afternoon.jpeg')";
        greeting.textContent = 'Good Afternoon';

    }
    else{
        //Eveningsss
        document.body.style.backgroundImage = "url('../landing_page_javascript/img/evening.jpeg')";
        greeting.textContent = 'Good Evening';
       
    }
}



//Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//Set wish
function setWish(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('wish', e.target.innerText);
            wish.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get wish
function getwish(){
    if(localStorage.getItem('wish') === null){
        wish.textContent = '[Enter Your wish]';
    }
    else{
        wish.textContent = localStorage.getItem('wish');
    }
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
wish.addEventListener('keypress',setWish);
wish.addEventListener('blur',setWish);
 //Run
 showTime();
setBgGreet();
getName();
getwish();


