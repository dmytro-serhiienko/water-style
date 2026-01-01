document.addEventListener("click", (event) => {
  let i = document.createElement("i");
  i.setAttribute("class", "pulse");
  document.body.appendChild(i);
  i.style.top = event.pageY + "px";
  i.style.left = event.pageX + "px";

  // remove
  setTimeout(() => {
    document.body.removeChild(i);
  }, 1000);
});
