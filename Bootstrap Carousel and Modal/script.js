$(document).ready(function(){
    //we write everything here

    $('#myCarousel').carousel({
        interval: 330
    });

    $('#carouselControl').click(function(){
        
        if( $('#carouselControl').hasClass('paused') ){
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        }
        else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });


    $('#modalLauncher').click(function(){
        $('#exampleModal').modal({
            backdrop: false
        });
    });
});