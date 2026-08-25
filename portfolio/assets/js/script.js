"use strict";

const contentsEl = document.getElementById("js-contents");
const navLinks = document.querySelectorAll(".nav__link[data-category]");
const workDialog = document.getElementById("js-work-dialog");
const workDialogClose = document.getElementById("js-work-dialog-close");
const workDialogImage = document.getElementById("js-work-dialog-image");
const workDialogTitle = document.getElementById("js-work-dialog-title");
const workDialogDescription = document.getElementById("js-work-dialog-description");
const workDialogRole = document.getElementById("js-work-dialog-role");
const workDialogAiWrap = document.getElementById("js-work-dialog-ai-wrap");
const workDialogAi = document.getElementById("js-work-dialog-ai");
const workDialogLink = document.getElementById("js-work-dialog-link");

let allWorks = [];
const worksById = new Map();

const escapeHtml = (value) => {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

const formatUsedAi = (usedAi) => {
  if (Array.isArray(usedAi)) {
    return usedAi.join("・");
  }

  return String(usedAi ?? "").trim();
};

const formatTagsText = (tags) => {
  if (Array.isArray(tags)) {
    return tags.join("・");
  }

  return String(tags ?? "").replaceAll("、", "・");
};

const formatTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags.map(escapeHtml).join("、");
  }

  return escapeHtml(tags ?? "");
};

const normalizeCategory = (category) => {
  if (Array.isArray(category)) {
    return String(category[0] ?? "").trim().toLowerCase();
  }

  return String(category ?? "").trim().toLowerCase();
};

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
  const tags = formatTags(work.tags);
  const year = escapeHtml(work.year);
  const imageUrl = escapeHtml(work.thumbnail?.url ?? "");
  const imageWidth = work.thumbnail?.width ?? 370;
  const imageHeight = work.thumbnail?.height ?? 250;

  return `
    <article class="article" data-work-id="${escapeHtml(work.id)}">
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
    </article>
  `;
};

const bindArticleTriggers = () => {
  contentsEl?.querySelectorAll(".article[data-work-id]").forEach((article) => {
    article.addEventListener("click", () => {
      const work = worksById.get(article.dataset.workId);

      if (work) {
        openWorkDialog(work);
      }
    });
  });
};

const openWorkDialog = (work) => {
  if (!workDialog) {
    return;
  }

  const category = normalizeCategory(work.category);
  const isBanner = category === "banner";
  const isWebsite = category === "website";

  workDialog.classList.toggle("work-dialog--banner", isBanner);

  workDialogTitle.textContent = work.title ?? "";
  workDialogDescription.textContent = work.description ?? "";
  workDialogRole.textContent = formatTagsText(work.tags);

  const usedAi = formatUsedAi(work.usedAi);

  if (usedAi) {
    workDialogAi.textContent = usedAi;
    workDialogAiWrap.hidden = false;
  } else {
    workDialogAi.textContent = "";
    workDialogAiWrap.hidden = true;
  }

  if (work.thumbnail?.url) {
    workDialogImage.src = work.thumbnail.url;
    workDialogImage.hidden = false;

    if (work.thumbnail.width) {
      workDialogImage.width = work.thumbnail.width;
    } else {
      workDialogImage.removeAttribute("width");
    }

    if (work.thumbnail.height) {
      workDialogImage.height = work.thumbnail.height;
    } else {
      workDialogImage.removeAttribute("height");
    }
  } else {
    workDialogImage.removeAttribute("src");
    workDialogImage.removeAttribute("width");
    workDialogImage.removeAttribute("height");
    workDialogImage.hidden = true;
  }

  if (isWebsite && work.url) {
    workDialogLink.href = work.url;
    workDialogLink.hidden = false;
  } else {
    workDialogLink.removeAttribute("href");
    workDialogLink.hidden = true;
  }

  workDialog.showModal();
};

const closeWorkDialog = () => {
  workDialog?.close();
};

const fetchAllWorks = async () => {
  const config = window.MICROCMS_CONFIG;

  if (!config?.serviceDomain || !config?.apiKey) {
    throw new Error("config.js に serviceDomain と apiKey を設定してください。");
  }

  const endpoint = new URL(
    `https://${config.serviceDomain}.microcms.io/api/v1/works`
  );
  endpoint.searchParams.set("limit", "100");
  endpoint.searchParams.set("orders", "-publishedAt");

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
  bindArticleTriggers();
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
    worksById.clear();
    allWorks.forEach((work) => {
      worksById.set(work.id, work);
    });
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

workDialogClose?.addEventListener("click", closeWorkDialog);

workDialog?.addEventListener("click", (event) => {
  const rect = workDialog.getBoundingClientRect();
  const isInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!isInDialog) {
    closeWorkDialog();
  }
});

workDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeWorkDialog();
});

init();
