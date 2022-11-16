// owl carousel
// hero
$('.owl-heroSlide').owlCarousel({
        loop: false,
        nav: false,
        items: 1,
    })
    // category
$('.owl-categorySlide').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1367: {
                margin: 15,
            }
        }
    })
    // product
$('.owl-productSlide').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        items: 5,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 5
            },
            1367: {
                margin: 15,
            }
        }
    })
    // promo
$('.owl-promoSlide').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        items: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2
            },
            1367: {
                margin: 15,
            }
        }
    })
    // product detail pics
$('.owl-productDetailImageSlide').owlCarousel({
    loop: false,
    margin: 5,
    nav: false,
    items: 4,
    dots: false,
    responsive: {
        426: {
            margin: 10,
        }
    }
})