"use strict";
const handleProjectSelection = (element) => {
    const selected = projectButtons === null || projectButtons === void 0 ? void 0 : projectButtons.querySelector(".selected");
    selected === null || selected === void 0 ? void 0 : selected.classList.remove("selected");
    element.classList.add("selected");
};
const handleProjectFiltering = (element) => {
    const projects = document.querySelectorAll(".project");
    const projectsContainer = document.querySelector(".projects");
    projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.classList.add("animation-out");
    projects.forEach((e) => {
        if (element.dataset.category === "all" ||
            element.dataset.category === e.dataset.type) {
            e.style.display = "block";
        }
        else {
            e.style.display = "none";
        }
    });
    setTimeout(() => {
        projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.classList.remove("animation-out");
    }, 250);
};
const projectButtons = document.querySelector(".buttons");
projectButtons === null || projectButtons === void 0 ? void 0 : projectButtons.addEventListener("click", (evt) => {
    const element = evt.target;
    if (element == undefined) {
        return;
    }
    else {
        handleProjectSelection(element);
        handleProjectFiltering(element);
    }
});
