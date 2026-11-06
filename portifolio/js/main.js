/* ============================================================
   Davi Miguel — Interações da landing page
   ============================================================ */

(function () {
  "use strict";

  const html = document.documentElement;

  /* ---------- Tema claro / escuro ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("dm-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    html.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("dm-theme", next);
  });

  /* ---------- Menu mobile ---------- */
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navLinks");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });

  navMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navMenu.classList.remove("open");
      menuBtn.classList.remove("open");
    }
  });

  /* ---------- Animações de entrada ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* Fallback: se algo falhar, mostra o conteúdo */
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add("in");
      });
    }, 400);
  });
})();
