"use strict";

import { runOnLoad } from "./animations.js";

const nav = document.querySelector(".nav");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const pageLinks = document.querySelectorAll(".page-link");
const links = document.querySelectorAll(".hidden-links");

gsap.registerPlugin(ScrollTrigger);

// Nav scroolup and scroll down togle animation
let lastScroll = window.scrollY;
let scrollThreshold = 70;
let ticking = false;
let navVisible = true;

function onScroll() {
  const currentScroll = window.scrollY;
  const scrollDiff = Math.abs(currentScroll - lastScroll);
  if (scrollDiff < scrollThreshold) {
    return; // Ignore small scrolls
  }

  const scrollingDown = currentScroll > lastScroll;
  if (scrollingDown && navVisible) {
    //scrolling donw hide, the nav
    gsap.to(nav, { y: "-100%", duration: 0.5, ease: "power3.out" });
    navVisible = false;
  } else if (!scrollingDown && !navVisible) {
    //scrolling up show the nav
    gsap.to(nav, { y: "0%", duration: 0.5, ease: "power3.out" });
    navVisible = true;
  }
  lastScroll = currentScroll;
}

runOnLoad(() => {
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
});

//Toggle nav
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

//Show list of liks on hover
pageLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    links.forEach((link) => link.classList.add("active"));
    console.log("yelll", link);
  });
  link.addEventListener("mouseout", () => {
    links.forEach((link) => link.classList.remove("active"));

    console.log("yelll");
    link.classList.remove("active");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("active");
  });
  link.addEventListener("mouseout", () => {
    link.classList.remove("active");
  });
});
