const navItems = [
  { label: "Maya", href: "index.html", key: "maya" },
  { label: "Gigs", href: "gigs.html", key: "gigs" },
  { label: "About", href: "about.html", key: "about" },
  { label: "Editorial", href: "editorial.html", key: "editorial" },
  { label: "Features", href: "features.html", key: "features" },
  { label: "Contact", href: "contact.html", key: "contact" }
];

function iconSvg(type) {
  const icons = {
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 10v8"></path><path d="M6.5 6v.1"></path><path d="M11 18v-8"></path><path d="M11 13.5c0-2.2 1.3-3.8 3.4-3.8 2 0 3.1 1.3 3.1 3.7V18"></path></svg>`,
    email: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>`,
    globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21"></path><path d="M12 3c-2.5 2.4-3.8 5.4-3.8 9S9.5 18.6 12 21"></path></svg>`
  };
  return icons[type] || "";
}

function buildSidebar() {
  const root = document.getElementById("sidebar-root");
  if (!root) return;

  const active = root.dataset.active || "maya";
  const links = navItems
    .map(item => `<a class="${item.key === active ? "active" : ""}" href="${item.href}">${item.label}</a>`)
    .join("");

  root.innerHTML = `
    <aside class="sidebar">
      <a class="signature" href="index.html" aria-label="Maya home">
        <img src="${siteConfig.logoPath}" alt="Maya signature logo" />
      </a>

      <button class="mobile-menu-button" id="mobileMenuButton" aria-expanded="false" aria-controls="siteNav">
        <span></span><span></span><span></span>
      </button>

      <nav class="side-nav" id="siteNav" aria-label="Main navigation">
        ${links}
      </nav>

      <div class="social-links" aria-label="Social links">
        <a href="${siteConfig.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${iconSvg("instagram")}</a>
        <a href="${siteConfig.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${iconSvg("linkedin")}</a>
        <a href="${siteConfig.social.email}" aria-label="Email">${iconSvg("email")}</a>
        <a href="${siteConfig.academicWebsite}" target="_blank" rel="noopener" aria-label="Academic website">${iconSvg("globe")}</a>
      </div>
    </aside>
  `;

  const button = document.getElementById("mobileMenuButton");
  const nav = document.getElementById("siteNav");
  button?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const category = grid.dataset.category;
  const images = galleryImages.filter(image => image.category === category);

  if (!images.length) {
    grid.innerHTML = `<p class="empty-note">No photographs have been added here yet.</p>`;
    return;
  }

  grid.innerHTML = images.map((image, index) => `
    <article class="gallery-item ${image.thumbType || "landscape"}" data-index="${index}" tabindex="0" role="button" aria-label="Open ${image.title}">
      <figure>
        <img src="${image.src}" alt="${image.title}" loading="lazy" />
        <figcaption>${image.title}</figcaption>
      </figure>
    </article>
  `).join("");

  const localImages = images;
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const image = localImages[currentIndex];
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    lightboxImg.src = image.src;
    lightboxImg.alt = image.title;
    lightboxCaption.textContent = image.title;
    lightbox.classList.add("open");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    document.getElementById("lightbox")?.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  function showNext(step) {
    currentIndex = (currentIndex + step + localImages.length) % localImages.length;
    openLightbox(currentIndex);
  }

  grid.querySelectorAll(".gallery-item").forEach(item => {
    const index = Number(item.dataset.index);
    item.addEventListener("click", () => openLightbox(index));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", () => showNext(-1));
  document.getElementById("lightboxNext")?.addEventListener("click", () => showNext(1));
  document.getElementById("lightbox")?.addEventListener("click", event => {
    if (event.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", event => {
    const isOpen = document.getElementById("lightbox")?.classList.contains("open");
    if (!isOpen) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext(1);
    if (event.key === "ArrowLeft") showNext(-1);
  });
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

buildSidebar();
buildGallery();
setYear();
