const menuToggleElement = document.querySelector("#toggle") as HTMLInputElement;
// 스킬 섹션 게이지 채워지는 이벤트
const skillsElement = document.querySelector("#skills") as HTMLDivElement;
const skillSectionObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fillGauge(document.querySelector(".java") as HTMLDivElement, 80, 1000);

        fillGauge(
          document.querySelector(".spring") as HTMLDivElement,
          75,
          1000,
        );
        fillGauge(document.querySelector(".mySQL") as HTMLDivElement, 70, 1000);
        fillGauge(
          document.querySelector(".javaScript") as HTMLDivElement,
          80,
          1000,
        );
        fillGauge(document.querySelector(".react") as HTMLDivElement, 60, 1000);
      }
    });
  },
  { threshold: 0.8 },
);
skillSectionObs.observe(skillsElement);

function fillGauge(
  element: HTMLElement,
  targetPercent: number,
  duration: number,
) {
  let startPercent = parseFloat(element.style.width) || 0;
  let startTime: number = 0;

  function animate(currentTime: number) {
    if (!startTime) startTime = currentTime;
    let elapsedTime = currentTime - startTime;
    let percentComplete = Math.min(1, elapsedTime / duration);
    let currentPercent =
      startPercent + percentComplete * (targetPercent - startPercent);

    element.style.width = currentPercent + "%";

    if (percentComplete < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

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
    AllElementsRect.home.top,
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
menuToggleElement.addEventListener("click", (e) => {
  if (menuToggleElement.checked) {
    headerElement.classList.remove("hide");
  }
  if (!menuToggleElement.checked && scrollY < AllElementsRect.home.height) {
    headerElement.classList.add("hide");
  }
});

// nav바 토글 버튼 체크 해제
const navElement = document.querySelector(".nav") as HTMLDivElement;
navElement.addEventListener("click", (evt) => {
  const target = evt.target as HTMLDivElement;
  menuToggleElement.checked = false;
});

// toggle 버튼 눌렀을때 home이 눌렀을때 hide 제거
const navHomeElement = document.querySelector("a[data-text='home']");
navHomeElement?.addEventListener("click", () => {
  if (!headerElement.classList.contains("hide")) {
    headerElement.classList.add("hide");
  }
});
