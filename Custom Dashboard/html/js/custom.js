

//-----JS for Price Range slider-----


// -------------------------- //

$(document).ready(function(){

    // Header JS Start
    $(".btn-search").click(function(){
        $("#search-modal").fadeIn();
    });
    $(".acount-btn").click(function(){
        $("#accounts-modal").fadeIn();
    });
    $(".close-modal").click(function(){
        $(".modal-box").fadeOut();
    });

    $(".menu-btn").click(function(){
        $(".header-menu .main-menu").slideToggle();
        $(".menu-btn").toggleClass("change-btn");
        $(".header").addClass("header-fixed");
    });
    if($(window).width() <= 991) {
        $(".header-menu .more-categories").click(function(){
            $(".sub-menu").slideToggle("slow");
        });
    }
    // Header JS Start


    // ProfileSidebar JS Start
    if($(window).width() > 1600) {
        $(".profileToggle").click(function(){
            $("body").toggleClass("openSidebar");
        });
    }
    if($(window).width() <= 1600) {
        $(".profileToggle").click(function(){
            $("body").toggleClass("openLeftNav");
        });
    }
    // ProfileSidebar JS End

        AOS.init();

});



// headerFixed JS On wind0w scr0ll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 30) {
        $(".header").addClass("header-fixed");
    }else {
        $(".header").removeClass("header-fixed");
    }
});



// Range slider - Js
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1500,
      max: 10000,
      step: 100,
      values: [ 3000, 6000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
