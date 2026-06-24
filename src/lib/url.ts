const rawBase = import.meta.env.BASE_URL;
const base = rawBase === '/' ? '' : rawBase.replace(/\/+$/, '');

export const url = (path: string): string => {
  if (!path.startsWith('/')) return path;
  if (path === '/') return base ? `${base}/` : '/';
  return `${base}${path}`;
};

export const absoluteUrl = (path: string, origin: string): string => {
  return new URL(url(path), origin).toString();
};
