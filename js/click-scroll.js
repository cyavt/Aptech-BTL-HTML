var sectionArray = [1, 2, 3, 4, 5, 6, 7];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection= $('#' + 'section_' + value).offset().top - 150;
         var docScroll = $(document).scrollTop() + 1;
         

         if ( docScroll >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('#' + 'S' + value).addClass('active');
             $('#' + 'S' + value).removeClass('inactive');
         }
         
     });
     $('#' + 'S' + value).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 90;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 500)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});