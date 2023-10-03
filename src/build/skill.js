"use strict";
const skillsElement = document.querySelector("#skills");
const fillGauge = (element, targetPercent, duration) => {
    let startPercent = parseFloat(element.style.width) || 0;
    let startTime = 0;
    function animate(currentTime) {
        if (!startTime)
            startTime = currentTime;
        let elapsedTime = currentTime - startTime;
        let percentComplete = Math.min(1, elapsedTime / duration);
        let currentPercent = startPercent + percentComplete * (targetPercent - startPercent);
        element.style.width = currentPercent + "%";
        if (percentComplete < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
};
const skillSectionObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fillGauge(document.querySelector(".java"), 80, 1000);
            fillGauge(document.querySelector(".spring"), 75, 1000);
            fillGauge(document.querySelector(".mySQL"), 70, 1000);
            fillGauge(document.querySelector(".javaScript"), 80, 1000);
            fillGauge(document.querySelector(".react"), 60, 1000);
        }
    });
}, { threshold: 0.8 });
skillSectionObs.observe(skillsElement);
