let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


//sticky navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

        function imgSlider(anything){
            document.querySelector('.logo').src = anything;
        }
        
        function imgSlider2(anything){
            document.querySelector('.History').src = anything;
        } 
    
        function changeCircleColor(color){
            const circle = document.querySelector('.circle');
            circle.style.background = color;
        }

        function toggleMenu(){
            var menuToggle =document.querySelector('.toggle');
            var navigation =document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }

