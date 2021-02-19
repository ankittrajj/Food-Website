const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(() => {
    const icon = document.querySelector('.section-1-icons .change-icon');
    i++;
    icon.classList.remove('change-icon');


    if(i>icons.length){
        icons[0].classList.add('change-icon');
        i=1;
    }
    else{
        icon.nextElementSibling.classList.add('change-icon');

    }
    
    
    

}, 1000);