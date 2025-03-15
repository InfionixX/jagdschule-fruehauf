document.addEventListener('DOMContentLoaded', function() {
    var accordion = document.getElementById('accordion');
    var collapseElements = accordion.querySelectorAll('.collapse');

    collapseElements.forEach(function(collapseElement) {
        collapseElement.addEventListener('show.bs.collapse', function() {
            var icon = collapseElement.previousElementSibling.querySelector('i');
            icon.classList.remove('bi-plus-lg');
            icon.classList.add('bi-dash-lg');
        });

        collapseElement.addEventListener('hide.bs.collapse', function() {
            var icon = collapseElement.previousElementSibling.querySelector('i');
            icon.classList.remove('bi-dash-lg');
            icon.classList.add('bi-plus-lg');
        });
    });
});
