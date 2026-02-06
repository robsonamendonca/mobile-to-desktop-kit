const toggle = document.querySelector("[data-theme-toggle]");
const label = document.querySelector("[data-theme-label]");

const getPreferredTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  if (toggle) toggle.setAttribute("aria-pressed", theme === "dark");
  if (label) label.textContent = theme === "dark" ? "Escuro" : "Claro";
};

applyTheme(getPreferredTheme());

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}
