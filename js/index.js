// 포트폴리오 탭
const workArea = document.querySelector(".portfolio");
const workTabs = workArea.querySelectorAll("[data-tab-target]");
const workConts = workArea.querySelectorAll("[data-tab-content]");
workTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    workTabs.forEach((tabs) => {
      tabs.classList.remove("tab_active");
    });
    workConts.forEach((conts) => {
      conts.classList.remove("cont_active");
    });
    tab.classList.add("tab_active");
    target.classList.add("cont_active");
  });
});


// My Plant 슬라이드 구현
const plantSlide = document.querySelectorAll(".plant_thumb li"),
  plantPrevBtn = document.querySelector(".plant_prev"),
  plantNextBtn = document.querySelector(".plant_next");
let currentplantIdx = 0;
plantPrevBtn.addEventListener("click", () => {
  moveplantSlide(currentplantIdx == 0 ? 3 : currentplantIdx - 1);
});
plantNextBtn.addEventListener("click", () => {
  moveplantSlide(currentplantIdx == 3 ? 0 : currentplantIdx + 1);
});
function moveplantSlide(num) {
  currentplantIdx = num;
  plantSlide.forEach((list) => list.classList.remove("plant_active"));
  plantSlide[num].classList.add("plant_active");
}

// Star Bang 슬라이드 구현
const vsSlide = document.querySelectorAll(".starbang_info li"),
  vsPrevBtn = document.querySelector(".starbang_info-prev"),
  vsNextBtn = document.querySelector(".starbang_info-next");
let currentVsIdx = 0;
vsPrevBtn.addEventListener("click", () => {
  moveVsSlide(currentVsIdx == 0 ? 3 : currentVsIdx - 1);
});
vsNextBtn.addEventListener("click", () => {
  moveVsSlide(currentVsIdx == 3 ? 0 : currentVsIdx + 1);
});
function moveVsSlide(num) {
  currentVsIdx = num;
  vsSlide.forEach((list) => list.classList.remove("star-info_active"));
  vsSlide[num].classList.add("star-info_active");
}

// go top
const goTopBtn = document.querySelector('.goTop');
goTopBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
})

window.addEventListener('scroll', ()=>{
  if(this.scrollY > 100){
    goTopBtn.classList.add('goTop_active');
  } else {
    goTopBtn.classList.remove('goTop_active');
  }
})