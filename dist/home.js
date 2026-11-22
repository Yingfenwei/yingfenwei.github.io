function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(label, url) {
  const anchor = element("a", label, "article-link");
  anchor.href = url;
  return anchor;
}

const language = document.documentElement.lang;
const chinese = language === "zh-CN";
const papers = document.querySelector("#papers");
const fullList = papers.dataset.list === "all";
const yearLinks = document.querySelector(".year-links");
const firstRecentYear = new Date().getFullYear() - 1;
const paperArchive = element("details", "", "archive");
let olderPaperCount = 0;
let currentYear;
let yearList;
for (const paper of [...homepageContent.publications].sort((a, b) => b.year - a.year)) {
  if (!fullList && paper.selected === false) continue;
  const archived = !fullList && paper.year < firstRecentYear;
  if (paper.year !== currentYear) {
    currentYear = paper.year;
    const group = element("section", "", "year-group");
    yearList = element("div");
    group.append(element(fullList ? "h2" : "h3", String(currentYear)), yearList);
    if (yearLinks) {
      group.id = `year-${currentYear}`;
      yearLinks.append(link(String(currentYear), `#${group.id}`));
    }
    const container = archived ? paperArchive : papers;
    container.append(group);
  }
  const item = element("article", "", "paper");
  const meta = element("div", "", "paper-meta");
  meta.append(element("span", paper.venue, "venue"));
  if (fullList && paper.citation) meta.append(element("span", paper.citation));
  if (paper.url) meta.append(link(chinese ? "出版商页面" : "Publisher", paper.url));
  if (paper.pdf) meta.append(link("PDF", paper.pdf));
  const translatedTitle = !fullList && chinese && paper.titleZh;
  const title = element(fullList ? "h3" : "h4", translatedTitle || paper.title);
  title.lang = translatedTitle ? "zh-CN" : "en";
  const authors = element("p", "", "authors");
  authors.lang = "en";
  const [before, name, after] = paper.authors.split(/(Yingfen Wei[*#]?)/);
  authors.append(before);
  if (name) authors.append(element("strong", name), after);
  item.append(title, authors, meta);
  yearList.append(item);
  if (archived) olderPaperCount++;
}

if (olderPaperCount) {
  const label = chinese ? `更早论文（${olderPaperCount} 篇）` : `Earlier publications (${olderPaperCount})`;
  paperArchive.prepend(element("summary", label));
  papers.append(paperArchive);
}

function newsRow(news, dateFormat) {
  const row = element("li");
  const time = element("time", dateFormat.format(new Date(news.date + "-01T00:00:00Z")));
  time.dateTime = news.date;
  const text = chinese && news.textZh ? news.textZh : news.text;
  const content = news.url ? link(text, news.url) : element("span", text);
  content.lang = chinese && news.textZh ? "zh-CN" : "en";
  row.append(time, content);
  return row;
}

const updates = document.querySelector("#updates");
if (updates) {
  const dateFormat = new Intl.DateTimeFormat(language, {month: "short", year: "numeric", timeZone: "UTC"});
  const sortedNews = [...homepageContent.news].sort((a, b) => b.date.localeCompare(a.date));
  const visibleNewsCount = 3;

  for (const item of sortedNews.slice(0, visibleNewsCount)) {
    updates.append(newsRow(item, dateFormat));
  }

  const olderNews = sortedNews.slice(visibleNewsCount);
  if (olderNews.length) {
    const archive = element("details", "", "archive");
    const label = chinese ? `更早动态（${olderNews.length}）` : `Earlier news (${olderNews.length})`;
    const summary = element("summary", label);
    const list = element("ul");
    for (const item of olderNews) list.append(newsRow(item, dateFormat));
    archive.append(summary, list);
    updates.after(archive);
  }
}
