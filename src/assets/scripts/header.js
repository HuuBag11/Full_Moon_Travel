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
})