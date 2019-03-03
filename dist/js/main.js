
$(document).ready(function(){
   
    // header height = window height
    $('header').css('height',$(window).innerHeight());


    $('.scrollToWork').on('click',function(){
        $('body,html').animate({
            scrollTop:$('header').css('height')
        },800)
    })
    $('.scrollToTop').on('click',function(){
        $('body,html').animate({
            scrollTop:"0"
        },800)
    })


    //navbar
    $('.nav-item').on('click',function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        $('body,html').animate({
            scrollTop:$('.' + $(this).attr('data-scroll')).offset().top - $('nav').innerHeight()
        },800)
        // console.log($(this).attr('data-scroll'));
        $('.navbar-collapse').removeClass('show')
    })

    $(window).on("scroll",function(){
        if($(window).scrollTop() >= $(window).innerHeight()){
            $("nav").addClass('fixed-top');
        } else {
            $("nav").removeClass('fixed-top');
        }

        // progress-bar .about .bottom
        if($(window).innerWidth() >= 768){
            if($(window).scrollTop() >= $(".about .bottom").offset().top - 300){
                console.log("sssss")
                $('.progress-bar').removeClass('width0')
            }
        } else {
            if($(window).scrollTop() >= $(".about .progress-contain").offset().top - 350){
                $('.progress-bar').removeClass('width0')
            }
        }
       
        var pos = $(window).scrollTop();
        var pos2 = pos + $('nav').outerHeight();
        
    
        // Link Highlighting
        if (pos2 > $('.about').offset().top){ 
            $('.nav-item').removeClass('active');
            $('.nav-item[data-scroll="about"]').addClass('active')
         }
         if (pos2 > $('.portfolio').offset().top){ 
            $('.nav-item').removeClass('active');
            $('.nav-item[data-scroll="portfolio"]').addClass('active')
         }
         if (pos2 > $('.contact').offset().top){ 
            $('.nav-item').removeClass('active');
            $('.nav-item[data-scroll="contact"]').addClass('active')
         }
        
    })


    $('.portfolio ul li').on('click',function(){
        $('.portfolio ul li').removeClass("fliter-active");
        $(this).addClass("fliter-active");
    })
 
   
   
    

})
var filterizd = $('.filtr-container').filterizr({
       //options object
});

// Default options
var options = {
       animationDuration: 0.5, // in seconds
       filter: 'all', // Initial filter
       callbacks: { 
          onFilteringStart: function() { },
          onFilteringEnd: function() { },
          onShufflingStart: function() { },
          onShufflingEnd: function() { },
          onSortingStart: function() { },
          onSortingEnd: function() { }
       },
       controlsSelector: '', // Selector for custom controls
       delay: 0, // Transition delay in ms
       delayMode: 'progressive', // 'progressive' or 'alternate'
       easing: 'ease-out',
       filterOutCss: { // Filtering out animation
          opacity: 0,
          transform: 'scale(0.5)'
       },
       filterInCss: { // Filtering in animation
          opacity: 0,
          transform: 'scale(1)'
       },
       layout: 'sameSize', // See layouts
       multifilterLogicalOperator: 'or',
       selector: '.filtr-container',
       setupControls: true // Should be false if controlsSelector is set 
    } 
    // You can override any of these options and then call...
    var filterizd = $('.filtr-container').filterizr(options);
    // If you have already instantiated your Filterizr then call...
    filterizd.filterizr('setOptions', options);
//# sourceMappingURL=main.js.map
