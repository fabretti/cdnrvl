$('.owl-partners').owlCarousel({
    margin: 80,
    nav: true,
    navigation: true,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,
    responsive: {
        0: {
            items: 1
        },
        620: {
            items: 3
        },
        1240: {
            items: 6
        },
    }
})
$('.owl-carousel').owlCarousel({
    margin: 0,
    nav: true,
    navigation: true,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,
    responsive: {
        0: {
            items: 1
        },
    }
})