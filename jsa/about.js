webpackJsonp([12], {
    DZVS: function(e, t) {},
    xct7: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        o("CRba");
        var r = o("gsqX"),
        n = (o.n(r), o("mgS3")),
        i = (o.n(n), o("DZVS"));
        o.n(i),
        new Swiper(".swiper .swiper-container", {
            direction: "vertical",
            loop: !0,
            nextButton: ".swiper .swiper-button-next",
            prevButton: ".swiper .swiper-button-prev"
        }),
        new Swiper(".about-history-swiper .swiper-container", {
            direction: "horizontal",
            loop: !0,
            nextButton: ".about-history-swiper .swiper-button-next",
            prevButton: ".about-history-swiper .swiper-button-prev"
        }),
        new Swiper(".about-honor-swiper .swiper-container", {
            direction: "horizontal",
            loop: !0,
            slidesPerView: 4,
            spaceBetween: 20,
            nextButton: ".about-honor-swiper .swiper-button-next",
            prevButton: ".about-honor-swiper .swiper-button-prev"
        })
    }
},
["xct7"]);