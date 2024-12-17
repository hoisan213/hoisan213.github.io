// Отримуємо елементи
var modal = document.getElementById("modalWind");
var btn = document.querySelector(".watch-demo");
var span = document.querySelector(".modal-wind-close");

// Коли користувач натискає на кнопку, відкриваємо модальне вікно
btn.onclick = function(event) {
  event.preventDefault();  // Запобігаємо переходу по посиланню
  modal.style.display = "block";
}

// Коли користувач натискає на "X", закриваємо модальне вікно
span.onclick = function() {
  modal.style.display = "none";
}

// Коли користувач натискає будь-де за межами модального вікна, закриваємо його
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "Mark Smith",
      title: "Мандрівник-ентузіаст",
      text: "Моя співпраця з цією компанією була надзвичайно приємною! Від початку до кінця процес був організований на найвищому рівні. Я отримав все, що очікував, і навіть більше.",
      stars: 5,
      avatar: "media/feedback1.png",
    },
    {
      name: "Anna Johnson",
      title: "Письменниця-любителька подорожей",
      text: "Я працюю з різними постачальниками послуг, але ця команда просто перевершила всі мої очікування. Вони надзвичайно детально підійшли до кожного етапу роботи, від дизайну до реалізації.",
      stars: 4,
      avatar: "media/feedback2.png",
    },
    {
      name: "John Doe",
      title: "Блогер-цифровий ентузіаст",
      text: "Ця компанія — справжні професіонали своєї справи. Я працював з ними над кількома великими проектами, і кожен раз я отримував не лише високоякісні послуги, а й чудову підтримку на кожному етапі.",
      stars: 5,
      avatar: "media/feedback3.png",
    },
  ];

  let currentIndex = 0;

  const avatarEl = document.querySelector(".testimonials-avatar img");
  const nameEl = document.querySelector(".testimonials-client-name");
  const titleEl = document.querySelector(".testimonials-client-title");
  const textEl = document.querySelector(".testimonials-text");
  const starsEl = document.querySelector(".testimonials-stars");
  const dots = document.querySelectorAll(".testimonials-dot");

  const updateTestimonial = (index) => {
    const testimonial = testimonials[index];
    avatarEl.src = testimonial.avatar;

    titleEl.innerHTML = `<span class="testimonials-feedname">${testimonial.name}</span> / ${testimonial.title}`;

    textEl.textContent = testimonial.text;

    starsEl.innerHTML =
      '<i class="fa-solid fa-star fa-sm" style="color: #facd49;"></i>'.repeat(
        testimonial.stars
      ) +
      '<i class="fa-regular fa-star fa-sm" style="color: #facd49;"></i>'.repeat(
        5 - testimonial.stars
      );

    dots.forEach((dot, idx) => {
      dot.classList.toggle("testimonials-dot-active", idx === index);
    });
  };

  document
    .querySelector(".testimonials-left-arrow")
    .addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentIndex);
    });

  document
    .querySelector(".testimonials-right-arrow")
    .addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial(currentIndex);
    });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  updateTestimonial(currentIndex);
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 404 page

anime({
  targets: ".row svg",
  translateY: 10,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
});

anime({
  targets: "#zero",
  translateX: 10,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
  scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
  rotateY: { value: "+=180", delay: 200 },
});
