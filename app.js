/* alert('i work if you can see this'); */

const toggleBtn = document.getElementById('toggleBtn');
const body = document.getElementById('body');

toggleBtn.addEventListener('click', () =>
  body.classList.toggle('darkTheme')
);