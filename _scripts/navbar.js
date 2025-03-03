
function createNavBarToggle(){
    document.addEventListener('DOMContentLoaded', function() {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbar = document.querySelector('.navbar');
        var navbarCollapse = document.querySelector('.navbar-collapse');
        var navLinks = document.querySelectorAll('.nav-link');

        navbarToggler.addEventListener('click', function() {
            if (navbar.classList.contains('bg-green')) {
                navbar.classList.remove('bg-green');
                navbarCollapse.classList.remove('bg-green');
            } else {
                navbar.classList.add('bg-green');
                navbarCollapse.classList.add('bg-green');
            }
        });

        // Close the navbar when clicking one of the navbar links
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });

        // Optional: Remove the green background when clicking outside the navbar
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
                navbar.classList.remove('bg-green');
                navbarCollapse.classList.remove('bg-green');
            }
        });
    });
}

