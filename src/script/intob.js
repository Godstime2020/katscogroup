// import Observer from 'tailwindcss-intersect';

// Observer.start();

const section_left = document.querySelectorAll(".anim-left");
const anim = document.querySelectorAll(".anim");
const anim_right = document.querySelectorAll(".anim-right");


// imgs.forEach((el) => {
//   el.classList.add("loadin");
// });

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // Add the else if you want to fade out images out of the viewport
    else {
      entry.target.classList.remove("show");
    }
    console.log(entry)
    // entry.target.classList.toggle("animate", entry.isIntersecting)
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

section_left.forEach((el) => observer.observe(el));

anim.forEach((el) => observer.observe(el));
anim_right.forEach((el) => observer.observe(el));



