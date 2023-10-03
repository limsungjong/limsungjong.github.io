const menuToggleElement = document.querySelector("#toggle") as HTMLInputElement;

// header 스크롤 이벤트 (페이지 아래로 스크롤링 하면 헤더에 hide 클래스 적용)
const headerElement = document.querySelector(".header") as HTMLDivElement;
document.addEventListener("scroll", () => {
  if (menuToggleElement.checked) {
    headerElement.classList.remove("hide");
  } else if (window.scrollY > AllElementsRect.header.height) {
    headerElement.classList.remove("hide");
  } else if (window.scrollY < AllElementsRect.home.height) {
    headerElement.classList.add("hide");
  }
});

// home 스크롤 이벤트(페이지 아래로 내리면 홈 섹션 투명도 조절)
const homeElement = document.querySelector(
  "#home .container",
) as HTMLDivElement;
document.addEventListener("scroll", () => {
  homeElement.style.opacity = calOpacity(
    window.scrollY,
    AllElementsRect.header.top,
    AllElementsRect.home.height,
  ).toFixed(2);
});

function calOpacity(scrollY: number, minScroll: number, maxScroll: number) {
  const scrollRatio = 1 - (scrollY - minScroll) / (maxScroll - minScroll);
  const minOpacity = 0;
  const maxOpacity = 1;
  return minOpacity + scrollRatio * (maxOpacity - minOpacity);
}

// arrow up 스크롤 이벤트(아래로 스크롤 내리면 애로우 업 버튼 토글)
const arrowUpBtn = document.querySelector(".arrowUp") as HTMLDivElement;
arrowUpBtn.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});
document.addEventListener("scroll", () => {
  if (window.scrollY < AllElementsRect.home.height) {
    arrowUpBtn.classList.add("hide");
  } else {
    arrowUpBtn.classList.remove("hide");
  }
});

// toggle 버튼 이벤트
menuToggleElement.addEventListener("click", () => {
  if (menuToggleElement.checked) {
    headerElement.classList.remove("hide");
  }
  if (!menuToggleElement.checked && scrollY < AllElementsRect.home.height) {
    headerElement.classList.add("hide");
  }
});

// nav바 토글 버튼 체크 해제
const navElement = document.querySelector(".nav") as HTMLDivElement;
navElement.addEventListener("click", () => {
  menuToggleElement.checked = false;
});

// toggle 버튼 눌렀을때 home이 눌렀을때 hide 제거
const navHomeElement = document.querySelector("a[data-text='home']");
navHomeElement?.addEventListener("click", () => {
  if (!headerElement.classList.contains("hide")) {
    headerElement.classList.add("hide");
  }
});

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        activeNavMenu(e.target.id);
      }
    });
  },
  { threshold: 0.5 },
);
const proObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        activeNavMenu(e.target.id);
      }
    });
  },
  { threshold: 0.9 },
);
const contactObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        activeNavMenu(e.target.id);
      }
    });
  },
  {
    threshold: 0.8,
  },
);

obs.observe(document.querySelector("#home") as HTMLTableSectionElement);
obs.observe(document.querySelector("#about") as HTMLTableSectionElement);
obs.observe(document.querySelector("#journeys") as HTMLTableSectionElement);
obs.observe(document.querySelector("#skills") as HTMLTableSectionElement);
proObs.observe(document.querySelector("#projects") as HTMLTableSectionElement);
contactObs.observe(
  document.querySelector("#contact") as HTMLTableSectionElement,
);

const activeNavMenu = (filter: string) => {
  navElement.querySelectorAll("a").forEach((element) => {
    if (element.dataset.text === filter) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};
