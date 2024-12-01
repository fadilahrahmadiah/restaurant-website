function scrollSlider(direction) {
    const slider = document.querySelector(".slider-container");
    const slideWidth = slider.querySelector(".slide").offsetWidth; // Lebar satu slide termasuk margin
    const scrollAmount = slideWidth + 20; // Tambahkan margin antar slide (gap)
    const maxScroll = slider.scrollWidth - slider.clientWidth; // Hitung batas scroll maksimum

    let newScrollPosition = slider.scrollLeft + (direction * scrollAmount);

    if (newScrollPosition < 0) {
        newScrollPosition = 0;
    } else if (newScrollPosition > maxScroll) {
        newScrollPosition = maxScroll;
    }

    slider.scrollTo({
        left: newScrollPosition,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    fadeElements.forEach((el) => observer.observe(el));
  });
