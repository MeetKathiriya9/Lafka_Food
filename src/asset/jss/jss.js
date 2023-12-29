const navres = document.querySelector('.nav-res');
const Navmenu = document.querySelector('.Nav-menu');
const navitem = document.querySelectorAll(".nav-item");


    navres.addEventListener('click', () =>{
        navres.classList.toggle('active');
        Navmenu.classList.toggle('active');
    });

    navitem.forEach(n => n.addEventListener('click', () => {
        navres.classList.remove('active');
        Navmenu.classList.remove('active');
    }));
