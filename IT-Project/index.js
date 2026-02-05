document.addEventListener("click", function (event)
 {
  // check if clicked cell tag has tag td,
  //  if so then get parent element and define as row
  if (event.target.tagName === "TD") {
    const row = event.target.parentElement;

    // for rows with id "noreq" get background color of row
    if (row.id === "noreq") {
      const bg = window.getComputedStyle(row).backgroundColor;

      // Toggles color if background is white
      //  toggles color to white if green
      if (bg === "rgb(255, 255, 255)") {
        row.style.backgroundColor = "lightgreen";
      } else {
        row.style.backgroundColor = "white";
      }
    }
  }
});