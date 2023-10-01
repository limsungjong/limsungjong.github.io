type ElementsRect = {
  header: DOMRect;
  home: DOMRect;
  about: DOMRect;
  journeys: DOMRect;
  skills: DOMRect;
  projects: DOMRect;
  contact: DOMRect;
};

const AllElementsRect: ElementsRect = {
  header: (
    document.querySelector(".header") as HTMLDivElement
  ).getBoundingClientRect(),
  home: (
    document.querySelector("#home") as HTMLDivElement
  ).getBoundingClientRect(),
  about: (
    document.querySelector("#about") as HTMLDivElement
  ).getBoundingClientRect(),
  journeys: (
    document.querySelector("#journeys") as HTMLDivElement
  ).getBoundingClientRect(),
  skills: (
    document.querySelector("#skills") as HTMLDivElement
  ).getBoundingClientRect(),
  projects: (
    document.querySelector("#projects") as HTMLDivElement
  ).getBoundingClientRect(),
  contact: (
    document.querySelector("#contact") as HTMLDivElement
  ).getBoundingClientRect(),
};
