$(function(){
    headerHeiht = $('.header').innerHeight();
    
    intro = document.querySelector('.intro');
    intro.style.paddingTop = headerHeiht;

    bricks = document.querySelectorAll('.brick-click');
    bricks.forEach(function(item){
        item.addEventListener('click' , () => {
            $(item).toggleClass('opacity');
            
        });
        
      });

    let header = $('#header');
    let introH = $('#intro').innerHeight();
    let scrollPos = $(window).scrollTop();
    let hO = $('#h__O');
    $(window).on('scroll load resize' , function(){
        let scrollPos = $(this).scrollTop();
        let introH = $('#intro').innerHeight();
        if(scrollPos > introH){
            header.addClass('fixed');          
            
        }else{
            header.removeClass('fixed');
        }
    
    });
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

        $('.nav').removeClass('nav-show');
        $('.nav-svg').removeClass('nav-show');
        document.body.style.overflowY = "scroll";
    });

    $('.burger').on('click' , function func(event){
        event.preventDefault();
        $('.nav').toggleClass('nav-show');
        
        let obj1 = document.querySelector('.nav');
        let dsp = window.getComputedStyle(obj1, null).getPropertyValue("display");
        console.log(dsp);
        
        if(dsp == 'flex' & window.innerWidth <= 421){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "scroll";
            
        }
        let headerH = $('.header__inner').innerHeight();
        let count = window.innerHeight - headerH;        
        // document.getElementById('nav').style.height = `${count}`;
    });

    $(window).resize(function() {
        bricksHover = document.querySelectorAll('brick-hover');

        $('.nav').removeClass('nav-show');
        document.body.style.overflowY = "scroll";

    });

});