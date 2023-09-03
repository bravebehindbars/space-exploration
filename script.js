// function toggleMenu() {
//   const navList = document.getElementById('navList');
//   navList.classList.toggle('active');
// }

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (pos === 850) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
