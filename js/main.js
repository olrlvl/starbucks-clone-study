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