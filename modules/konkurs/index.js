// BUrger
let acc = document.getElementsByClassName("accordion");
let menuBtn = document.getElementById('nav-toggle');
let menu = document.querySelector('.burger_menu');
let menuArr = document.querySelector(".navigation_mobile");
let i;

//трансформация крестика
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style = "margin-bottom: 0";
    } else {
      panel.style = "margin-bottom: 20px";
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


let openBurger = () => {
  menuBtn.classList.toggle("opened");
  menu.classList.toggle("burger_active");
};

menuBtn.addEventListener("click", openBurger);
// массив с сыками
const links = Array.from(menuArr.children);
// при клике  на любую ссылку вызываем функцию
links.forEach((link) => {
    link.addEventListener("click", openBurger);
  });



  //Модальное окно 
  document.addEventListener('DOMContentLoaded', () => {
 
  // Кнопка по которой происходит клик
  let callBackButton = document.getElementById('callback-button');
 
  // Модальное окно, которое необходимо открыть
  let modal1 = document.getElementById('modal-1');
 
  // Кнопка "закрыть" внутри модального окна
  let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
 
  // Тег body для запрета прокрутки
  let tagBody = document.querySelector('.body');
 
  callBackButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
  }
 
  closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
  }
 
  modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  };
 

  // Вызов модального окна несколькими кнопками на странице
  let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');
 
  for (let button of buttonOpenModal1) {
    button.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
  }
});


// Ввод только цифр в INPUT телефона
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9 +]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}


// Анимация по scroll 
var element1 = document.querySelector('.vector_hands__img');
var element2 = document.querySelector('.vector_pen__img');
var element3 = document.querySelector('.vector_mashine__img');
var element4 = document.querySelector('.vector_phone__img');
var element5 = document.querySelector('.vector_rocket__img');
var element6 = document.querySelector('.vector_trothy_cup__img');

if (window.innerWidth >= 900 ) {
  
window.addEventListener('scroll', function () {
if (window.scrollY > 1380) {
  element1.classList.add("active");
    } else {
      element1.classList.remove("active");
    }
    if (window.scrollY > 1780) {
      element2.classList.add("active");
    } else {
      element2.classList.remove("active");
    }
    if (window.scrollY > 2180) {
      element3.classList.add("active");
    } else {
      element3.classList.remove("active");
    }
    if (window.scrollY > 2780) {
      element4.classList.add("active");
    } else {
      element4.classList.remove("active");
    }
if (window.scrollY > 3280) {
  element5.classList.add("active");
    } else {
      element5.classList.remove("active");
    }
    if (window.scrollY > 3780) {
      element6.classList.add("active");
    } else {
      element6.classList.remove("active");
    }
  });
// Бегущая строка
  $(function() {
  $('.marquee').marquee({
    duration: 5000,
    startVisible: true,
    duplicated: true
  });
});

} else {
  element1.classList.add("active");
  element2.classList.add("active");
  element3.classList.add("active");
  element4.classList.add("active");
  element5.classList.add("active");
  element6.classList.add("active");
}