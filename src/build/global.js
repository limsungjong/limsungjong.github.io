"use strict";
const AllSectionsRect = {
    header: document.querySelector(".header").getBoundingClientRect(),
    home: document.querySelector("#home").getBoundingClientRect(),
    about: document.querySelector("#about").getBoundingClientRect(),
    journeys: document.querySelector("#journeys").getBoundingClientRect(),
    skills: document.querySelector("#skills").getBoundingClientRect(),
    projects: document.querySelector("#projects").getBoundingClientRect(),
    contact: document.querySelector("#contact").getBoundingClientRect(),
};
const AllSectionsThreshold = {
    home: { threshold: 0.7 },
    about: { threshold: 0.5 },
    journeys: { threshold: 0.3 },
    skills: { threshold: 0.5 },
    projects: { threshold: 0.9 },
    contact: { threshold: 0.8 },
};
