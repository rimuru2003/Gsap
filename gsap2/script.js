gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,     // higher = smoother scrolling
  effects: true, // keeps ScrollTrigger animations synced
});



gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  delay: 0.3,
  rotate: 120,
});

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 0.3,
//   rotate: 120,
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     start: "top 80%",
//     end: "bottom 40%",
//     scrub: 2,
//     // markers: true,
//     toggleActions: "play reverse play reverse"
//   }
// });


gsap.to("#page2 h1", {
  xPercent: -100,
  // scroller: "body",

  scrollTrigger: {
    trigger: "#page2",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
    // markers: true, // you can comment this safely now
  },
});



gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  delay: 0.3,
  rotate: 120,
  scrollTrigger: {
    trigger: "#page3 #box",
    // scroller: "body",
    start: "top 80%",
    end: "bottom 50%",
    scrub: 1,
    markers: true,
    // toggleActions: "play reverse play reverse",
  },
});