const skillsElement = document.querySelector("#skills") as HTMLDivElement;
const fillGauge = (
  element: HTMLElement,
  targetPercent: number,
  duration: number,
) => {
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
};

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
