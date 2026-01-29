document.addEventListener("click", function (event)
 {
  // Make sure a table cell was clicked
  if (event.target.tagName === "TD") {
    const row = event.target.parentElement;

    // Only toggle if the row has id="noreq"
    if (row.id === "noreq") {
      const bg = window.getComputedStyle(row).backgroundColor;

      // Toggle between white and green
      if (bg === "rgb(255, 255, 255)") {
        row.style.backgroundColor = "lightgreen";
      } else {
        row.style.backgroundColor = "white";
      }
    }
  }
});