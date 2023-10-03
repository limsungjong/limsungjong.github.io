type AllSections<T> = {
  header: T;
  home: T;
  about: T;
  journeys: T;
  skills: T;
  projects: T;
  contact: T;
};

type AllSectionsThreshold = {
  [key: string]: IntersectionObserverInit;
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

const AllSectionsThreshold: AllSectionsThreshold = {
  home: { threshold: 0.7 },
  about: { threshold: 0.5 },
  journeys: { threshold: 0.3 },
  skills: { threshold: 0.5 },
  projects: { threshold: 0.9 },
  contact: { threshold: 0.8 },
};
