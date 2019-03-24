(function($){
    
    "use strict";
    /* Inicializar nosso contador*/
    $('.contar').counterUp({
        time: 1000,
        delay: 10
    });
    
    /* Função para suavisar a mudança ao clicar nos links da homePage*/
    var $doc = $('html,body');
    $('.scroll-page').click(function(){
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },500);
        return false;
        });
})(jQuery);  