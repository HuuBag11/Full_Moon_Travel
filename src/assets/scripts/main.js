"use strict";
$ = jQuery;

$(document).ready(function(){
    openSubmenu();
    splideGallery();
    splideComment();
    console.log('hello world');
});

 // open sub menu desktop
function openSubmenu(){
    // $("header .menu-item.has-children").on("click", function(e){
    //     e.preventDefault();
    //     $(this).toggleClass("active");
    //     $(this).siblings(".menu-item.has-children").removeClass("active");

    //     if($(this).hasClass("active")){
    //         //window.location.href = $(this).children("a").attr("href");
    //     }

    // })

    $("#header .menu .menu-item.has-children > .sub-menu .menu-item.left a").on("click", function(e){
        e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        //$(this).closest(".menu-item.has-children").addClass("active");

        let thisDataTab = $(this).data("tab");
        let contentTab = $("#header .menu .menu-item.has-children > .sub-menu .menu-item.right .menu-tab");

        contentTab.each(function(){
            let thisContentTab = $(this);
            if(thisContentTab.data("tab") == thisDataTab){
                thisContentTab.addClass("active");
                thisContentTab.siblings().removeClass("active");
            }
        })
    })
}

// function onClickOutsideHeader() {
//     const activeElement = document.querySelector('header .menu-item.has-children.active');
//     const selectDropdownContent = document.querySelector('.select-dropdown__content#header .menu .menu-item.has-children > .sub-menu');
  
//     if (activeElement && selectDropdownContent) {
//       document.addEventListener('click', event => {
//         if (!activeElement.contains(event.target) && !selectDropdownContent.contains(event.target)) {
//           $("header .menu-item.has-children").removeClass("active");
//         }
//       });
//     }
// }

// toggle open popup menu mobile
function toggleOpenPopup(event){
    event.preventDefault();
    $("header .backdrop").toggleClass("d-none");
    $("header ul.menu").toggleClass("open");
}

// toggle class active
function toggleClassActive(event){
    event.preventDefault();

    let thisItem = $(event.target);
    thisItem.toggleClass("active");
}
    
function splideGallery(){
    console.log('================================');
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

function splideComment(){
    if ($(".splide_comment").length) {
        var splideComment = new Splide(".splide_comment", {
            type: 'slide',
            perPage: 3,
            perMove: 1,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: "30px",
            breakpoints:{
                480: {
                    perPage: 1,
                    arrows: false,
                }
            }
        });
        splideComment.mount();
    }
}