
if (screen.width > 991){
    document.querySelector('.sub-menu').classList.remove('dropdown-menu');
    }
    

document.querySelector('.dropdown_toggle').addEventListener('click', function(){
    document.querySelector('.sub-menu').classList.toggle('open-dropdown');
})


for(i=0; i<document.querySelectorAll('.tab-item').length;i++){
document.querySelectorAll('.tab-item')[i].addEventListener('click', function(){
    removeactive();
    this.classList.add('active');
})
}


function removeactive(){
    for(i=0; i<document.querySelectorAll('.tab-item').length;i++){
        document.querySelectorAll('.tab-item')[i].classList.remove('active');
    }
}

 