$(document).ready(function(){

    // сворачивает навигационное меню при переходе по ссылке
    $("nav a").on('click',function(){
        $('#menu_check').prop('checked',false);
    });

    // запрещает прокрутку страницы, когда открыто навигационное меню
    $("#menu_check").on('click',function(){
        $('body').toggleClass('scroll');
        
    });

    $(".accordion a").on('click',function(){
        $('body').removeClass('scroll');
    });
    
});





