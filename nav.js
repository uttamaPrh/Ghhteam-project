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
