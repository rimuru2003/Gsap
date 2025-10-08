function breaktext() {
  var h1 = document.querySelector("h1");
  var textani = h1.textContent;
  var splited = textani.split("");
  var halfvalue = splited.length / 2;

  var clutter = "";

  splited.forEach(function (elem, id) {
    if (id < halfvalue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breaktext();

gsap.from("h1 .a", {
  y: 50,
  stagger: 0.15,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});

gsap.from("h1 .b", {
  y: 50,
  stagger: -0.15,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});
