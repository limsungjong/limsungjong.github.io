const projectButtons = document.querySelector(".buttons");

const projectButtonClick = (element: HTMLElement | undefined) => {
  if (element == undefined) {
    return;
  }

  // 프로젝트 버튼 클릭시 button에 따라 selected 추가 제거
  const selected = projectButtons?.querySelector(".selected");
  selected?.classList.remove("selected");
  element.classList.add("selected");

  // 프로젝트 버튼 클릭시 button에 따라 카테고리에 맞춰 프로젝트 추가 제거
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
  });
  setTimeout(() => {
    projectsContainer?.classList.remove("animation-out");
  }, 250);
};

projectButtons?.addEventListener("click", (evt) => {
  const element = evt.target as HTMLButtonElement | null;
  if (element == undefined) {
    return;
  } else {
    projectButtonClick(element);
  }
});
