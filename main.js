const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const slides = document.querySelectorAll(".slide");
const h2Title = document.querySelector("h2.h2-title");
const data = [
  "Brand naming & guidelines",
  "Brand identity & merchandise",
  "Brand identity & web design",
];

rightBtn.addEventListener("click", () => {
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
      slide.classList.add("fade-left");
      if (index == slides.length - 1) {
        index = -1;
      }
      slides[index + 1].classList.add("go-right");
      slides[index + 1].classList.remove("d-none");
      h2Title.classList.add("title-animation");
      setTimeout(() => {
        h2Title.textContent = data[index + 1];
      }, 400);
      setTimeout(() => {
        h2Title.classList.remove("title-animation");

        slides[index + 1].classList.add("active");
        slide.classList.remove("fade-left");
        slides[index + 1].classList.remove("go-right");
        slide.classList.add("d-none");
      }, 500);
    }
  });
});

leftBtn.addEventListener("click", () => {
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
      slide.classList.add("fade-right");
      if (index == 0) {
        index = slides.length;
      }
      slides[index - 1].classList.add("go-left");
      slides[index - 1].classList.remove("d-none");
      h2Title.classList.add("title-animation");
      setTimeout(() => {
        h2Title.textContent = data[index - 1];
      }, 400);

      setTimeout(() => {
        h2Title.classList.remove("title-animation");

        slides[index - 1].classList.add("active");
        slide.classList.remove("fade-right");
        slides[index - 1].classList.remove("go-left");
        slide.classList.add("d-none");
      }, 500);
    }
  });
});
