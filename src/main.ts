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
const headerElementHeight = headerElement.offsetHeight;
document.addEventListener("scroll", () => {
  if (menuToggleElement.checked) {
    headerElement.classList.remove("hide");
  } else if (window.scrollY > homeElementHeight) {
    headerElement.classList.remove("hide");
  } else if (window.scrollY < homeElementHeight) {
    headerElement.classList.add("hide");
  }
});

// home 스크롤 이벤트(페이지 아래로 내리면 홈 섹션 투명도 조절)
const homeElement = document.querySelector(
  "#home .container",
) as HTMLDivElement;
const homeElementTop = homeElement.clientTop;
const homeElementHeight = homeElement.offsetHeight;
document.addEventListener("scroll", () => {
  homeElement.style.opacity = calOpacity(
    window.scrollY,
    homeElementTop,
    homeElementHeight,
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
  if (window.scrollY < homeElementHeight) {
    arrowUpBtn.classList.add("hide");
  } else {
    arrowUpBtn.classList.remove("hide");
  }
});

// size 이벤트
const menuElement = headerElement.querySelector(".menu");

// toggle 이벤트
menuToggleElement.addEventListener("click", (e) => {
  if (menuToggleElement.checked) {
    headerElement.classList.remove("hide");
  }
  if (!menuToggleElement.checked && scrollY < homeElementHeight) {
    headerElement.classList.add("hide");
  }
});
