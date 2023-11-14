$(document).ready(function(){
    // open sub menu
    function openSubmenu(){
        $("#header .menu .menu-item.has-children > .sub-menu .menu-item a").on("click", function(e){
            e.preventDefault();
            $(this).addClass("active");
            $(this).closest(".menu-item").siblings().children(".menu-link").removeClass("active");
        })
    }
    openSubmenu();

    function splideComment(){
        if ($(".splide_comment").length) {
            new Splide(".splide_comment", {
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
            }).mount();
        }
    }
    splideComment();
})