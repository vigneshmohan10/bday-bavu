/* Vanilla JavaScript for the birthday website */
(() => {
  "use strict";

  // Personalize these two values before sharing the website.
  const HER_NAME = "Bavu Kutty";
  const YOUR_NAME = "Vicky";

  document.querySelectorAll("[data-her-name]").forEach((node) => {
    node.textContent = HER_NAME;
  });
  document.title = `For ${HER_NAME === "my love" ? "You" : HER_NAME}, Always 💜`;

  const pages = [...document.querySelectorAll("[data-page]")];
  const navLinks = [...document.querySelectorAll("[data-route]")];
  const mainNav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");

  function showPage() {
    const requested = window.location.hash.replace("#", "") || "home";
    const pageName = pages.some((page) => page.dataset.page === requested) ? requested : "home";
    pages.forEach((page) => page.classList.toggle("active", page.dataset.page === pageName));
    navLinks.forEach((link) => {
      if (link.dataset.route === pageName) link.classList.add("active");
      else link.classList.remove("active");
    });
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", showPage);
  showPage();

  // Your real photo collection. Photos from HEIC files were converted to JPG so they work in browsers.
  const PHOTO_MEMORIES = [
  {
    "src": "assets/photos/photo-01.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "A little us moment",
    "alt": "Us Together: A little us moment"
  },
  {
    "src": "assets/photos/photo-02.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Bavu, in her own light",
    "alt": "Bavu: Bavu, in her own light"
  },
  {
    "src": "assets/photos/photo-03.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "That lovely smile",
    "alt": "Bavu: That lovely smile"
  },
  {
    "src": "assets/photos/photo-04.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Birthday girl, always",
    "alt": "Bavu: Birthday girl, always"
  },
  {
    "src": "assets/photos/photo-05.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A little everyday magic",
    "alt": "Bavu: A little everyday magic"
  },
  {
    "src": "assets/photos/photo-06.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "My favourite company",
    "alt": "Us Together: My favourite company"
  },
  {
    "src": "assets/photos/photo-07.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A quiet little moment",
    "alt": "Bavu: A quiet little moment"
  },
  {
    "src": "assets/photos/photo-08.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "Side by side",
    "alt": "Us Together: Side by side"
  },
  {
    "src": "assets/photos/photo-09.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "One more memory for us",
    "alt": "Us Together: One more memory for us"
  },
  {
    "src": "assets/photos/photo-10.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "Out exploring together",
    "alt": "Us Together: Out exploring together"
  },
  {
    "src": "assets/photos/photo-11.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A candid Bavu moment",
    "alt": "Bavu: A candid Bavu moment"
  },
  {
    "src": "assets/photos/photo-12.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "Celebrating another chapter",
    "alt": "Us Together: Celebrating another chapter"
  },
  {
    "src": "assets/photos/photo-13.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "The world is nicer with you",
    "alt": "Us Together: The world is nicer with you"
  },
  {
    "src": "assets/photos/photo-14.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "A day out with my person",
    "alt": "Us Together: A day out with my person"
  },
  {
    "src": "assets/photos/photo-15.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Beautiful in her own way",
    "alt": "Bavu: Beautiful in her own way"
  },
  {
    "src": "assets/photos/photo-16.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A little splash of happiness",
    "alt": "Bavu: A little splash of happiness"
  },
  {
    "src": "assets/photos/photo-17.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "Us, just as we are",
    "alt": "Us Together: Us, just as we are"
  },
  {
    "src": "assets/photos/photo-18.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Bavu and her calm moments",
    "alt": "Bavu: Bavu and her calm moments"
  },
  {
    "src": "assets/photos/photo-19.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A smile worth saving",
    "alt": "Bavu: A smile worth saving"
  },
  {
    "src": "assets/photos/photo-20.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A little glimpse of Bavu",
    "alt": "Bavu: A little glimpse of Bavu"
  },
  {
    "src": "assets/photos/photo-21.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Her kind of moment",
    "alt": "Bavu: Her kind of moment"
  },
  {
    "src": "assets/photos/photo-22.jpg",
    "category": "little",
    "label": "LITTLE MEMORY",
    "caption": "A memory to hold close",
    "alt": "Little Memory: A memory to hold close"
  },
  {
    "src": "assets/photos/photo-23.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A night to remember",
    "alt": "Bavu: A night to remember"
  },
  {
    "src": "assets/photos/photo-24.jpg",
    "category": "little",
    "label": "LITTLE MEMORY",
    "caption": "One for the memory box",
    "alt": "Little Memory: One for the memory box"
  },
  {
    "src": "assets/photos/photo-25.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Beautiful, effortlessly",
    "alt": "Bavu: Beautiful, effortlessly"
  },
  {
    "src": "assets/photos/photo-26.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "My favourite teammate",
    "alt": "Us Together: My favourite teammate"
  },
  {
    "src": "assets/photos/photo-27.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "A frame with us in it",
    "alt": "Us Together: A frame with us in it"
  },
  {
    "src": "assets/photos/photo-28.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "A little sunshine",
    "alt": "Bavu: A little sunshine"
  },
  {
    "src": "assets/photos/photo-29.jpg",
    "category": "little",
    "label": "LITTLE MEMORY",
    "caption": "A memory from the early days",
    "alt": "Little Memory: A memory from the early days"
  },
  {
    "src": "assets/photos/photo-30.jpg",
    "category": "little",
    "label": "LITTLE MEMORY",
    "caption": "Little Bavu memories",
    "alt": "Little Memory: Little Bavu memories"
  },
  {
    "src": "assets/photos/photo-31.jpg",
    "category": "little",
    "label": "LITTLE MEMORY",
    "caption": "A tiny chapter from the past",
    "alt": "Little Memory: A tiny chapter from the past"
  },
  {
    "src": "assets/photos/photo-32.jpg",
    "category": "little",
    "label": "LITTLE MEMORY",
    "caption": "Growing through the years",
    "alt": "Little Memory: Growing through the years"
  },
  {
    "src": "assets/photos/photo-33.jpg",
    "category": "bavu",
    "label": "BAVU",
    "caption": "Her portrait, her moment",
    "alt": "Bavu: Her portrait, her moment"
  },
  {
    "src": "assets/photos/photo-34.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "A moment to keep",
    "alt": "Us Together: A moment to keep"
  },
  {
    "src": "assets/photos/photo-35.jpg",
    "category": "together",
    "label": "US TOGETHER",
    "caption": "Everyday moments with you",
    "alt": "Us Together: Everyday moments with you"
  }
];
  const gallery = document.getElementById("photoGallery");
  const galleryFilters = [...document.querySelectorAll(".gallery-filter")];
  const lightbox = document.getElementById("photoLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let visiblePhotoCards = [];
  let lightboxIndex = 0;

  function renderGallery(filter = "all") {
    gallery.innerHTML = "";
    const childhoodFirst = ["assets/photos/photo-30.jpg", "assets/photos/photo-31.jpg"];
    const categoryOrder = { little: 0, bavu: 1, together: 2 };
    const chosen = PHOTO_MEMORIES
      .filter((photo) => filter === "all" || photo.category === filter)
      .slice()
      .sort((a, b) => {
        const aChild = childhoodFirst.indexOf(a.src);
        const bChild = childhoodFirst.indexOf(b.src);
        if (aChild !== -1 || bChild !== -1) {
          if (aChild === -1) return 1;
          if (bChild === -1) return -1;
          return aChild - bChild;
        }
        return (categoryOrder[a.category] ?? 9) - (categoryOrder[b.category] ?? 9);
      });
    chosen.forEach((photo, index) => {
      const card = document.createElement("figure");
      card.className = "memory-card gallery-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Open photo: ${photo.caption}`);
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;
      // Eager-load this small, personal gallery for more reliable display in iOS Safari.
      img.loading = "eager";
      img.decoding = "async";
      img.onerror = () => {
        card.classList.add("image-load-error");
        img.style.display = "none";
        const fallback = document.createElement("span");
        fallback.className = "image-load-fallback";
        fallback.textContent = "Photo temporarily unavailable";
        card.append(fallback);
      };
      const caption = document.createElement("figcaption");
      const tag = document.createElement("span");
      tag.textContent = photo.label;
      const title = document.createElement("strong");
      title.textContent = photo.caption;
      caption.append(tag, title);
      card.append(img, caption);
      card.addEventListener("click", () => openLightbox(index, chosen));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openLightbox(index, chosen); }
      });
      gallery.append(card);
    });
    visiblePhotoCards = chosen;
  }

  function openLightbox(index, photos = visiblePhotoCards) {
    visiblePhotoCards = photos;
    lightboxIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
  }
  function updateLightbox() {
    const photo = visiblePhotoCards[lightboxIndex];
    if (!photo) return;
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;
    lightboxCaption.textContent = `${photo.caption} · ${lightboxIndex + 1} of ${visiblePhotoCards.length}`;
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex - 1 + visiblePhotoCards.length) % visiblePhotoCards.length;
    updateLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % visiblePhotoCards.length;
    updateLightbox();
  });
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if (event.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });
  galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
      galleryFilters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderGallery(button.dataset.filter);
    });
  });
  renderGallery();

  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  // Accordion-style love letters: one open at a time.
  document.querySelectorAll(".letter-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const wasOpen = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".letter-trigger").forEach((other) => {
        other.setAttribute("aria-expanded", "false");
        other.nextElementSibling.classList.remove("open");
      });
      if (!wasOpen) {
        button.setAttribute("aria-expanded", "true");
        button.nextElementSibling.classList.add("open");
      }
    });
  });

  // Birthday cake: wish button and candle interaction.
  const cakeScene = document.querySelector(".cake-scene");
  const wishButton = document.getElementById("wishButton");
  const candleButton = document.getElementById("candleButton");
  const wishMessage = document.getElementById("wishMessage");
  wishButton.addEventListener("click", () => {
    wishMessage.textContent = "May every beautiful thing find its way to you, Bavu Kutty. Happy birthday — with love, Vicky. 💜";
    wishButton.textContent = "Wish sent into the universe ✨";
  });
  candleButton.addEventListener("click", () => {
    const blown = cakeScene.classList.toggle("blown");
    candleButton.textContent = blown ? "Light the candles again" : "Blow out the candles";
    if (blown) {
      wishMessage.textContent = "Wish made, Bavu. Now let the magic begin. ✨";
      createConfetti();
    } else {
      wishMessage.textContent = "Your little flames are glowing again. 🕯️";
    }
  });

  // Tiny celebratory confetti made with DOM + CSS-free inline styling.
  function createConfetti() {
    const colors = ["#9d79c2", "#e7b9d4", "#f4d8a3", "#c5afe0", "#ffffff"];
    for (let i = 0; i < 32; i++) {
      const piece = document.createElement("span");
      piece.textContent = i % 4 === 0 ? "♡" : "✦";
      Object.assign(piece.style, {
        position: "fixed", zIndex: "100", left: `${Math.random() * 100}vw`, top: "-24px",
        color: colors[i % colors.length], fontSize: `${12 + Math.random() * 14}px`,
        pointerEvents: "none", transition: `transform ${2 + Math.random() * 2}s ease-in, opacity 2.5s ease-in`,
        opacity: "1"
      });
      document.body.appendChild(piece);
      requestAnimationFrame(() => {
        piece.style.transform = `translate(${Math.random() * 100 - 50}px, ${window.innerHeight + 60}px) rotate(${Math.random() * 500}deg)`;
        piece.style.opacity = "0";
      });
      window.setTimeout(() => piece.remove(), 4300);
    }
  }

  // Background music loops continuously. Try audible autoplay first; if the browser blocks it,
  // start muted (muted autoplay is commonly allowed) and let the single button unmute it.
  const music = document.getElementById("backgroundMusic");
  const musicToggle = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");

  function updateMusicButton() {
    const muted = music.muted;
    musicIcon.innerHTML = muted
      ? '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path class="mute-slash" d="m16 9 5 6m0-6-5 6"/>'
      : '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>';
    musicToggle.classList.toggle("playing", !music.paused && !muted);
    musicToggle.setAttribute("aria-label", muted ? "Unmute background music" : "Mute background music");
    musicToggle.setAttribute("title", muted ? "Unmute music" : "Mute music");
  }

  music.loop = true;
  music.autoplay = true;
  music.preload = "auto";
  music.muted = false;
  updateMusicButton();
  const startMusic = async () => {
    try {
      await music.play();
    } catch (error) {
      // Browser autoplay policies may block sound until a visitor interacts.
      music.muted = true;
      try { await music.play(); } catch (_) { /* The mute button can retry after interaction. */ }
      updateMusicButton();
    }
  };
  startMusic();

  musicToggle.addEventListener("click", async () => {
    if (music.paused) {
      try { await music.play(); } catch (_) { /* Keep the control available for retry. */ }
    }
    music.muted = !music.muted;
    updateMusicButton();
  });
  music.addEventListener("play", updateMusicButton);
  music.addEventListener("pause", updateMusicButton);
  music.addEventListener("volumechange", updateMusicButton);

  // Keep the signature customizable for the final love letter if you want to use it.
  document.documentElement.dataset.signature = YOUR_NAME;
})();
