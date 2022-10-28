let workList = document.querySelectorAll(".work-list li");
for (const list of workList) {
  list.addEventListener("click", () => {
    console.log(list);
    for (const list of workList) {
      list.classList.remove("work-active");
    }
    if(list.className === "work-active"){
      list.classList.remove("work-active");
    }else {
      list.classList.add("work-active");
    }
  });
}

// // 스크롤시 특정 영역 감지 이벤트 (09.21)
// // 스크롤 이벤트 감지 -> 해당 스크롤 범위 내에서 class 추가
// // 창 크기 변경 시 높이 계산 다시하기 (09.22)
// let aboutTop = document.getElementById("about").offsetTop;
// let projectTop = document.getElementById("project").offsetTop;
// window.addEventListener("resize", () => {
//   aboutTop = document.getElementById("about").offsetTop;
//   projectTop = document.getElementById("project").offsetTop;
// });
// window.addEventListener("scroll", () => {
//   window.scrollY > -1 && window.scrollY < aboutTop
//     ? document.getElementById("gnb_home").classList.add("pg_active")
//     : document.getElementById("gnb_home").classList.remove("pg_active");
//   window.scrollY >= aboutTop && window.scrollY < projectTop
//     ? document.getElementById("gnb_about").classList.add("pg_active")
//     : document.getElementById("gnb_about").classList.remove("pg_active");
//   window.scrollY >= projectTop
//     ? document.getElementById("gnb_project").classList.add("pg_active")
//     : document.getElementById("gnb_project").classList.remove("pg_active");
// });

// // project (09.21)
// const projectList = document.getElementsByClassName("proejct-list");
// const projectTabs = document.querySelectorAll(".project-cate li label");
// const projects = document.querySelectorAll(".project-thumb");
// const projectsArr = Object.values(projects);
// for (const tab of projectTabs) {
//   tab.addEventListener("click", (e) => {
//     const name = e.target.innerText;
//     if (name === "All") {
//       projectsArr.map((item) => item.classList.remove("hidden"));
//       return;
//     }
//     projectsArr.map((item) =>
//       name !== item.getAttribute("data-item")
//         ? item.classList.add("hidden")
//         : item.classList.remove("hidden")
//     );
//   });
// }
// projectList.innerHTML = projectsArr;

// // gallery slide
// const tabLists = document.querySelectorAll(".tab_contents li");
// const tabBtns = document.querySelectorAll(".tab_btn");
// for (const list of tabLists) {
//   const tabBtn = list.querySelector(".tab_btn");
//   tabBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     for (const list of tabLists) {
//       list.classList.remove("tab_active");
//     }
//     event.target.parentNode.classList.add("tab_active");
//   });
// }
