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

  /* ---------- Filtro de projetos / certificações ---------- */
  (function () {
    const chips = document.querySelectorAll(".filter-chip");
    const cards = document.querySelectorAll("[data-category]");
    if (!chips.length || !cards.length) return;

    const cardsArray = Array.from(cards);

    function embaralhar(array) {
      const resultado = [...array];
      for (let i = resultado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
      }
      return resultado;
    }

    function aplicarFiltro(categoria) {
      // Animação de saída
      cards.forEach((card) => card.classList.remove("in"));

      setTimeout(() => {
        let exibidos = cardsArray.filter((card) => {
          return categoria === "Todas" ||
            card.getAttribute("data-category") === categoria;
        });

        // Embaralha apenas quando mostra "Todas"
        if (categoria === "Todas") {
          exibidos = embaralhar(exibidos);
        }

        // Esconder todos primeiro
        cards.forEach((card) => {
          card.style.display = "none";
          card.classList.remove("reveal", "in");
        });

        // Mostrar os que correspondem com animação de entrada
        exibidos.forEach((card, index) => {
          card.style.display = "";
          card.classList.add("reveal");
          card.style.setProperty("--d", `${index * 0.06}s`);
          requestAnimationFrame(() => card.classList.add("in"));
        });
      }, 150);
    }

    const removeFilter = document.getElementById("removeFilter");

    function mostrarRemoveFilter(visível) {
      if (visível) {
        removeFilter.classList.add("visible");
      } else {
        removeFilter.classList.remove("visible");
      }
    }

    function aplicarFiltro(categoria) {
      // Animação de saída
      cards.forEach((card) => card.classList.remove("in"));

      setTimeout(() => {
        let exibidos = cardsArray.filter((card) => {
          return categoria === "Todas" ||
            card.getAttribute("data-category") === categoria;
        });

        // Embaralha apenas quando mostra "Todas"
        if (categoria === "Todas") {
          exibidos = embaralhar(exibidos);
        }

        // Esconder todos primeiro
        cards.forEach((card) => {
          card.style.display = "none";
          card.classList.remove("reveal", "in");
        });

        // Mostrar os que correspondem com animação de entrada
        exibidos.forEach((card, index) => {
          card.style.display = "";
          card.classList.add("reveal");
          card.style.setProperty("--d", `${index * 0.06}s`);
          requestAnimationFrame(() => card.classList.add("in"));
        });

        // Mostrar/esconder o botão X
        mostrarRemoveFilter(categoria !== "Todas");
      }, 150);
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const categoria = chip.getAttribute("data-category");
        const jaEstaAtivo = chip.classList.contains("active");

        // Clicar no filtro já ativo volta para "Todas"
        const categoriaEfetiva = jaEstaAtivo ? "Todas" : categoria;

        chips.forEach((c) => c.classList.remove("active"));

        const alvo =
          categoriaEfetiva === "Todas"
            ? document.querySelector('.filter-chip[data-category="Todas"]')
            : chip;
        if (alvo) alvo.classList.add("active");

        aplicarFiltro(categoriaEfetiva);
      });
    });

    removeFilter.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      const todas = document.querySelector('.filter-chip[data-category="Todas"]');
      if (todas) todas.classList.add("active");
      aplicarFiltro("Todas");
    });
  })();
})();
