

const input = document.querySelectorAll('input');


input.forEach(el => {
  el.addEventListener('input', function() {
    el.parent().classList.remove('error');
  });
}