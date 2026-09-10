// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.herbertandjacks.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.herbertandjacks.com/","title_tag":"Safety microwave, time limited microwave | Herbert & Jack's","meta_description":"Brand new modified 700W safety microwave with mechanical timer and fool proof design to prevent burning and fire alarms in sheltered accommodation."},{"page_url":"https://www.herbertandjacks.com/home","title_tag":"Safety microwave, time limited microwave | Herbert & Jack's","meta_description":"Modified 700W safety microwave with mechanical timer and hard stop to prevent burning, smoke and fire alarms. Ideal for sheltered accommodation in the UK."},{"page_url":"https://www.herbertandjacks.com/why-a-saftey-microwave","title_tag":"Safety microwave to prevent burning | Herbert & Jack's","meta_description":"Learn how our time limited, fool proof safety microwave modification reduces fire alarm callouts in sheltered accommodation and assisted living settings."},{"page_url":"https://www.herbertandjacks.com/about-us","title_tag":"Safety microwave innovation story | Herbert & Jack's","meta_description":"Discover how Herbert & Jack's created a time limited safety microwave for sheltered accommodation, using a fool proof mechanical timer modification."},{"page_url":"https://www.herbertandjacks.com/partners","title_tag":"Fire alarm prevention partners | Herbert & Jack's","meta_description":"Herbert & Jack's partners with NHS and safety organisations to supply modified safety microwaves that prevent burning and reduce fire alarm callouts."},{"page_url":"https://www.herbertandjacks.com/contact-8","title_tag":"Contact safety microwave experts | Herbert & Jack's","meta_description":"Contact Herbert & Jack's about our time limited safety microwave with mechanical timer and fool proof design for sheltered accommodation and care settings."},{"page_url":"https://www.herbertandjacks.com/product-page/limited-time-microwave-3-minute-maximum","title_tag":"Limited time safety microwave 700W | Herbert & Jack's","meta_description":"Buy a brand new 700W modified safety microwave with mechanical timer, hard stop and fool proof design to prevent burning and smoke alarms in UK homes."},{"page_url":"https://www.herbertandjacks.com/copy-of-privacy-policy","title_tag":"Safety microwave terms & conditions | Herbert & Jack's","meta_description":"Read Herbert & Jack's terms for modified safety microwaves, including UK microwave modification warranty details and conditions of sale."},{"page_url":"https://www.herbertandjacks.com/copy-of-terms-and-conditions","title_tag":"Safety microwave returns policy | Herbert & Jack's","meta_description":"View our returns and refunds policy for modified safety microwaves, covering damage in transit and our 12‑month UK microwave modification warranty."}],"keywords":["safety microwave","time limited microwave","modified microwave","700W microwave","prevent burning","sheltered accommodation","mechanical timer","fool proof design","fire alarm prevention","UK microwave modification"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.herbertandjacks.com/#product",
  "name": "Herbert & Jack's limited time safety microwave",
  "description": "Brand new modified 700W Curry's microwave with a mechanical timer and hard stop, time-limited to prevent burning and smoke alarms. Available with maximum time limits of 3, 4 or 5 minutes, ideal for sheltered accommodation and assisted living.",
  "url": "https://www.herbertandjacks.com/",
  "brand": {
    "@type": "Brand",
    "name": "Herbert & Jack's",
    "logo": "https://static.wixstatic.com/media/05ea92_5f3b61638a31483899ac5b5e48311a89%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/05ea92_5f3b61638a31483899ac5b5e48311a89%7Emv2.jpg"
  },
  "image": [
    "https://static.wixstatic.com/media/05ea92_23d3c2fc17e147da865411a5f769234f~mv2.png/v1/crop/x_35,y_0,w_2035,h_1517/fill/w_373,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PXL_20241112_141806559~2_edited_edited.png"
  ],
  "sku": "limited-time-microwave",
  "category": "Microwave oven",
  "offers": {
    "@type": "Offer",
    "url": "https://www.herbertandjacks.com/product-page/limited-time-microwave-3-minute-maximum",
    "price": "120.00",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Amazing conversion, no more fire alarms with my 95 year old mother cooking everything for 30 minutes!! Friendly and super fast posting, thank you so so much",
      "author": {
        "@type": "Person",
        "name": "Neil949"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "The microwave is neat and easy to use. Its such a relief to know it can't be left on for too long.",
      "author": {
        "@type": "Person",
        "name": "Rutlockw00O"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "This is a fantastic product for my father who has dementia and can no longer control the amount of time he puts his microwave on for. Excellent service!",
      "author": {
        "@type": "Person",
        "name": "Fiwe58"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Great idea, this will be really helpful for my elderly father.",
      "author": {
        "@type": "Person",
        "name": "purplepantsman"
      }
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": "Richard Farr Consulting Ltd t/a Herbert & Jack's",
    "url": "https://www.herbertandjacks.com/",
    "logo": "https://static.wixstatic.com/media/05ea92_5f3b61638a31483899ac5b5e48311a89%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/05ea92_5f3b61638a31483899ac5b5e48311a89%7Emv2.jpg"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
