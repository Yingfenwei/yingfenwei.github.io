import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const root = new URL('../dist/', import.meta.url);
const source = readFileSync(new URL('content.js', root), 'utf8');
const content = runInNewContext(source + '\nhomepageContent', {}, { filename: 'dist/content.js' });

function checkTexts(entry, fields, label) {
  for (const field of fields) {
    assert.ok(typeof entry[field] === 'string' && entry[field].trim(), `${label} 缺少 ${field}`);
  }
}

function checkPdf(value, label) {
  if (!value) return;
  if (/^(?:https?:)?\/\//i.test(value)) return;
  assert.ok(statSync(new URL(value, root), { throwIfNoEntry: false })?.isFile(), `${label} 找不到 PDF 文件 ${value}`);
}

assert.ok(Array.isArray(content.news), 'news 应为列表');
for (const [index, item] of content.news.entries()) {
  const label = `news 第 ${index + 1} 条`;
  checkTexts(item, ['date', 'text'], label);
  assert.match(item.date, /^\d{4}-(0[1-9]|1[0-2])$/, `${label} 日期格式应为 YYYY-MM`);
}

assert.ok(Array.isArray(content.publications), 'publications 应为列表');
for (const [index, item] of content.publications.entries()) {
  const label = `publications 第 ${index + 1} 条`;
  checkTexts(item, ['title', 'authors', 'venue'], label);
  assert.ok(Number.isInteger(item.year), `${label} 的 year 应为整数`);
  checkPdf(item.pdf, label);
}

console.log(`内容检查通过：${content.news.length} 条动态，${content.publications.length} 篇论文。`);
