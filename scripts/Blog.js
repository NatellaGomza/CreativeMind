// получает переменную, с которо йосущетсвляется переход на страницу и загружает соответсвующую ей элемент
const params = new URLSearchParams(window.location.search);

var active_box = params.get('active-item');
window.addEventListener("load", function (event) {
    var element = document.getElementById(active_box);
    element.classList.add("active");
});

// проматывает сраницу в начало следующей при щелчке на кнопку карусели
$(document).ready(function () {
    $('#carouselExampleControlsNoTouching').on('slid.bs.carousel', function () {
        window.scrollTo(0, 0);
    })
});

