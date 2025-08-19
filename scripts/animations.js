"use strict";

gsap.registerPlugin(ScrollTrigger);

export const runOnLoad = function (fn) {
  window.addEventListener("load", fn);
};

//Stop initial display of statuic version of the page before js loads
window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  setTimeout(() => {
    document.body.classList.remove("is-loading");
  }, 200);
});

const isMobile = window.innerWidth < 1024;

//Initial load animation for the hero section
const t1 = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

runOnLoad(() => {
  t1.from(".nav", { y: -20, opacity: 0 });
  t1.from(".nav > *", { y: -100, opacity: 0, stagger: 0.1 }, "=-0.9");
  t1.from(".hero__content__text header", { y: 50, opacity: 0 }, "=-0.5");
  t1.from(".hero__content__text h1", { y: 50, opacity: 0 }, "=-0.9");
  t1.from(".hero__content__text p", { y: 50, opacity: 0 }, "=-0.9");
  t1.from(
    ".hero__content__images",
    { scale: 0.9, opacity: 0, duration: 0.5 },
    "=-0.8"
  );
  t1.from(
    ".hero__content__images img",
    { scale: 0.9, opacity: 0, duration: 0.5 },
    "=-0.3"
  );
});

// Function to animate the floating image 1
runOnLoad(() => {
  const img = document.querySelector(".floating-img-1");
  const section = document.querySelector(".hero__content");

  gsap.to(img, {
    y: () => {
      // Move it up by 30% of section height
      return section.offsetHeight * 0.2;
    },
    ease: "power3.out",
    // delay: 0.3,
    scrollTrigger: {
      trigger: section,
      start: `top ${isMobile ? "50%" : "20%"}`, // Start animating when section is halfway in
      end: "bottom top", // End when section scrolls out
      scrub: 1.8,
    },
  });
});

// Function to animate the floating image 2
runOnLoad(() => {
  const img = document.querySelector(".floating-img-2");
  const section = document.querySelector(".hero__content");

  gsap.to(img, {
    y: () => {
      // Move it up by 30% of section height
      return -section.offsetHeight * 0.2;
    },
    ease: "power3.out",
    // delay: 0.3,
    scrollTrigger: {
      trigger: section,
      start: "top 20%",
      end: "bottom top",
      scrub: 1.8,
    },
  });
});

//fade in animation
runOnLoad(() => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Start when the top of the element is at 80% of the viewport height
        end: "bottom top", // End when the bottom of the element is at the top of the viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
      },
    });
  });
});

//Scale in animation
runOnLoad(() => {
  const elements = document.querySelectorAll(".scale-in");
  elements.forEach((element) => {
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  });
});

//Fade in by opacity animation
runOnLoad(() => {
  const elements = document.querySelectorAll(".fade-in-opacity");
  elements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  });
});

// Pinning the story section
runOnLoad(() => {
  gsap.to(".story", {
    scrollTrigger: {
      trigger: ".story__head",
      start: "top 30%",
      end: "bottom bottom",
      pin: true,
    },
  });
});
