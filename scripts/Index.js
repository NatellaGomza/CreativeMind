$(document).ready(function () {

    // выключает полосу прокрутки у тела страницы, когда увеличены примеры работы.
    $(".context input").on('click', function () {
        $('body').toggleClass('scroll');

    });

    // добавляет возможность возврата из режима приближенного просмотра примеров работ по нажатию клавии Escape
    window.onkeyup = function (e) {
        if (e.keyCode == 27) {
            $(".context input").prop('checked', false);
            $('body').toggleClass('scroll');

            return false;
        };
    }

    // получаем координаты и высоту элемента 'our_statistics' и передаем их в функцию elementInViewport
    $(window).scroll(function () {
        var myElement = document.getElementById('our_statistics');
        elementInViewport(myElement);
    })
});

// получаем координаты центра элемента 'our_statistics' по вертикали
function getCoordinateYOfElement(elem) {
    var top = elem.offsetTop;
    var centerY = top + elem.offsetHeight / 2;
    return centerY;
}

// получаем координаты центра viewport по вертикали, сравниваем их с координатами центра элемента 'our_statistics' и запускаем анимацию
function elementInViewport(myElement) {
    var viewportCenterY = window.pageYOffset || document.documentElement.scrollTop + window.innerHeight / 2;
    var elementCenterY = getCoordinateYOfElement(myElement) - window.innerHeight / 2;
    var res = Math.abs(viewportCenterY - elementCenterY);
    if (res <= 10) {
      $('svg .circle-green').removeClass('circle-green').addClass('circle-white');
        setTimeout(function () { $('svg .circle-white').removeClass('circle-white').addClass('circle-green') }, 50);
        setTimeout(startPercentAnimation, 50);
    }
}


// обновить текущее значение счетчика
function timer(animator) {
    if (animator.curPercentage < animator.targetPercentage) {
        animator.curPercentage += 1;
    } 
    
    $(animator.outputSelector).text(animator.curPercentage + "%");

    if (animator.curPercentage != animator.targetPercentage) {
        setTimeout(timer, animator.animationSpeed, animator)
    }
}

// cоздаем аниматор и получаем значения
function PercentageAnimator(numEl, percentages) {
    this.animationSpeed = 3000 / percentages;
    this.curPercentage = 0;
    this.outputSelector = ".percentage" + numEl;
    this.animate = function (percentage, animator) {
        this.targetPercentage = percentage;
        setTimeout(timer, animator.animationSpeed, animator);
    }
}

function startPercentAnimation() {
    var animator1 = new PercentageAnimator(1, 80);
    var animator2 = new PercentageAnimator(2, 95);
    var animator3 = new PercentageAnimator(3, 85);
    var animator4 = new PercentageAnimator(4, 75);
    animator1.curPercentage = 0;
    animator1.animate(80, animator1);
    animator2.animate(95, animator2);
    animator3.animate(85, animator3);
    animator4.animate(75, animator4);
}


