// const sideMenu =document.querySelector('#sideMenu');
const navBar =document.querySelector("nav");
const navLinks =document.querySelector("nav ul");

function openMenu(){
    document.getElementById('sideMenu').style.right = '0';
};
function closeMenu(){
   document.getElementById('sideMenu').style.right = '-100%';
};

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
      navBar.classList.add('bg-white','bg-opacity','backdrop-blur-lg','shadow-sm');
    }else{
        navBar.classList.remove('bg-white','bg-opacity','backdrop-blur-lg','shadow-sm');   
    }
})