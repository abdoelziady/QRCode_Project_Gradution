
$(document).ready(function () {
// =============================================
// =============================================
$(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height())
    });
// =============================================
// =============================================
// Loader
$(window).on("load",function () {
    $(".loader-wrapper").fadeOut("slow")
});
//
// =============================================
// =============================================
// Button Scroll TO
$(".header .Header_scroll").on("click", function () {
    $("html ,body").animate({
        scrollTop: $("#" + $(this).attr("data-value")).offset().top - 50
    }, 500)
});
// =============================================
// =============================================
// Toggler Navbar Button
// =============================================
$(".header .navbar-toggler span i").on("click", function () {
    $(this).toggleClass("fa-times fa-bars");
    });
// =============================================
// TopButton
// =============================================
// =============================================
var topbtn = $(".topbtn");
$(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
         topbtn.fadeIn(500);
    } else {
        topbtn.fadeOut(500);
    }
});
// =============================================
    topbtn.on("click", function () {
        $("html ,body").animate({
            scrollTop: 0
        }, 200)
    });
// =============================================
// =============================================
// Team
$(function(){
    $(".Team_content").owlCarousel({
        items:3,
     loop: true,
     margin: 30,
     animateIn: true,
     autoplay: true,
         responsive:{
     0:{
         items:1
     },
     670:{
        items:2
    },
             760:{
         items:2
     },
     1000:{
         items:3
     }
         }
 
    });
});
// =============================================
// =============================================
// Navbar Last Item Menu 
$(".navbar li .menu a").on("click", function () {
       $("html ,body").animate({
           scrollTop: $("#" + $(this).attr("data-value")).offset().top - 50
       }, 700)
});
// =============================================
// =============================================
// QR Code Page
$(".step_four .step4form .choose .custom-select").click(function(){
    $(".step_four .step4form .choose span .seleopt")
    .text($(".step_four .step4form .choose .custom-select").val())
});
// =============================================
$(".step_two_last .step_two_last_card .card .card-body span").click(function(){
$(".step_two_last .step_two_last_card .card .card-body span").removeClass("varspan");
$(this).toggleClass("varspan");
$(".step_two_last .step_two_last_card .card:nth-of-type(2) .card-header button span")
.text($(this).attr("data-value"));
});
// =============================================
$(".step_two_last .step_two_last_card .card .card-body img").click(function(){
    $(".step_two_last .step_two_last_card .card:nth-of-type(3) .card-body img").removeClass("varspan");
    $(this).toggleClass("varspan");
    $(".step_two_last .step_two_last_card .card:nth-of-type(3) .card-header button span")
.text($(this).attr("data-value2"));
});
// =============================================
$(".step_two_last .step_two_last_card .card:nth-of-type(1) .card-body img").click(function(){
    $(".step_two_last .step_two_last_card .card .card-body img").removeClass("varspan");
    $(this).toggleClass("varspan");
    $(".step_two_last .step_two_last_card .card:nth-of-type(1) .card-header button span")
.text($(this).attr("data-value3"));
});
// =======================================================
$(".Two_Slider_Blue .btndown .fa-angle-double-down").on("click", function () {
    $("html ,body").animate({
        scrollTop: $("#" + $(".btndown").attr("data-value")).offset().top - 350
    }, 600)
});
// ======================================================

// =====================================================================
});