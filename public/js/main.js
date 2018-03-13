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