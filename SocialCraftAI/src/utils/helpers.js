export function extractHashtags(text) {
  const tags = text.match(/#\w+/g) || [];
  const clean = text
    .replace(/#\w+/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return { clean, tags };
}
