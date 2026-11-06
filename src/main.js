import "./style.css";
import { parse } from "yaml";
import raw from "../content.yaml?raw";
import { productIcon, heroScene, grain } from "./icons.js";

const c = parse(raw);

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
const pad = (n) => String(n).padStart(2, "0");
const ext = (href = "") => (/^https?:\/\//.test(href) ? ' target="_blank" rel="noopener"' : "");

const crops = `<span class="crop crop--tl" aria-hidden="true"></span><span class="crop crop--tr" aria-hidden="true"></span><span class="crop crop--bl" aria-hidden="true"></span><span class="crop crop--br" aria-hidden="true"></span>`;

/* Placeholder ou vraie image si `image` est renseigné dans content.yaml */
const visual = (image, alt, label, extra = "") =>
  image
    ? `<img src="${esc(image)}" alt="${esc(alt)}" loading="lazy" />`
    : `${extra}${grain(0.2)}${crops}<span class="visual__label mono" >${label}</span>`;

const announce = () => `
  <div class="announce mono" role="region" aria-label="Annonce">
    ${c.announcement.map((t, i) => `${i ? '<span aria-hidden="true">/</span>' : ""}<span>${esc(t)}</span>`).join("")}
  </div>`;

const header = () => `
  <header class="header">
    <div class="wrap header__inner">
      <a href="#top" class="logo" aria-label="${esc(c.brand.name)} — accueil"><span class="logo__mark" aria-hidden="true"></span>${esc(c.brand.name)}</a>
      <nav class="nav mono" aria-label="Navigation principale">
        <a href="#manifeste">Manifeste</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#collection">Collection</a>
        <a href="#construction">Construction</a>
      </nav>
      <a href="${esc(c.drop.primary_cta.href)}" class="btn btn--chalk">${esc(c.drop.primary_cta.label)} <span aria-hidden="true">→</span></a>
    </div>
  </header>`;

const hero = () => `
  <section id="top" class="hero">
    <div class="wrap hero__inner">
      <div class="hero__text">
        <div class="tags mono"><span>${esc(c.drop.label)}</span><span>${esc(c.drop.status)}</span></div>
        <div>
          <p class="hero__kicker mono">${esc(c.drop.label)} /</p>
          <h1 class="hero__title">${esc(c.drop.title).replace(" ", "<br />")}</h1>
          <p class="hero__tagline">${esc(c.brand.tagline)}</p>
        </div>
        <div class="hero__actions">
          <div class="ctas">
            <a href="${esc(c.drop.primary_cta.href)}" class="btn btn--signal">${esc(c.drop.primary_cta.label)} <span aria-hidden="true">→</span></a>
            <a href="${esc(c.drop.secondary_cta.href)}" class="btn btn--ghost">${esc(c.drop.secondary_cta.label)}</a>
          </div>
          <dl class="facts mono">
            <div><dt>Statut</dt><dd><span class="dot" aria-hidden="true"></span>Démonstration</dd></div>
            <div><dt>Lancement</dt><dd>${esc(c.drop.launch_date)}</dd></div>
            <div><dt>Pièces</dt><dd>${pad(c.products.length)} — Système</dd></div>
          </dl>
        </div>
      </div>
      <figure class="visual hero__visual">
        ${visual(c.drop.hero_image, c.drop.name, "<span>[ Visuel hero à venir ]</span><span>Silhouette en mouvement · béton · flash direct</span>", heroScene())}
      </figure>
    </div>
  </section>`;

const manifesto = () => `
  <section id="manifeste" class="section section--light">
    <div class="wrap manifesto">
      <p class="manifesto__side mono">01 — Manifeste</p>
      <div class="manifesto__main">
        <h2 class="h2 manifesto__title">${esc(c.manifesto.title)}<br /><em>${esc(c.manifesto.title_accent)}</em></h2>
        <p class="manifesto__text">${esc(c.manifesto.text)}</p>
        <ol class="territory">
          ${c.brand.territory.map((t, i) => `<li><span class="mono">T.${pad(i + 1)}</span><strong>${esc(t)}</strong></li>`).join("")}
        </ol>
      </div>
    </div>
  </section>`;

const horizons = ["72%", "58%", "40%", "66%", "82%"];
const tones = ["#1e1e1d", "#262625", "#232322", "#1c1c1b", "#2a2a29"];

const lookbook = () => `
  <section id="lookbook" class="section section--bordered">
    <div class="wrap">
      <div class="head">
        <div><p class="eyebrow mono">02 — Lookbook</p><h2 class="h2">${esc(c.lookbook.title).replace(" ", "<br />")}</h2></div>
        <p>${esc(c.lookbook.intro)}</p>
      </div>
      <div class="looks">
        ${c.lookbook.looks
          .map(
            (l, i) => `
          <figure class="look">
            <div class="visual" style="background:${tones[i % tones.length]}">
              ${visual(l.image, l.caption, "[ Visuel à venir ]", `<span class="horizon" style="top:${horizons[i % horizons.length]}" aria-hidden="true"></span>`)}
            </div>
            <figcaption class="mono"><span>${esc(l.code)}</span><span>${esc(l.caption)}</span></figcaption>
          </figure>`
          )
          .join("")}
      </div>
    </div>
  </section>`;

const products = () => `
  <section id="collection" class="section section--bordered">
    <div class="wrap">
      <div class="head">
        <div><p class="eyebrow mono">03 — Collection</p><h2 class="h2">Quatre pièces.<br />Un système.</h2></div>
        <p>Prix, matières exactes, stocks et dates restent à confirmer. Toutes les pièces sont présentées à titre de démonstration.</p>
      </div>
      <div class="products">
        ${c.products
          .map(
            (p, i) => `
          <article class="product">
            <div class="visual">
              ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" />` : `${grain(0.16)}<span class="product__index mono">P.${pad(i + 1)}</span>${productIcon(p.icon)}`}
            </div>
            <div class="product__body">
              <div class="product__top"><h3>${esc(p.name)}</h3><span class="product__layer mono">${esc(p.layer)}</span></div>
              <p>${esc(p.description)}</p>
              <div class="product__meta mono"><span>${esc(p.status)}</span><span>${esc(p.price)}</span></div>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </div>
  </section>`;

const construction = () => `
  <section id="construction" class="section section--light">
    <div class="wrap construction">
      <div class="construction__intro">
        <p class="eyebrow mono">04 — Construction</p>
        <h2 class="h2">${esc(c.construction.title).replace(" des ", "<br />des ")}</h2>
        <p>${esc(c.construction.intro)}</p>
        <div class="layers mono" aria-hidden="true">
          ${[...c.products].reverse().map((p, i) => `<div><span>${esc(p.layer.replace(" /", ""))}</span>${i === 0 ? "<i></i>" : ""}</div>`).join("")}
        </div>
      </div>
      <dl class="specs">
        ${c.construction.specs
          .map((s) => `<div><dt class="mono">${esc(s.label)}</dt><dd>${esc(s.value)}${s.note ? ` <span>${esc(s.note)}</span>` : ""}</dd></div>`)
          .join("")}
      </dl>
    </div>
  </section>`;

const access = () => `
  <section id="access" class="access">
    <div class="wrap access__inner">
      <div class="access__head">
        <p class="eyebrow mono">05 — Accès anticipé</p>
        <h2 class="access__title">${esc(c.access.title).replace(" arrive", "<br />arrive")}</h2>
      </div>
      <div class="access__body">
        <p>${esc(c.access.text)}</p>
        <div id="access-slot"></div>
      </div>
    </div>
    <div class="wrap" aria-hidden="true"><div class="outline-word">${esc(c.brand.name)}</div></div>
  </section>`;

const footer = () => `
  <footer>
    <div class="wrap footer__inner">
      <div class="footer__top">
        <div class="footer__brand"><strong>${esc(c.brand.name)}</strong><span>${esc(c.brand.tagline)}</span></div>
        <nav class="footer__links mono" aria-label="Liens du site">
          ${c.footer.links.map((l) => `<a href="${esc(l.href)}"${ext(l.href)}>${esc(l.label)}${ext(l.href) ? " ↗" : ""}</a>`).join("")}
        </nav>
      </div>
      <div class="footer__bottom mono">
        <span>${esc(c.footer.copyright)}</span>
        <div class="footer__legal">${c.footer.legal.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join("")}</div>
      </div>
    </div>
  </footer>`;

document.querySelector("#app").innerHTML =
  announce() + header() + `<main>${hero()}${manifesto()}${lookbook()}${products()}${construction()}${access()}</main>` + footer();

/* Formulaire d'accès anticipé — visuel uniquement (backend_required: false) */
const slot = document.querySelector("#access-slot");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function renderForm(value = "") {
  slot.innerHTML = `
    <form class="form" novalidate>
      <label for="hc-email" class="mono">${esc(c.access.input_label)}</label>
      <div class="form__row">
        <input id="hc-email" type="email" name="email" autocomplete="email" placeholder="nom@exemple.fr" aria-describedby="hc-error" value="${esc(value)}" />
        <button type="submit" class="btn btn--signal">${esc(c.access.button_label)}</button>
      </div>
      <p id="hc-error" class="form__error" role="alert"></p>
      <p class="form__note mono">${esc(c.access.reassurance)}</p>
    </form>`;
  const form = slot.querySelector("form");
  const input = form.querySelector("input");
  const error = form.querySelector("#hc-error");
  input.addEventListener("input", () => {
    error.textContent = "";
    input.removeAttribute("aria-invalid");
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!EMAIL.test(input.value.trim())) {
      error.textContent = "Entre une adresse email valide.";
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }
    renderConfirm();
  });
}

function renderConfirm() {
  slot.innerHTML = `
    <div class="confirm" role="status">
      <div class="confirm__status mono"><i aria-hidden="true"></i>Inscription enregistrée</div>
      <p>${esc(c.access.confirmation_message)}</p>
      <button type="button" class="linkbtn mono">Utiliser une autre adresse</button>
    </div>`;
  slot.querySelector("button").addEventListener("click", () => {
    renderForm();
    slot.querySelector("input").focus();
  });
}

renderForm();
