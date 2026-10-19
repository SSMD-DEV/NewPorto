const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");

if (menuToggle instanceof HTMLButtonElement && navigationLinks instanceof HTMLUListElement) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    navigationLinks.classList.toggle("is-open", !isOpen);
  });

  navigationLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
      navigationLinks.classList.remove("is-open");
    }
  });
}

const CONTACT_EMAIL = "serignesalioumdieng@gmail.com";

document.querySelectorAll(".contact-form").forEach((form) => {
  if (!(form instanceof HTMLFormElement)) return;

  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) {
        status.textContent = "Merci de compléter correctement tous les champs.";
        status.className = "form-status is-error is-visible";
      }
      return;
    }

    const data = new FormData(form);
    const nom = String(data.get("nom") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const sujet = String(data.get("sujet") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(sujet || `Message de ${nom}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\nSujet : ${sujet}\n\n${message}`,
    );

    if (status) {
      status.textContent =
        "Votre messagerie va s’ouvrir avec le message pré-rempli : il ne reste plus qu’à envoyer.";
      status.className = "form-status is-success is-visible";
    }

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
  });
});
