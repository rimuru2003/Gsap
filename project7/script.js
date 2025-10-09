gsap.registerPlugin(ScrollTrigger);

const slides = gsap.utils.toArray(".stack-div");
const STEP = 1000; // px per slide
const total = (slides.length - 1) * STEP;

gsap.set(slides, { autoAlpha: 0 });
gsap.set(slides[0], { autoAlpha: 1 });
slides[0].classList.add("is-visible");


const tl = gsap.timeline({
  defaults: { ease: "none", duration: 1 },
  scrollTrigger: {
    trigger: "#div-stack",
    start: "top top",
    end: `+=${total}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // optional: snap to each slide boundary
    // snap: {
    //   snapTo: (p) => Math.round(p * (slides.length - 1)) / (slides.length - 1),
    //   duration: 0.2,
    //   inertia: false,
    // },
  },
});

for (let i = 0; i < slides.length - 1; i++) {
  tl.to(slides[i], { autoAlpha: 0 }, i).to(slides[i + 1], { autoAlpha: 1 }, i);
}
