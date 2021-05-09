const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const withSublinks = document.querySelectorAll('.link-box.has-sublinks > .link');

function handleMobileMenu(e){
    if (!header.classList.contains("open")){
        header.classList.add("open");
        body.classList.add("no-scroll");
    } else {
        header.classList.remove("open");
        body.classList.remove("no-scroll");
    }
}

function handleLinkWithSubClick(e){
    let parent;
    if (e.target.classList.contains("chevron")){
        parent = e.target.parentElement.parentElement; // clicked chevron 
    } else{
        parent = e.target.parentElement; // clicked link 
    }
    
    if (!parent.classList.contains("open")){
        parent.classList.add("open");
    } else {
        parent.classList.remove("open");
    }
}

hamburgerBtn.addEventListener('click', handleMobileMenu);

// add click event listener for links with sublinks
withSublinks.forEach(link => {
    link.addEventListener('click', handleLinkWithSubClick);
});