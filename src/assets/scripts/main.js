"use strict";
$ = jQuery;

$(document).ready(function () {
    openSubmenu();
    splideGallery();
    splideComment();
    datePicker();
});

// open sub menu desktop
function openSubmenu() {
    $("#header .menu .menu-item.has-children > .sub-menu .menu-item.left a").on("click", function (e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        //$(this).closest(".menu-item.has-children").addClass("active");

        let thisDataTab = $(this).data("tab");
        let contentTab = $("#header .menu .menu-item.has-children > .sub-menu .menu-item.right .menu-tab");

        contentTab.each(function () {
            let thisContentTab = $(this);
            if (thisContentTab.data("tab") == thisDataTab) {
                thisContentTab.addClass("active");
                thisContentTab.siblings().removeClass("active");
            }
        })
    })
}

// toggle open popup menu mobile
function toggleOpenPopup(event) {
    event.preventDefault();
    $("header .backdrop").toggleClass("d-none");
    $("header ul.menu").toggleClass("open");
}

// toggle class active
function toggleClassActive(event) {
    event.preventDefault();

    let thisItem = $(event.target);
    thisItem.toggleClass("active");
}

function splideGallery() {
    if ($(".splide__gallery").length) {

        var splideGallery = new Splide(".splide__gallery", {
            type: 'slide',
            perPage: 1,
            perMove: 1,
            arrows: true,
            pagination: false,
        });
        splideGallery.mount();
    }
}

function splideComment() {
    if ($(".splide_comment").length) {
        var splideComment = new Splide(".splide_comment", {
            type: 'slide',
            perPage: 3,
            perMove: 1,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: "30px",
            breakpoints: {
                480: {
                    perPage: 1,
                    arrows: false,
                }
            }
        });
        splideComment.mount();
    }
}

function datePicker() {
    if ($('input#datepicker').length) {
        $('input#datepicker').daterangepicker({
            opens: 'left'
        });
    }

    if($('input#single-date').length) {
        $('input#single-date').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'),10)
          });
    }
}