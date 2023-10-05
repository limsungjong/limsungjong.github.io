const handleProjectSelection = (element: HTMLElement) => {
  const selected = projectButtons?.querySelector(".selected");
  selected?.classList.remove("selected");
  element.classList.add("selected");
};

const filterProject = (element: HTMLElement) => {
  const projects: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".project");
  const projectsContainer = document.querySelector(".projects");

  projectsContainer?.classList.add("animation-out");
  projects.forEach((e) => {
    if (
      element.dataset.category === "all" ||
      element.dataset.category === e.dataset.type
    ) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
    if (e.dataset.type === "empty") {
      e.style.display = "block";
    }
  });
  setTimeout(() => {
    projectsContainer?.classList.remove("animation-out");
  }, 250);
};

const projectButtons = document.querySelector(".buttons");
projectButtons?.addEventListener("click", (evt) => {
  const element = evt.target as HTMLButtonElement | null;
  if (element == undefined || element.classList.contains("buttons")) {
    return;
  } else {
    handleProjectSelection(element);
    filterProject(element);
  }
});

document.querySelectorAll('li[data-type="empty"]').forEach((e) => {
  const element = e as HTMLLIElement;
  if (element) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }
});
