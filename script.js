
"use strict";

// BOOSTORA Business Spotlight website settings
const CONFIG = {
  whatsappNumber: "2348033034396",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb8mfTd8KMqmIYT9Sd3p",
  telegramChannel: "https://t.me/boostorabusinessspotlight"
};

// Open WhatsApp with a prefilled message.
function openWhatsApp(message) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    alert("WhatsApp contact is not configured yet.");
    return;
  }

  const url =
    "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

// Package buttons: each message includes the exact package and price.
document.querySelectorAll(".btn-package").forEach((button) => {
  button.addEventListener("click", () => {
    const packageName = button.dataset.package;
    const price = Number(button.dataset.price);

    if (!packageName || !Number.isFinite(price)) {
      alert("Sorry, this package is not configured correctly.");
      return;
    }

    const message = [
      "Hello BOOSTORA Business Spotlight!",
      "",
      "I want to enquire about this promotion package:",
      "Package: " + packageName,
      "Price: ₦" + price.toLocaleString("en-NG"),
      "",
      "Please tell me the next steps and how to submit my business details."
    ].join("\n");

    openWhatsApp(message);
  });
});

// Custom package enquiry.
const customEnquiry = document.getElementById("customEnquiry");

if (customEnquiry) {
  customEnquiry.addEventListener("click", () => {
    openWhatsApp(
      "Hello BOOSTORA Business Spotlight!\n\n" +
      "I would like to enquire about a custom business promotion.\n\n" +
      "Please tell me the available options and pricing."
    );
  });
}

// Floating WhatsApp contact button.
const floatingWhatsApp = document.getElementById("floatingWhatsApp");

if (floatingWhatsApp) {
  floatingWhatsApp.href =
    "https://wa.me/" + CONFIG.whatsappNumber.replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(
      "Hello BOOSTORA Business Spotlight! I would like to enquire about promoting my business."
    );

  floatingWhatsApp.target = "_blank";
  floatingWhatsApp.rel = "noopener noreferrer";
}

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Automatically display the current year.
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
