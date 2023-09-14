document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu-item');
    var menuImage = document.getElementById('menu-image');

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('mouseover', function () {
            var imageName = menuItem.getAttribute('data-image');
            menuImage.src = imageName;
            menuImage.style.display = 'block';
        });
    });
});
