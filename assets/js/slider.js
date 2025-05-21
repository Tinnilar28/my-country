const slides = document.querySelectorAll('.slide');
// slide{
//   <img src="https://placehold.jp/3d4070/ffffff/1024x512.png" class="slide show" alt="スライド1">
//   <img src="https://placehold.jp/3e7051/ffffff/1024x512.png" class="slide" alt="スライド2">
//   <img src="https://placehold.jp/ce0d0d/ffffff/1024x512.png" class="slide" alt="スライド3"></img>
// }

const prevBtn = document.querySelector('.prev-button');
// prvButt = <button> class="prev-button">&#10094;</button> 

const nextBtn = document.querySelector('.next-button');

let current = 0;
let timer = setInterval(showNextSlide, 3000); // 3000 = 3秒で自動切り替え 

function updateSlide(index) {
  slides.forEach(slide => slide.classList.remove('show'));
  slides[index].classList.add('show');
}

function showNextSlide() {
  current = (current + 1) % slides.length;
  console.log("showNextSlide:" + current);
  updateSlide(current);
}

function showPrevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  console.log("showPrevSlide:" + current);
  updateSlide(current);
}

nextBtn.addEventListener('click', () => {
  showNextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  showPrevSlide();
  resetTimer();
});

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(showNextSlide, 5000);
}
