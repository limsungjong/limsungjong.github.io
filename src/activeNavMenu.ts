// @ts-ignore
const navElement = document.querySelector(".nav") as HTMLDivElement;

const sectionsIds: string[] = [
  "#home",
  "#about",
  "#journeys",
  "#skills",
  "#projects",
  "#contact",
];
const sections = sectionsIds.map((id) => document.querySelector(id));
const navItems = sectionsIds.map((id) =>
  document.querySelector(`[href="${id}"]`),
);
const options: IntersectionObserverInit = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const visibleSection = sectionsIds.map(() => false);
let activeNavItem = navItems[0];

const obsCallBack = (entries: IntersectionObserverEntry[]) => {
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

const findFirstIntersecting = (visibleSection: boolean[]) => {
  const index = visibleSection.indexOf(true);
  return index >= 0 ? index : 0;
};

const selectNavItem = (index: number) => {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem?.classList.remove("active");
  activeNavItem = navItem;
  navItem?.classList.add("active");
};

const observer = new IntersectionObserver(obsCallBack, options);

sections.forEach((element) => {
  if (element) {
    observer.observe(element);
  }
});
