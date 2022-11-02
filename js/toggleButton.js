const nav = document.querySelector('.navbar__menu');
const btns = document.querySelector('#btn');
btns.addEventListener('click', toggle1);
function toggle1() {
  if (nav.style.display !== 'none') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
}
// 변경
window.onresize = function (event) {
  var innerWidth = window.innerWidth;
  innerWidth > '769' ? (nav.style.display = 'flex') : (nav.style.display = 'none');
};
