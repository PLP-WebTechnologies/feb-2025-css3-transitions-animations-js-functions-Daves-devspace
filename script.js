// Load theme from localStorage
window.onload = () => {
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.add(`${theme}-theme`);
};

// Toggle theme and store in localStorage
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  const newTheme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", newTheme);

  // Trigger animation on image
  const img = document.getElementById("animImage");
  img.classList.remove("bounce"); // reset if already applied
  void img.offsetWidth; // force reflow
  img.classList.add("bounce");
});
