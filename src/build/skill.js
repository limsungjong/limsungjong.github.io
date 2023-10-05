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
const javaBar = skillsElement.querySelector(".java");
const springBar = skillsElement.querySelector(".spring");
const mySQLBar = skillsElement.querySelector(".mySQL");
const javaScriptBar = skillsElement.querySelector(".javaScript");
const reactBar = skillsElement.querySelector(".react");
const fillGaugeSkillBarObs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fillGauge(javaBar, 80, 1000);
            fillGauge(springBar, 75, 1000);
            fillGauge(mySQLBar, 70, 1000);
            fillGauge(javaScriptBar, 80, 1000);
            fillGauge(reactBar, 60, 1000);
        }
        else {
            javaBar.style.width = "0";
            springBar.style.width = "0";
            mySQLBar.style.width = "0";
            javaScriptBar.style.width = "0";
            reactBar.style.width = "0";
        }
    });
}, { threshold: 0.5 });
fillGaugeSkillBarObs.observe(skillsElement);
