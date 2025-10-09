var remember = "M 10 300 Q 500 300 950 300";
var final = "M 10 300 Q 500 300 950 300";
var string = document.querySelector("#page1");

string.addEventListener("mousemove", function (dets) {
  a = `M 10 300 Q ${dets.x} ${dets.y} 950 300`;
  gsap.to("svg path", {
    attr: { d: a },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: final },
    duration: 1.5,
    ease: "elastic.out(1,0.1)",
  });
});






  




