"use strict";
// home 스크롤 이벤트(페이지 아래로 내리면 홈 섹션 투명도 조절)
const homeElement = document.querySelector("#home .container");
document.addEventListener("scroll", () => {
    homeElement.style.opacity = calOpacity(window.scrollY, AllSectionsRect.header.top, AllSectionsRect.home.height).toFixed(2);
});
function calOpacity(scrollY, minScroll, maxScroll) {
    const scrollRatio = 1 - (scrollY - minScroll) / (maxScroll - minScroll);
    const minOpacity = 0;
    const maxOpacity = 1;
    return minOpacity + scrollRatio * (maxOpacity - minOpacity);
}
// arrow up 스크롤 이벤트(아래로 스크롤 내리면 애로우 업 버튼 토글)
const arrowUpBtn = document.querySelector(".arrowUp");
arrowUpBtn.addEventListener("click", () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
});
document.addEventListener("scroll", () => {
    if (window.scrollY < AllSectionsRect.home.height) {
        arrowUpBtn.classList.add("hide");
    }
    else {
        arrowUpBtn.classList.remove("hide");
    }
});
