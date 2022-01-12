/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(dots);
}
// burger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
// end

// pop_up
let popUp = document.querySelector('.pop_up')

document.querySelector(".btn")
.addEventListener('click', function(){
popUp.style.display = "flex"
})

document.querySelector(".menu-burger__btn")
.addEventListener('click', function(){
popUp.style.display = "flex"
})

document.querySelector('.pop_up_close')
.addEventListener('click', function(){
popUp.style.display = "none"
})
// end


//TABS ==========================================================================
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(onTabClick);
// главная function
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs__nav-btn').click()

//TABS - END ==========================================================================

// mini-slaider
/* Индекс слайда по умолчанию */
var minSlideIndex = 1;
showSlidess(minSlideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlides() {
    showSlidess(minSlideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlides() {
    showSlidess(minSlideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlides(m) {
    showSlidess(minSlideIndex = m);
}

/* Основная функция сладера */
function showSlidess(m) {
    var d;
    var minSlides = document.getElementsByClassName("min-item");
    var minDots = document.getElementsByClassName("mini-slider-dots_item");
    if (m > minSlides.length) {
      minSlideIndex = 1
    }
    if (m < 1) {
        minSlideIndex = minSlides.length
    }
    for (d = 0; d < minSlides.length; d++) {
        minSlides[d].style.display = "none";
    }
    for (d = 0; d < minDots.length; d++) {
        minDots[d].className = minDots[d].replace("active", "");
    }
    minSlides[minSlideIndex - 1].style.display = "flex";
    minDots[minSlideIndex - 1] += "active";
}
// end

