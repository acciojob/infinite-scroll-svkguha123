//your code here!
// Get the list element
const list = document.querySelector("#infi-list");

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `List item ${i}`;
  list.appendChild(li);
}

// Add 2 more list items when the user reaches the end of the list
list.addEventListener("scroll", () => {
  const lastLi = list.lastElementChild;
  const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;
  if (pageOffset > lastLiOffset - 20) {
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = `List item ${list.children.length + i}`;
      list.appendChild(li);
    }
  }
});

