const inner = document.getElementById("flipInner");
const openBtn = document.getElementById("openForm");
const backBtn = document.getElementById("backBtn");

const flipTl = gsap
  .timeline({ paused: true, defaults: { duration: 0.7, ease: "power3.inOut" } })
  .to(inner, { rotateY: 180 });

openBtn.addEventListener("click", () => flipTl.play());
backBtn.addEventListener("click", () => flipTl.reverse());
