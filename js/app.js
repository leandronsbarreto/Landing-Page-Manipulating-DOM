/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
/**
 * Define Global Variables
 * 
 */
 const segments = document.querySelectorAll('section');
 const segmentArray = Array.from(segments);
 /*const segmentArray transforms the node list of the querySelectorAll() 
 method into an array*/
 /*Build the nav*/
 /*1st - create unordered list*/
 const navBar = document.querySelector('nav');
 const createUl = navBar
     .appendChild(document.createElement('ul'));
 const classUl = createUl.classList.add('nav-list');
 /*2nd - create new array from array of sections (see const segmentArray). 
 New array contains list items based on the number of sections*/
 const navItems = segmentArray.map((singlesection) => {
     return `<li>
                 <a href = "#${singlesection.id}" data-nav="${singlesection.id}" class ="nav-link">${singlesection.dataset.nav}</a>
             </li>`
 });
 const uList = document.querySelector('ul');
 /*Following line sets the HTML content inside ul element*/
 uList.innerHTML = navItems.join('|');
 /*Event listener of the function scrolling.*/
 uList.addEventListener('click', scrolling);
 
 function scrolling(element) {
     element.preventDefault();
     if (element.target.dataset.nav) {
         document.getElementById(`${element.target.dataset.nav}`)
             .scrollIntoView({
                 behavior: 'smooth'
             })
     }
 }
 /*Event listener of the function action. This function highlights 
 the nav item that is linked with the section which is visible in 
 the viewport*/
 document.addEventListener('scroll', action);
 
 function action() {
     segments.forEach((section) => {
         const rect = section.getBoundingClientRect();
         const activeLink = uList.querySelector(
             `[data-nav=${section.id}]`);
         if (rect.top <= 80 && rect.bottom >= 80) {
             section.classList.add('your-active-class');
             activeLink.classList.add('your-active-class');
         } else {
             section.classList.remove('your-active-class');
             activeLink.classList.remove('your-active-class');
         }
     });
 }
 /*Event listener of the function message pop. This function verifies
 whether the input is valid and confirms the user we have received
 a request*/
 document.querySelector("#submitbutton")
     .addEventListener("click", messagepop);
 
 function messagepop() {
     var myMessage = document.getElementById("submittedname")
         .value;
     var myEmail = document.getElementById("submittedaddress")
         .value;
     var myEmailAt = document.getElementById("submittedaddress")
         .value.indexOf("@");
     var myEmailDot = document.getElementById("submittedaddress")
         .value.indexOf(".");
     if (myEmail === "" || myMessage === "") {
         alert(
             "Please insert both your name and e-mail address to sign up our weekly newsletter."
             );
     } else if (myEmailAt == -1 || myEmailDot == -1) {
         alert("Please insert a valid e-mail address (name@example.com).");
     } else {
         alert("Dear " + myMessage + ", " +
             "thank you for your interest in our content. Every week we will send to your e-mail address " +
             "(" + myEmail + ")" + " new information about us.");
     }
 }