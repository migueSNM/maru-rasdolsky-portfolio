// Images in public/ are served from the site root, regardless of the current route.
export function photoSrc(src) {
  if (!src || /^(?:https?:)?\/\//.test(src) || src.startsWith('data:')) return src
  return `/${src.replace(/^\//, '')}`
}
