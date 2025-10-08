// gsap.to("#box1", {
//     x:1000,
//     duration:2,
//     delay:2
// })

gsap.to("#box2", {
  x: 500,
  y: 200,
  duration: 2,
  delay: 2,
  rotate: 120,
  backgroundColor: "yellow",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});

gsap.from("#box1", {
  x: 1200,
  duration: 2,
  delay: 2,
  rotate: 120,
  backgroundColor: "aquamarine",
  borderRadius: "60%",
  repeat: 1,
  yoyo: true,
});

// gsap.from("#box2", {
//     x:500,
//     y:200,
//     duration:2,
//     delay:2
// })

gsap.from("h1", {
  opacity: 0,
  duration: 3,
  delay: 2,
  color: "gold",
  y: 40,
  stagger: 1,
    // repeat: -1,

});

var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1.5,
    delay:0.4,
    stagger:0.3,
})
