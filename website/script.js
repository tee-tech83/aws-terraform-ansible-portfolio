const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const interactiveItems = document.querySelectorAll(".interactive, .nav-links a, .btn");

interactiveItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursorGlow.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    cursorGlow.classList.remove("active");
  });
});