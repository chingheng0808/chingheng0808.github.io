"use strict";
// Empty image spaces remain intentional until the named files are supplied.
for (const slot of document.querySelectorAll("[data-image]")) {
  const image = new Image();
  image.alt = slot.dataset.alt;
  image.addEventListener("load", () => {
    slot.replaceChildren(image);
    slot.removeAttribute("role");
    slot.removeAttribute("aria-label");
  });
  image.src = slot.dataset.image;
}
const linkedin = window.SITE_CONFIG?.linkedin;
if (linkedin && /^https:\/\/(www\.)?linkedin\.com\/in\//i.test(linkedin)) {
  document.querySelectorAll("[data-linkedin]").forEach(link => {
    link.href = linkedin;
    link.hidden = false;
  });
}
