var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    scrub: 2,
    ease: "back.out(1.7)",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "Aryan";
  gsap.to(cursor, {
    scale: 3,
    backgroundColor: "#ffffff8a",
  });
});

imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
