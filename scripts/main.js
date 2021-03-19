$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 75) {
            $('.header').addClass('scroll')
        } else {
            $('.header').removeClass('scroll')
        }
    });
    
    $('.header__menu-icon').click(function(event){
        $('.header__menu-icon').toggleClass('active');
        $('.modal').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu__close-button, .link-from-menu, .modal').click(function(e){
        $('.header__menu-icon').removeClass('active');
        $('.modal').removeClass('active');
        $('.menu').removeClass('active');
        $('body').removeClass('lock');
    });
    
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, left: rect.left + scrollLeft
            }
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 500);

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }
});