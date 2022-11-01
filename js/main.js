let progressSpans = document.querySelectorAll(".prgressbar span");
let section = document.querySelector(".skills");


console.log(progressSpans);
console.log(section);
console.log(section.offsetTop);

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};