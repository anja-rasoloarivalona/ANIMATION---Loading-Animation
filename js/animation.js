$( document ).ready(function() {

  $(window).on('load', function(){        
        $('.preloader').addClass('complete');
        $('.loader').delay( 1600 ).fadeOut();
    })
    

    var t1 = new TimelineMax({repeat:0});  
    t1
    .to('.home', .5, {opacity: 1},'+=1.6') 
    .to('.home__details__submodel__inner', .5, {width: '110%'}) 
    .to('.home__details__submodel__inner', .5, {width: '0%', left: '110%', right: '0',  transformOrigin: "left"})
    .to('.home__details__submodel', .5, {opacity: 1, x: '0'}, '-=.5') 


    var t2 = new TimelineMax({repeat:0});  
    t2
    .to('.home', .5, {opacity: 1},'+=1.6') 
    .to('.home__details__model__inner', .5, {width: '30%', transformOrigin: "right"}) 
    .to('.home__details__model__inner', .5, {width: '0%', right: '30%', left: '0',  })
    .to('.home__details__model', .5, {opacity: 1, x: '0'}, '-=.5') 


    var t3 = new TimelineMax({repeat:0});  
    t3
    .to('.home__img', 20, {scale: 1.2},'+=1.6') 
    .to('.home__details__model', 5, {opacity: 0}, '-=16.4') 
    .to('.home__details__submodel', 5, {opacity: 0}, '-=16.4') 
    .to('.home__text', 3, {opacity: 0}, '-=18.4') 
    .to('.home', 1, {x: '-100%'},'-=12.4') 


    


 



    

   

});
