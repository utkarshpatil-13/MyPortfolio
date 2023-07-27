let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

// remove everyone's active link and only keep the active link of the clicked one
let opentab = (tabname) =>{
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}


let sidemenu = document.getElementById('sidemenu');

// setting up the hamburger functions
let openmenu = () =>{
    sidemenu.style.right = 0; 
};
let closemenu = () =>{
    sidemenu.style.right = "-200px"; 
};