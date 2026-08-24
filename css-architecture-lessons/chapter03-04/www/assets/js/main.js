"use strict";

/*
    Js Enabled
===========================================*/
const init = function () {
  document.documentElement.classList.add("is-jsEnabled");
};
init();

/*
    Load
===========================================*/
const load = function () {
  window.addEventListener("load", function () {
    document.documentElement.classList.add("is-loaded");
  });
};
load();
/*
    Resize
===========================================*/
const resize = function () {
  let timerId;
  window.addEventListener("resize", function () {
    document.documentElement.classList.add("is-resize");
    clearTimeout(timerId);

    timerId = setTimeout(function () {
      document.documentElement.classList.remove("is-resize");
    }, 500);
  });
};
resize();

/*
    Drawer Menu
===========================================*/
const dwawer = function () {
  const button = document.querySelector(".js-hamburger");
  button.addEventListener("click", function (e) {
    const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
    e.currentTarget.setAttribute("aria-expanded", !isExpanded);
    document.documentElement.classList.toggle(`is-drawerActive`);
  });
};
dwawer();
