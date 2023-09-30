// 스킬 섹션 게이지 채워지는 이벤트
const skillsElement = document.querySelector("#skills");
const skillSectionObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fillGauge(document.querySelector(".java"), 80, 1000);
        fillGauge(document.querySelector(".spring"), 75, 1000);
        fillGauge(document.querySelector(".mySQL"), 70, 1000);
        fillGauge(document.querySelector(".javaScript"), 80, 1000);
        fillGauge(document.querySelector(".react"), 60, 1000);
      }
    });
  },
  { threshold: 0.8 },
);
skillSectionObs.observe(skillsElement);

function fillGauge(element, targetPercent, duration) {
  let startPercent = parseFloat(element.style.width) || 0;
  let startTime = null;

  function animate(currentTime) {
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
const headerElement = document.querySelector(".header");
const headerElementRect = headerElement.getBoundingClientRect();
const headerElementHeight = headerElementRect.height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerElementHeight) {
    headerElement.classList.remove("hide");
  } else {
    headerElement.classList.add("hide");
  }
});

// home 스크롤 이벤트(페이지 아래로 내리면 홈 섹션 투명도 조절)
const homeElement = document.querySelector("#home .container");
const homeElementRect = homeElement.getBoundingClientRect();
document.addEventListener("scroll", () => {
  homeElement.style.opacity = calOpacity(
    window.scrollY,
    homeElementRect.top,
    homeElementRect.height,
  ).toFixed(2);
});

function calOpacity(scrollY, minScroll, maxScroll) {
  const scrollRatio = 1 - (scrollY - minScroll) / (maxScroll - minScroll);
  const minOpacity = 0;
  const maxOpacity = 1;
  return minOpacity + scrollRatio * (maxOpacity - minOpacity);
}
