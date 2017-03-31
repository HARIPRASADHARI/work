(function() {


    $(document).ready(function() {



        // Menu Add Class Left
        $("#hamburger-icon").click(function() {
            $(".slide-menu").toggleClass("slide-left");
        });

        //  Menu Add Class Close        
        $('.slide-close-button button, .mdl-layout__obfuscator').click(function() {
            $(".slide-menu").removeClass("slide-left");
        });
        // Menu Dropdown menu active
        $(".dropdownmenu").click(function() {
            $(".sub-menu").toggleClass("active");
        });
        // Add scrollspy to <body>
        $('body').scrollspy({ target: ".navbar", offset: 50 });

        // Add smooth scrolling on all links inside the navbar
        $("#myNavbar a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
        var smallWindow = false;

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $("header").addClass("addShadow");
                $(".important-class").addClass("padding-on-my-header");
            }
            if (scroll < 50) {
                $(".important-class").removeClass("padding-on-my-header");
                $("header").removeClass("addShadow");

            }
        }).resize(function() {
            if (!smallWindow && this.innerWidth <= 1024) {
                smallWindow = true;
                $('.top-bar-section').find('ul.right').hide(0).delay(500).show(0);
            }
            if (smallWindow && this.innerWidth > 1024) {
                smallWindow = false;
            }
        });
        $('#chatBox').click(function() {
            $('#chatBox').animate({
                bottom: '-500px'
            })
            $('#primaryWindow').animate({
                bottom: '5px',

            })
        });
        $('#closePrim').click(function() {
            $('#chatBox').animate({
                bottom: '10px'
            }, 550);
            $('#primaryWindow').animate({
                bottom: '-900px'
            })
        });
        $('#liveMove').click(function() {
            console.log("hai");
            $('#primaryWindow').animate({
                bottom: '-900px'
            });
            $('#liveChatWindow').animate({
                bottom: '10px'
            }, 500)
        })
    });




})();
