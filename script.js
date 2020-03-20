var BiroliroPage = (function(){

    $(document).ready(function(){

        MouseMovement();
    });

    function MouseMovement(){
        var Xmax = $(window).width();
        var YMax = $(window).height();

        $(window).on('mousemove', function(e){

            let MX = e.screenX;
            let MY = (e.screenY - 103);            

            let Xpercent = MX * 100 / Xmax;
            let Ypercent = MY * 100 / YMax;
                
            $('.eyes').css('transform', `translate(${Xpercent / 5}px, ${Ypercent / 5}px)`);                              

            $('.mask').css('transform', `translate(${Xpercent}px, ${Ypercent}px)`);                             

        });
    }

})();