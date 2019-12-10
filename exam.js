$('.header-slider').slick(
    { dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        fade: true,
    });

$('.news-slider').slick(
    { dots: true,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5px'
    }); 
    $('.gallery__grid').masonry({
          itemSelector: '.slide',
          columnWidth: 280})


$(".menu-button1").on('click',function(){('<a href=".project"</a>');})

// $('a#AddChampion').on('click',function(){
//     $('#ChampionInput').append(
//     '<a href="#" class="remove">Remove</a>\
//      <br>\
