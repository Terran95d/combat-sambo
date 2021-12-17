$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger').toggleClass('header__burger--active');
        $('.header__burger-span').toggleClass('header__burger-span--active');
        $('.header__menu').toggleClass('header__menu--active');
        $('.page').toggleClass('page--lock');
    })
})
