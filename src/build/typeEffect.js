"use strict";
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".strong", { speed: 100, loop: true })
    .type("Web Developer", { delay: 2000 })
    .move(null, { to: "START" })
    .type("Amazing" + " ", { delay: 2000 })
    .move(null, { to: "END" })
    .pause(1000)
    .delete()
    .type("Front-End Developer", { delay: 2000 })
    .move(-10)
    .delete(9)
    .type("Back-End", { delay: 2000 })
    .delete(8)
    .type("Junior Web", { delay: 2000 })
    .move(null, { to: "END" })
    .pause(7000)
    .delete()
    .go();
});
