var swContainerHeight;

var mainSwiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    effect: "fade",
    speed: 800,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    // }
});

var swContainer = document.querySelector("#main .swiper-container");
swContainer.style.height = innerHeight;

window.addEventListener("resize", ev => {
    swContainerHeight = swContainer.clientHeight;
    swContainer.style.height = innerHeight;

    if (swContainerHeight !== innerHeight) {
        window.location = "/";
    }
});
