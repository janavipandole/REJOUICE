function locomotionEffect() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function cursorEffects() {
  const page1Content = document.querySelector("#main");
  const cursor = document.querySelector(".cursor");
  const page2Content = document.querySelector(".page2");

  page1Content.addEventListener("mousemove", function (value) {
    gsap.to(cursor, {
      x: value.clientX,
      y: value.clientY,
    });
  });

  page1Content.addEventListener("mousemove", function () {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
  page2Content.addEventListener("mousemove", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function gsapAnimation() {
  const timeline = gsap.timeline();
  timeline.from(".loader h1", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });

  timeline.to(".loader h1", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    ease: "power4.inOut",
  });

  timeline.to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  });
  timeline.from(".page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: -0.5,
  });
  timeline.to(".loader", {
    display: "none",
  });
  timeline.from(".page2 h1", {
    y: 120,
    opacity: 0,
    stagger: 0.5,
    duration: 2,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "#main",
      start: "top 50%",
      end: "top 47%",
      scrub: 3,
    },
  });
  timeline.from(".page4 h1", {
    y: 120,
    stagger: 0.5,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "#main",
      start: "top 60%",
      end: "top 57%",
      scrub: 3,
    },
  });
  timeline.from(".page6 h1", {
    y: 120,
    stagger: 0.5,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "#main",
      start: "top 60%",
      end: "top 57%",
      scrub: 3,
    },
  });
  timeline.from(".page5 h1", {
    y: 120,
    stagger: 0.5,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "#main",
      start: "top 60%",
      end: "top 57%",
      scrub: 3,
    },
  });
  timeline.from(".page5 .swiper_div", {
    width: "10%",
    stagger: 0.5,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "#main",
      start: "top bottom",
      end: "top top",
      scrub: 3,
    },
  });
  timeline.from(".page7 h1", {
    y: 120,
    stagger: 0.5,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page7",
      scroller: "#main",
      start: "top bottom",
      end: "top 57%",
      scrub: 1,
    },
  });
  timeline.from(".page8 .page8-part1 .left", {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: -0.5,
    scrollTrigger: {
      trigger: ".page7",
      scroller: "#main",
      start: "top top",
      scrub: 5,
    },
  });
  timeline.from(".page8 .page8-part1 .right ", {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: -0.5,
    scrollTrigger: {
      trigger: ".page7",
      scroller: "#main",
      start: "top top",
      scrub: 5,
    },
  });
  timeline.from(".page8 .page8-part2", {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: -0.5,
    scrollTrigger: {
      trigger: ".page7",
      scroller: "#main",
      start: "top top",
      scrub: 5,
    },
  });
  timeline.from(".page8 .page8-part3 h1 span", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: -0.5,
    scrollTrigger: {
      trigger: ".page7",
      scroller: "#main",
      start: "top top",
      scrub: 5,
    },
  });
}
function nav() {
  const menu = document.querySelector(".Menu");
  const nav = document.querySelector(".mainNav");
  const close = document.querySelector(".mainNav h3");
  menu.addEventListener("click", function () {
    nav.style.top = "0";
  });
  close.addEventListener("click", function () {
    nav.style.top = "-100vh";
  });
}

nav();
locomotionEffect();
cursorEffects();
gsapAnimation();
