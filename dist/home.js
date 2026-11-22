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

function reportLink(source) {
  return link(chinese && source.labelZh ? source.labelZh : source.label, source.url);
}

const reportsByPaper = new Map();
for (const news of homepageContent.news) {
  if (!news.paperUrl || !news.sources?.length) continue;
  const reports = reportsByPaper.get(news.paperUrl) ?? new Map();
  for (const source of news.sources) reports.set(source.url, source);
  reportsByPaper.set(news.paperUrl, reports);
}

const papers = document.querySelector("#papers");
const standalone = Boolean(papers.closest("main.catalogue"));
const yearLinks = document.querySelector(".year-links");
const firstRecentYear = new Date().getFullYear() - 1;
const paperArchive = element("details", "", "archive");
let olderPaperCount = 0;
let currentYear;
let yearList;
for (const paper of [...homepageContent.publications].sort((a, b) => b.year - a.year)) {
  const archived = !standalone && paper.year < firstRecentYear;
  if (paper.year !== currentYear) {
    currentYear = paper.year;
    const group = element("section", "", "year-group");
    yearList = element("div");
    group.append(element(standalone ? "h2" : "h3", String(currentYear)), yearList);
    group.id = `year-${currentYear}`;
    const yearLink = link(String(currentYear), `#${group.id}`);
    if (archived) yearLink.addEventListener("click", () => { paperArchive.open = true; });
    yearLinks.append(yearLink);
    const container = archived ? paperArchive : papers;
    container.append(group);
  }
  const item = element("article", "", "paper");
  const meta = element("div", "", "paper-meta");
  meta.append(element("span", paper.venue, "venue"));
  if (paper.citation) meta.append(element("span", paper.citation));
  if (paper.url) meta.append(link(chinese ? "出版商页面" : "Publisher", paper.url));
  if (paper.pdf) meta.append(link("PDF", paper.pdf));
  for (const source of reportsByPaper.get(paper.url)?.values() ?? []) {
    meta.append(reportLink(source));
  }
  const title = element(standalone ? "h3" : "h4", paper.title);
  title.lang = "en";
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
  const content = news.url && !news.image ? link("", news.url) : element("span");
  const segments = text.split(/\*([^*]+)\*/);
  segments.forEach((segment, index) => {
    content.append(index % 2 === 1 ? element("em", segment) : segment);
  });
  content.lang = chinese && news.textZh ? "zh-CN" : "en";
  if (news.lead && content.lang === "en") content.prepend(element("strong", news.lead), " ");
  const copy = element("div");
  copy.append(content);
  const sources = element("div", "", "news-sources");
  const reports = news.sources ?? [];
  if (news.image && news.url && !reports.some(report => report.url === news.url)) {
    sources.append(link(chinese ? "新闻原文" : "News release", news.url));
  }
  for (const report of reports) {
    sources.append(reportLink(report));
  }
  if (news.paperUrl) sources.append(link(chinese ? "阅读论文" : "Read the paper", news.paperUrl));
  if (sources.childElementCount) copy.append(sources);
  row.append(time);
  if (news.image) {
    const body = element("div", "", "illustrated-news");
    const figure = element("figure", "", "news-figure");
    const image = element("img");
    image.src = news.image;
    image.alt = chinese ? "查看完整新闻配图" : "View full-size news image";
    image.loading = "lazy";
    const fullSize = element("a");
    fullSize.href = news.image;
    fullSize.append(image);
    if (news.imageCredit) fullSize.title = news.imageCredit;
    figure.append(fullSize);
    body.append(copy, figure);
    row.append(body);
  } else {
    row.append(copy);
  }
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
