"use strict";
const menuToggleElement = document.querySelector("#toggle");
const headerElement = document.querySelector(".header");
document.addEventListener("scroll", () => {
    if (menuToggleElement.checked) {
        headerElement.classList.remove("hide");
    }
    else if (window.scrollY > AllSectionsRect.header.height) {
        headerElement.classList.remove("hide");
    }
    else if (window.scrollY < AllSectionsRect.home.height) {
        headerElement.classList.add("hide");
    }
});
menuToggleElement.addEventListener("click", (e) => {
    const target = e.target;
    if (target == undefined) {
        return;
    }
    if (menuToggleElement.checked) {
        headerElement.classList.remove("hide");
    }
    if (!menuToggleElement.checked && scrollY < AllSectionsRect.home.height) {
        headerElement.classList.add("hide");
    }
});
// @ts-ignore
const navElement = document.querySelector(".nav");
navElement.addEventListener("click", (evt) => {
    var _a;
    const filter = evt.target.dataset.text;
    if (filter == undefined) {
        return;
    }
    menuToggleElement.checked = false;
    (_a = document.querySelector(`#${filter}`)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
});
// toggle 버튼 눌렀을때 home이 눌렀을때 hide 제거
const navHomeElement = document.querySelector("a[data-text='home']");
navHomeElement === null || navHomeElement === void 0 ? void 0 : navHomeElement.addEventListener("click", () => {
    if (!headerElement.classList.contains("hide")) {
        headerElement.classList.add("hide");
    }
});
