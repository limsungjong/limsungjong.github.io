"use strict";
// @ts-ignore
const navElement = document.querySelector(".nav");
const sectionsIds = [
    "#home",
    "#about",
    "#journeys",
    "#skills",
    "#projects",
    "#contact",
];
const sections = sectionsIds.map((id) => document.querySelector(id));
const navItems = sectionsIds.map((id) => document.querySelector(`[href="${id}"]`));
const options = {
    rootMargin: "-20% 0px 0px 0px",
    threshold: [0, 0.98],
};
const visibleSection = sectionsIds.map(() => false);
let activeNavItem = navItems[0];
const obsCallBack = (entries) => {
    let selectLastOne = false;
    entries.forEach((entry) => {
        const index = sectionsIds.indexOf(`#${entry.target.id}`);
        visibleSection[index] = entry.isIntersecting;
        selectLastOne =
            index === sectionsIds.length - 1 &&
                entry.isIntersecting &&
                entry.intersectionRatio >= 0.95;
    });
    const navIndex = selectLastOne
        ? sectionsIds.length - 1
        : findFirstIntersecting(visibleSection);
    selectNavItem(navIndex);
};
const findFirstIntersecting = (visibleSection) => {
    const index = visibleSection.indexOf(true);
    return index >= 0 ? index : 0;
};
const selectNavItem = (index) => {
    const navItem = navItems[index];
    if (!navItem)
        return;
    activeNavItem === null || activeNavItem === void 0 ? void 0 : activeNavItem.classList.remove("active");
    activeNavItem = navItem;
    navItem === null || navItem === void 0 ? void 0 : navItem.classList.add("active");
};
const observer = new IntersectionObserver(obsCallBack, options);
sections.forEach((element) => {
    if (element) {
        observer.observe(element);
    }
});
