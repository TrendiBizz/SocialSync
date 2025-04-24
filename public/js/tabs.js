document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
        button.classList.add("active");
        tabContents[index].classList.add("active");
      });
    });
  } else {
    console.warn("Tab buttons or contents not found in the DOM.");
  }
});
