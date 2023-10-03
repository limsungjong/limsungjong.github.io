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
const activeNavMenu = (filter) => {
    navElement.querySelectorAll("a").forEach((element) => {
        if (element.dataset.text === filter) {
            element.classList.add("active");
        }
        else {
            element.classList.remove("active");
        }
    });
};
Object.keys(AllSectionsThreshold).forEach((key) => {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                activeNavMenu(e.target.id);
            }
        });
    }, AllSectionsThreshold[key]);
    const section = document.querySelector(`#${key}`);
    if (section) {
        obs.observe(section);
    }
});
