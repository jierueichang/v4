/*let links = `
<a href=projects.html>Projects</a>
<a href=resume.html>Resume</a>
<a href=journal.html>Journal</a>
<a href=contact.html>Contact</a>`;*/

let links = `
<a href=projects.html>Projects</a>
<a href=journal.html>Journal</a>
<a href=contact.html>Contact</a>`;

document.getElementById('links').innerHTML = links;
document.getElementById('mobileNav').innerHTML = links;

let burger = document.getElementById('burger');
let mobileNav = document.getElementById('mobileNav');
let closebutton = document.getElementById('closebutton');

burger.onclick = function(){
    mobileNav.style.top = '0%';
    closebutton.style.display = 'block';
    setTimeout(function(){closebutton.style.opacity = '1';},200);
}
closebutton.onclick = function(){
    mobileNav.style.top = '-100%';
    closebutton.style.opacity = '0';
    setTimeout(function(){closebutton.style.display = 'none';},200);
}