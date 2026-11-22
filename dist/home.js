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
const firstRecentYear = new Date().getFullYear() - 1;
const paperArchive = element("details", "", "archive");
let olderPaperCount = 0;
let currentYear;
let yearList;
for (const paper of [...homepageContent.publications].sort((a, b) => b.year - a.year)) {
  if (paper.year !== currentYear) {
    currentYear = paper.year;
    const group = element("section", "", "year-group");
    yearList = element("div");
    group.append(element("h3", String(currentYear)), yearList);
    const container = currentYear < firstRecentYear ? paperArchive : papers;
    container.append(group);
  }
  const item = element("article", "", "paper");
  const meta = element("div", "", "paper-meta");
  meta.append(element("span", paper.venue, "venue"));
  if (paper.url) meta.append(link(chinese ? "出版商页面" : "Publisher", paper.url));
  if (paper.pdf) meta.append(link("PDF", paper.pdf));
  const title = element("h4", chinese && paper.titleZh ? paper.titleZh : paper.title);
  title.lang = chinese && paper.titleZh ? "zh-CN" : "en";
  item.append(title, element("p", paper.authors, "authors"), meta);
  yearList.append(item);
  if (paper.year < firstRecentYear) olderPaperCount++;
}

if (olderPaperCount) {
  const label = chinese ? `更早论文（${olderPaperCount} 篇）` : `Earlier publications (${olderPaperCount})`;
  paperArchive.prepend(element("summary", label));
  papers.append(paperArchive);
}

const updates = document.querySelector("#updates");
const dateFormat = new Intl.DateTimeFormat(language, {month: "short", year: "numeric", timeZone: "UTC"});
const sortedNews = [...homepageContent.news].sort((a, b) => b.date.localeCompare(a.date));
const visibleNewsCount = 3;

function newsRow(news) {
  const row = element("li");
  const time = element("time", dateFormat.format(new Date(news.date + "-01T00:00:00Z")));
  time.dateTime = news.date;
  const text = chinese && news.textZh ? news.textZh : news.text;
  const content = news.url ? link(text, news.url) : element("span", text);
  content.lang = chinese && news.textZh ? "zh-CN" : "en";
  row.append(time, content);
  return row;
}

for (const item of sortedNews.slice(0, visibleNewsCount)) {
  updates.append(newsRow(item));
}

const olderNews = sortedNews.slice(visibleNewsCount);
if (olderNews.length) {
  const archive = element("details", "", "archive");
  const label = chinese ? `更早动态（${olderNews.length}）` : `Earlier news (${olderNews.length})`;
  const summary = element("summary", label);
  const list = element("ul");
  for (const item of olderNews) list.append(newsRow(item));
  archive.append(summary, list);
  updates.after(archive);
}
