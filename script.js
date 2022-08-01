const sideMenu = document.querySelector('.aside');
const menuBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-btn');
const toggle = document.querySelector('.toggle');
const container = document.querySelector('.container');
const sun = document.querySelector('.fa-sun-o');
const dark = document.querySelector('.fa-sun-o');

//open
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';

        })
//close
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
            
        })

//change theme
toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');

    sun.classList.toggle('active')
})
