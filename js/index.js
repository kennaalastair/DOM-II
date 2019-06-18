// Your code goes here
//creating variable for nav
const nav = document.querySelector('.nav-container nav');
//creating an event listener for a click event
nav.addEventListener('dblclick', event => {
    //delay textContent update by 3 seconds
    setTimeout(function () {
            //console logging that the event target was clicked, what target was clicked, and screen x and y positions
            console.log('clicked: textContent update delay 3 seconds,', event.target.textContent, event.screenX, event.screenY);
            //creating variable for the h2 header title
            const title = document.querySelector('header h2');
            //when clicked, the h2 textContent will be updated to the event target's(nav link that was clicked on) textContent
            title.textContent = event.target.textContent;
    }, 2000);
});

//creating variable for header image of bus
const busImg = document.querySelector('header img');
// creating an event listener for mouseover
busImg.addEventListener('mouseenter', event => {
    event.target.style.border = '5px solid pink';
    // event.target.addEventListener('focus', (event) => {
    //     event.target.style.border = '5px solid orange';
    //     console.log(`Image is focused`, event.target);
    // });
    console.log(`Image has been entered`, event.target, event.screenX, event.screenY);
})

//create variable for button
const button = document.querySelectorAll('.destination .btn');
//creating a forEach method to loop through all .btn classes in .destination classes
button.forEach((btn) => {
    //creating an event listener for a mouseover event
    btn.addEventListener('mouseover', event => {
        //conosle logging that the event target has been moused over, what btn was clicked, and screen x and y positions
        console.log('moused over button: orange', event.target, event.screenX, event.screenY);
        //updating the event target's background color to orange
        event.target.style.backgroundColor = 'orange';
        //creating a timeout function to change background color back to the color white on hover after .5 seconds
        setTimeout(function () {
            event.target.style.backgroundColor = "";
        }, 500);
    }) 
});

//create variable for resizeNumber to start at zero
let count = 0;
//create an event listener for window resizing
window.addEventListener('resize', event => {
    //create variable that adds one to count everytime window is resized
    let resizeNumber = count += 1;
    //console log how many times the window has been resized and event target
    console.log(`Window has been resized ${resizeNumber} times.`, event.target);
})