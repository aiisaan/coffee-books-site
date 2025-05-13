document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const visitBtn = document.getElementById("visit-btn");
  const buyButtons = document.querySelectorAll(".product-card button");

  // Відкрити модальне вікно при натисканні на кнопку "ВІДВІДАТИ КАВ’ЯРНЮ"
  visitBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Відкрити модальне вікно при натисканні на кнопки "ПРИДБАТИ В КАВ'ЯРНІ"
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  // Закриття модального вікна по хрестику
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закриття модального вікна по кліку поза ним
  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
