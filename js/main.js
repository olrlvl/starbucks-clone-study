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