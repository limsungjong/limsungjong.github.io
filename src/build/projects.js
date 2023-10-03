"use strict";
const handleProjectSelection = (element) => {
    const selected = projectButtons === null || projectButtons === void 0 ? void 0 : projectButtons.querySelector(".selected");
    selected === null || selected === void 0 ? void 0 : selected.classList.remove("selected");
    element.classList.add("selected");
};
const filterProject = (element) => {
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
        if (e.dataset.type === "empty") {
            e.style.display = "block";
        }
    });
    setTimeout(() => {
        projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.classList.remove("animation-out");
    }, 250);
};
const projectButtons = document.querySelector(".buttons");
projectButtons === null || projectButtons === void 0 ? void 0 : projectButtons.addEventListener("click", (evt) => {
    const element = evt.target;
    if (element == undefined || element.classList.contains("buttons")) {
        return;
    }
    else {
        handleProjectSelection(element);
        filterProject(element);
    }
});
