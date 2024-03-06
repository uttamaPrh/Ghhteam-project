const search_menu_open_btns = document.querySelectorAll(
  ".search-menu-open-btn"
);

const search_menu_close_btn = document.getElementById("search-menu-close-btn");

const search_menu = document.getElementById("search-menu");

// search_menu_open_btn.addEventListener("click", () => {
//   search_menu.style.display = "flex";
// });
search_menu_close_btn.addEventListener("click", () => {
  search_menu.style.display = "none";
});

for (let index = 0; index < search_menu_open_btns.length; index++) {
  search_menu_open_btns[index].addEventListener("click", () => {
    search_menu.style.display = "flex";
  });
}

const change_location_options = document
  .getElementsByClassName("change-location-menu")[0]
  .querySelectorAll("li");

let nepal_ph = document.getElementById("nepal-ph");
let bhutan_ph = document.getElementById("bhutan-ph");
let china_ph = document.getElementById("china-ph");
let japan_ph = document.getElementById("japan-ph");

for (let index = 0; index < change_location_options.length; index++) {
  change_location_options[index].addEventListener("click", (e) => {
    const country_text = e.currentTarget.innerText
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
    show_country_ph(country_text);
  });
}

function show_country_ph(country_ph) {
  switch (country_ph) {
    case "nepal": {
      nepal_ph.style.display = "block";
      bhutan_ph.style.display = "none";
      china_ph.style.display = "none";
      japan_ph.style.display = "none";
      break;
    }
    case "bhutan": {
      bhutan_ph.style.display = "block";
      nepal_ph.style.display = "none";
      china_ph.style.display = "none";
      japan_ph.style.display = "none";
      break;
    }
    case "china/tibet": {
      china_ph.style.display = "block";
      nepal_ph.style.display = "none";
      bhutan_ph.style.display = "none";
      japan_ph.style.display = "none";
      break;
    }
    case "japan": {
      japan_ph.style.display = "block";
      nepal_ph.style.display = "none";
      bhutan_ph.style.display = "none";
      china_ph.style.display = "none";
      break;
    }
  }
}
