(function(window, document) {
    var header = document.querySelector('.navbars');
    if (!header) {            
        return;
    }           
    var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollDistance < 50) {
        header.classList.remove('scrolled');
    }
    document.addEventListener('scroll', function() {
        scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollDistance > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
})(this, this.document);

$(function() {
    $('.carousel').carouFredSel({
        responsive: true,
        items: {
            visible: 1,
            width: 900,
            height: 600
        },
        scroll: {
            duration: 500,
            timeoutDuration: 8500,
            fx: 'cover-fade',
            easing: 'quadratic'
        },
        pagination: '.pager'
    });
});