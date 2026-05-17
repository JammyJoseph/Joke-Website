(() => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      mobileNav.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });

    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setOpen(false);
    });
  }
})();
