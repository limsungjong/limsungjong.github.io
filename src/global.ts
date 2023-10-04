type AllSections<T> = {
  header: T;
  home: T;
  about: T;
  journeys: T;
  skills: T;
  projects: T;
  contact: T;
};

const AllSectionsRect: Readonly<AllSections<DOMRect>> = {
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
