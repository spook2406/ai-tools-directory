window.TOOLS = [
  // Writing
  { name: "ChatGPT", category: "Writing", desc: "General-purpose AI chat for drafting, rewriting, brainstorming, and Q&A.", url: "https://chatgpt.com", free: "Freemium" },
  { name: "Google Gemini", category: "Writing", desc: "Google's multimodal AI assistant for writing, research, and image understanding.", url: "https://gemini.google.com", free: "Freemium" },
  { name: "Microsoft Copilot", category: "Writing", desc: "AI assistant integrated with Bing and Microsoft 365 workflows.", url: "https://copilot.microsoft.com", free: "Freemium" },
  { name: "DeepL Write", category: "Writing", desc: "AI writing improvement and translation with natural phrasing.", url: "https://www.deepl.com/write", free: "Freemium" },
  { name: "Grammarly", category: "Writing", desc: "Grammar, clarity, and tone checker for emails and documents.", url: "https://www.grammarly.com", free: "Freemium" },
  { name: "Hemingway Editor", category: "Writing", desc: "Highlights complex sentences so your copy becomes clearer and bolder.", url: "https://hemingwayapp.com", free: "Free web" },

  // Image
  { name: "Photopea", category: "Image", desc: "Browser Photoshop alternative for PSD, XD, Sketch, and photo edits.", url: "https://www.photopea.com", free: "Free + ads" },
  { name: "remove.bg", category: "Image", desc: "One-click background removal for product shots and portraits.", url: "https://www.remove.bg", free: "Freemium" },
  { name: "TinyPNG", category: "Image", desc: "Smart compression for PNG and JPEG without obvious quality loss.", url: "https://tinypng.com", free: "Freemium" },
  { name: "iLoveIMG", category: "Image", desc: "Batch resize, crop, convert, and compress images in the browser.", url: "https://www.iloveimg.com", free: "Freemium" },
  { name: "Coolors", category: "Image", desc: "Fast color palette generator for branding and UI mockups.", url: "https://coolors.co", free: "Freemium" },
  { name: "Fontjoy", category: "Image", desc: "AI-assisted font pairing suggestions for design projects.", url: "https://fontjoy.com", free: "Free" },

  // Code
  { name: "agent-qa", category: "Code", desc: "Natural-language web and mobile QA via CLI/MCP, with advanced memidex memory and evidence-based test improvement.", url: "https://vostride.com", free: "Free CLI (FSL-1.1-ALv2); model costs extra" },
  { name: "GitHub Copilot", category: "Code", desc: "AI pair programmer that suggests code and completes functions in your IDE.", url: "https://github.com/features/copilot", free: "Paid / student free" },
  { name: "Cursor", category: "Code", desc: "AI-first code editor built for agentic coding and large codebases.", url: "https://cursor.com", free: "Freemium" },
  { name: "v0 by Vercel", category: "Code", desc: "Generate UI components from prompts, optimized for React and Tailwind.", url: "https://v0.dev", free: "Freemium" },
  { name: "Replit", category: "Code", desc: "Cloud IDE to build and host apps with AI assistance in the browser.", url: "https://replit.com", free: "Freemium" },
  { name: "StackBlitz", category: "Code", desc: "Instant online IDE for frontend frameworks with WebContainers.", url: "https://stackblitz.com", free: "Freemium" },
  { name: "CodeSandbox", category: "Code", desc: "Online sandbox for prototyping web apps and sharing demos.", url: "https://codesandbox.io", free: "Freemium" },
  { name: "regex101", category: "Code", desc: "Interactive regex tester with explanations and unit tests.", url: "https://regex101.com", free: "Free" },
  { name: "Carbon", category: "Code", desc: "Create beautiful source-code screenshots for docs and social posts.", url: "https://carbon.now.sh", free: "Free" },
  { name: "Hugging Face", category: "Code", desc: "Open models, datasets, Spaces demos, and ML community hub.", url: "https://huggingface.co", free: "Freemium" },

  // Productivity
  { name: "Notion", category: "Productivity", desc: "All-in-one notes, wikis, and lightweight databases for teams.", url: "https://www.notion.so", free: "Freemium" },
  { name: "Excalidraw", category: "Productivity", desc: "Hand-drawn style whiteboard for diagrams and brainstorming.", url: "https://excalidraw.com", free: "Free" },
  { name: "Figma", category: "Productivity", desc: "Collaborative UI design and prototyping in the browser.", url: "https://www.figma.com", free: "Freemium" },
  { name: "Otter.ai", category: "Productivity", desc: "Meeting transcription and AI summaries for calls and interviews.", url: "https://otter.ai", free: "Freemium" },
  { name: "Fireflies.ai", category: "Productivity", desc: "AI notetaker that records meetings and extracts action items.", url: "https://fireflies.ai", free: "Freemium" },
  { name: "Desmos", category: "Productivity", desc: "Powerful free graphing calculator for math and teaching.", url: "https://www.desmos.com/calculator", free: "Free" },
  { name: "Dillinger", category: "Productivity", desc: "Clean online Markdown editor with export to HTML and PDF.", url: "https://dillinger.io", free: "Free" },
  { name: "JSON Formatter", category: "Productivity", desc: "Validate, beautify, and inspect JSON payloads quickly.", url: "https://jsonformatter.org", free: "Free" },

  // SEO
  { name: "Google Search Console", category: "SEO", desc: "Official Google tool to monitor indexing, queries, and site health.", url: "https://search.google.com/search-console", free: "Free" },
  { name: "PageSpeed Insights", category: "SEO", desc: "Lab + field performance scores powered by Lighthouse and CrUX.", url: "https://pagespeed.web.dev", free: "Free" },
  { name: "Ahrefs Webmaster Tools", category: "SEO", desc: "Free site audit and backlink overview for verified properties.", url: "https://ahrefs.com/webmaster-tools", free: "Free tier" },
  { name: "Screaming Frog SEO Spider", category: "SEO", desc: "Desktop crawler for technical SEO audits (free tier available).", url: "https://www.screamingfrog.co.uk/seo-spider/", free: "Freemium" },
  { name: "GTmetrix", category: "SEO", desc: "Waterfall performance reports and recommendations for faster pages.", url: "https://gtmetrix.com", free: "Freemium" },
  { name: "WebAIM Contrast Checker", category: "SEO", desc: "Check text/background contrast for WCAG accessibility compliance.", url: "https://webaim.org/resources/contrastchecker/", free: "Free" }
];

(function () {
  const grid = document.getElementById("tool-grid");
  const search = document.getElementById("search");
  const empty = document.getElementById("empty");
  const countEl = document.getElementById("visible-count");
  if (!grid) return;

  const cats = ["All", "Writing", "Image", "Code", "Productivity", "SEO"];
  let active = "All";
  let query = "";

  const filters = document.getElementById("filters");
  cats.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "filter-btn" + (c === "All" ? " active" : "");
    b.textContent = c;
    b.dataset.cat = c;
    b.addEventListener("click", () => {
      active = c;
      filters.querySelectorAll(".filter-btn").forEach((x) => x.classList.toggle("active", x.dataset.cat === c));
      render();
    });
    filters.appendChild(b);
  });

  function render() {
    const q = query.trim().toLowerCase();
    let n = 0;
    grid.querySelectorAll(".tool-card").forEach((card) => {
      const cat = card.dataset.category;
      const text = (card.dataset.name + " " + card.dataset.desc).toLowerCase();
      const okCat = active === "All" || cat === active;
      const okQ = !q || text.includes(q);
      const show = okCat && okQ;
      card.classList.toggle("hidden", !show);
      if (show) n++;
    });
    if (countEl) countEl.textContent = String(n);
    if (empty) empty.classList.toggle("show", n === 0);
  }

  TOOLS.forEach((t) => {
    const a = document.createElement("article");
    a.className = "tool-card";
    a.dataset.category = t.category;
    a.dataset.name = t.name;
    a.dataset.desc = t.desc;
    a.innerHTML =
      '<div class="tool-top"><h3></h3><span class="cat-tag"></span></div>' +
      "<p></p><span style=\"font-size:.78rem;color:var(--muted)\"></span>" +
      '<a class="btn" rel="noopener noreferrer" target="_blank">Visit site →</a>';
    a.querySelector("h3").textContent = t.name;
    a.querySelector(".cat-tag").textContent = t.category;
    a.querySelector("p").textContent = t.desc;
    a.querySelector("span[style]").textContent = t.free;
    const link = a.querySelector("a.btn");
    link.href = t.url;
    grid.appendChild(a);
  });

  search.addEventListener("input", () => {
    query = search.value;
    render();
  });
  render();
})();
