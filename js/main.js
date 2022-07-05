//Tabs

const tabsNav = document.getElementById('tabs-nav');
const tabsContent = document.getElementById('tabs-content');
const tabsButton = Array.from(document.querySelectorAll('.tabs__btn'));

const changeClass = el => {
   for(let i = 0; i < tabsNav.children.length; i++) {
      tabsNav.children[i].classList.remove('tabs__btn_active');
   }
   el.classList.add('tabs__btn_active');
}

for(let index = 0; index < tabsButton.length; index++) {
   tabsButton[index].addEventListener('click', e => {
      const activeTab = e.target.dataset.btn;
      changeClass(e.target);
      for(let i = 0; i < tabsContent.children.length; i++) {
         tabsContent.children[i].classList.remove('tabs__pane_active');
         if(tabsContent.children[i].dataset.pane == activeTab) {
            tabsContent.children[i].classList.add('tabs__pane_active');
         }
      }
      
   })
}

//Modal

const btnOpen = document.getElementById('modal-open');
const btnClose = document.getElementById('modal-close');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');

btnOpen.addEventListener('click', () => {
   modal.classList.add('modal-active');
})

const closeModal = () => {
   modal.classList.remove('modal-active');
}

modalOverlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

//Slider

const btnPrev = document.getElementById('btn-prev'),
      btnNext = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slider__item'),
      dots = document.querySelectorAll('.dots__item'),
      slideWrap = document.querySelectorAll('.slider');

let index = 0;

const activeSlide = n => {
   for(slider__item of slides) {
      slider__item.classList.remove('slider__item_active');
   }
   slides[n].classList.add('slider__item_active');
}

const activeDot = n => {
   for(dots__item of dots) {
      dots__item.classList.remove('dots__item_active');
   }
   dots[n].classList.add('dots__item_active');
}

const prepareCurrentSlide = ind => {
   activeSlide(ind);
   activeDot(ind);
}

const nextSlide = () => {
   if(index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
   }else {
      index++;
      prepareCurrentSlide(index);
   }
}

const prevSlide = () => {
   if(index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
   }else {
      index--;
      prepareCurrentSlide(index);
   }
}

dots.forEach((item,indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
   })
})

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);












