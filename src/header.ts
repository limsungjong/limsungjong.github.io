const menuToggleElement = document.querySelector("#toggle") as HTMLInputElement;
const headerElement = document.querySelector(".header") as HTMLDivElement;

document.addEventListener("scroll", () => {
  if (menuToggleElement.checked) {
    headerElement.classList.remove("hide");
  } else if (window.scrollY > AllSectionsRect.header.height) {
    headerElement.classList.remove("hide");
  } else if (window.scrollY < AllSectionsRect.home.height) {
    headerElement.classList.add("hide");
  }
});

menuToggleElement.addEventListener("click", (e) => {
  const target = e.target as HTMLDivElement;
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
const navElement = document.querySelector(".nav") as HTMLDivElement;
navElement.addEventListener("click", (evt) => {
  const filter = (evt.target as HTMLDivElement).dataset.text;
  if (filter == undefined) {
    return;
  }

  menuToggleElement.checked = false;
  document.querySelector(`#${filter}`)?.scrollIntoView({ behavior: "smooth" });
});

// toggle 버튼 눌렀을때 home이 눌렀을때 hide 제거
const navHomeElement = document.querySelector("a[data-text='home']");
navHomeElement?.addEventListener("click", () => {
  if (!headerElement.classList.contains("hide")) {
    headerElement.classList.add("hide");
  }
});
