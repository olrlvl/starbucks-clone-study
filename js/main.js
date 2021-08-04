'use strict'

// 요소 선택
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 이벤트 추가 
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})
// 인풋 박스 요소가 포커스상태일때 
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})
// 인풋 박스 요소가 포커스에서 벗어났을때
searchInputEl.addEventListener('blur', function () { // 포커스가 해제되었을때
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})



const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll!!');
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 초 뒤에 동작
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
console.log(`테스트 1 ${isHidePromotion}`)
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // 클릭할때마다 상태 부정
  console.log(`테스트 2 ${isHidePromotion}`)
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
    console.log(`숨김 처리 ${isHidePromotion}`)
  } else {
    // 표시 처리!
    promotionEl.classList.remove('hide');
    console.log(`표시 처리 ${isHidePromotion}`)
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut, // 타이밍 함수
    delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

