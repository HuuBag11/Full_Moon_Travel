"use strict";
$ = jQuery;

$(document).ready(function () {
    openSubmenu();
    splideGallery();
    splideComment();
    datePicker();
    dropdownFrom();
    changeItemActive();
});

// open sub menu desktop
function openSubmenu() {
    $("#header .menu .menu-item.has-children").click(function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
        }else{
            $("#header .menu .menu-item.has-children").removeClass('open');
            $(this).addClass('open');
        }
    })
    $("#header .menu .menu-item.has-children > .sub-menu .menu-item.left a").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

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

function dropdownFrom(){
    // open dropdown
    $('.box_click').on('click',function (e) {
        $(this).toggleClass('is-active');
    });
    // active input radio button
    $('input[type="radio"]').on('change',function (e) {
        $(this).parents('.list').find('li').removeClass('active');
        $(this).parents('li').toggleClass('active');
        setTimeout(() => {
            $(this).parents('.box_click').removeClass('is-active');
            if($(this).parents('.box_click').hasClass('search-form__content__form__price')){
                 $('input#datepicker').data('daterangepicker').show();
            }else{
                $('.search-form__content__form__price.box_click').addClass('is-active');
            }
        }, 500);
    });
    $('#search_button').on('click', function(e){
        e.preventDefault();
        window.location.href = 'src/html/search.html';    
    })
}

// toggle open popup menu mobile
function toggleOpenPopup(event) {
    event.preventDefault();
    $("header .backdrop").toggleClass("d-none");
    $("header ul.menu").toggleClass("open");
}

// menu mobile
if(screen.width < 769){
    $("header .menu-item.has-children .sub-menu").slideUp();

    $("header .menu-item.has-children").on("click", function(e){
        e.preventDefault();
        console.log($(this));
        $(this).children(".sub-menu").slideToggle();
    })
}

// toggle class active
function toggleClassActive(event) {
    event.preventDefault();

    let thisItem = $(event.target);
    //thisItem.toggleClass("active");

    thisItem.siblings(".list-highlight").slideToggle();
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

    if($('input#single-date, input#departure').length) {
        $('input#single-date, input#departure').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'),10)
        });
    }
}

function changeItemActive(){
    $('.item-checkbox').on('click', function(){
        $(this).parents('.list-checkbox').find('.item-checkbox').removeClass('is-active');
        $(this).addClass('is-active');
        let data = $(this).text();
        $(this).parents('.tour-type').find('.type').text(data);
    });
   
}

$(document).on('click', function(e) {
    if (!$(e.target).closest("#header .menu").length) {
        $("#header .menu .menu-item.has-children").removeClass('open');
    }
    if (!$(e.target).closest(".box_click").length) {
        $(".box_click").removeClass('is-active');
    }
});