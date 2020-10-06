$(document).ready(function(){
    $('.carousel').carousel({
        interval : 200,
        keyboard: false
    });

    let carouselPaused = false;

    $('.js-carousel-pause').click(function(){
        if(carouselPaused) {
            $('.carousel').carousel('cycle');
            $(this).text("Pause");
        }
        else {
           $('.carousel').carousel('pause');
           $(this).text("Run");
        }

        carouselPaused = !carouselPaused;
    });

    $('.js-modal-launch').click(function(){
        $('#myModal').modal({
            backdrop: 'static'
        });
    })


})