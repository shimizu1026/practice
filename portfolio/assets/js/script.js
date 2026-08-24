"use strict";

const contentsEl = document.getElementById("js-contents");
const navLinks = document.querySelectorAll(".nav__link[data-category]");

let allWorks = [];

const escapeHtml = (value) => {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

const formatTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags.map(escapeHtml).join("、");
  }

  return escapeHtml(tags ?? "");
};

const normalizeCategory = (category) => String(category ?? "").trim().toLowerCase();

const getInitialCategory = () => {
  const params = new URLSearchParams(window.location.search);
  return normalizeCategory(params.get("category") || "all");
};

const filterWorks = (category) => {
  if (category === "all") {
    return allWorks;
  }

  return allWorks.filter(
    (work) => normalizeCategory(work.category) === category
  );
};

const updateNavState = (category) => {
  navLinks.forEach((link) => {
    const linkCategory = normalizeCategory(link.dataset.category ?? "all");
    const isCurrent = linkCategory === category;

    link.classList.toggle("is-current", isCurrent);
    link.setAttribute("aria-current", isCurrent ? "page" : "false");
  });
};

const updateUrl = (category) => {
  const url = new URL(window.location.href);

  if (category === "all") {
    url.searchParams.delete("category");
  } else {
    url.searchParams.set("category", category);
  }

  window.history.replaceState(null, "", url);
};

const renderArticle = (work) => {
  const title = escapeHtml(work.title);
  const url = escapeHtml(work.url);
  const year = escapeHtml(work.year);
  const tags = formatTags(work.tags);
  const imageUrl = escapeHtml(work.thumbnail?.url ?? "");
  const imageWidth = work.thumbnail?.width ?? 370;
  const imageHeight = work.thumbnail?.height ?? 250;

  return `
    <article class="article">
      <a href="${url}" class="article__link" target="_blank" rel="noopener noreferrer">
        <div class="article__media">
          <img
            src="${imageUrl}"
            alt=""
            class="article__image"
            width="${imageWidth}"
            height="${imageHeight}"
          />
        </div>
        <h2 class="article__title">${title}</h2>
        <p class="article__tags">${tags}</p>
        <p class="article__year">${year}</p>
      </a>
    </article>
  `;
};

const fetchAllWorks = async () => {
  const config = window.MICROCMS_CONFIG;

  if (!config?.serviceDomain || !config?.apiKey) {
    throw new Error("config.js に serviceDomain と apiKey を設定してください。");
  }

  const endpoint = `https://${config.serviceDomain}.microcms.io/api/v1/works`;
  const response = await fetch(endpoint, {
    headers: {
      "X-MICROCMS-API-KEY": config.apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`記事の取得に失敗しました (${response.status})`);
  }

  const data = await response.json();
  return data.contents ?? [];
};

const renderWorks = (category = "all") => {
  if (!contentsEl) {
    return;
  }

  const works = filterWorks(category);

  if (works.length === 0) {
    contentsEl.innerHTML = "<p>記事がありません。</p>";
    return;
  }

  contentsEl.innerHTML = works.map(renderArticle).join("");
};

const switchCategory = (category) => {
  const normalizedCategory = normalizeCategory(category);

  updateNavState(normalizedCategory);
  updateUrl(normalizedCategory);
  renderWorks(normalizedCategory);
};

const init = async () => {
  if (!contentsEl) {
    return;
  }

  contentsEl.innerHTML = "<p>読み込み中...</p>";

  try {
    allWorks = await fetchAllWorks();
    switchCategory(getInitialCategory());
  } catch (error) {
    contentsEl.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    switchCategory(link.dataset.category ?? "all");
  });
});

init();
