import "../styles.css";
export default function globalDOM() {
  let grid = document.createElement("div");
  grid.classList.add("contentGrid");

  let header = document.createElement("div");
  header.classList.add("header");

  let searchBar = document.createElement("input");
  searchBar.classList.add("searchBar");
  searchBar.type = "text";
  searchBar.placeholder = "Enter City";

  let submitBtn = document.createElement("btn");
  submitBtn.type = "submit";
  submitBtn.textContent = "🔍";
  submitBtn.classList.add("submitBtn");

  header.appendChild(searchBar);
  header.appendChild(submitBtn);

  let content = document.createElement("div");
  content.classList.add("content");

  grid.appendChild(header);
  grid.appendChild(content);
  document.body.appendChild(grid);
}
