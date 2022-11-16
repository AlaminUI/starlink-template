
if (screen.width > 991){
    document.querySelector('.sub-menu').classList.remove('dropdown-menu');
    }
    

document.querySelector('.dropdown_toggle').addEventListener('click', function(){
    document.querySelector('.sub-menu').classList.toggle('open-dropdown');
})