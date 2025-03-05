

const sideMenu =document.querySelector('#sideMenu');
// const navBar = document.getElementById("nav");
// const navLinks = document.getElementById("ul");

// window.addEventListener('scroll', () => {
//     console.log(`Scroll position: ${window.scrollY}`);

//     if (window.scrollY > 50) {
//         navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
//         navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
//     } else {
//         navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
//         navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
//     }
// });


function openMenu(){
    document.getElementById('sideMenu').style.right = '0';
};
function closeMenu(){
   document.getElementById('sideMenu').style.right = '-100%';
};

