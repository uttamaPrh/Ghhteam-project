let nextDom = document.getElementById("next");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

let carousel_hero = document.getElementById("carousel-hero");

let dropdownDoms = document.querySelectorAll(".dropdown");

for (let index = 0; index < dropdownDoms.length; index++) {
  const element = dropdownDoms[index];
  //   console.log(element);
  element.addEventListener("mouseleave", () => {
    // console.log("unfocused");
    runNextAuto = setTimeout(() => {
      //   console.log(isSelectOpen());
      //   if (!isSelectOpen()) {
      showSlider("next");
      //   }
    }, timeAutoNext);
  });
}

function isSelectOpen() {
  let selectToggleDom = document.querySelectorAll(".dropdown-toggle");

  for (let index = 0; index < selectToggleDom.length; index++) {
    const element = selectToggleDom[index];
    if (element.classList.contains("show")) return true;
  }
  return false;
}

let runTimeOut;

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 4000;

nextDom.onclick = function (e) {
  showSlider("next");
};

let runNextAuto = setTimeout(() => {
  //   console.log(isSelectOpen());
  if (!isSelectOpen()) {
    showSlider("next");
  }
}, timeAutoNext);

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    // console.log(isSelectOpen());
    if (!isSelectOpen()) {
      nextDom.click();
    }
  }, timeAutoNext);
}
