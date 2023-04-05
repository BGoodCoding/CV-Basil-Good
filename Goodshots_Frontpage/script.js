let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollpos) {
    document.querySelector(".navigation").classList.add("hidden");
  } else {
    document.querySelector(".navigation").classList.remove("hidden");
  }
  prevScrollpos = currentScrollPos;
};
