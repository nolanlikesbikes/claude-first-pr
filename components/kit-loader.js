/*
 * Lightweight in-browser loader for the Keen design-system components.
 * Fetches each component's .jsx source, strips ES module import/export
 * syntax (there are no cross-component imports — only React), transforms
 * with Babel standalone, and evals in the global scope so each component
 * becomes available as window.<Name>. Populates window.Keen as a
 * namespace object mirroring all loaded components.
 *
 * This stands in for the platform's automatic design-system bundler so
 * cards and UI kits render standalone, straight from source — no
 * hand-duplicated component logic.
 */
window.runBabelApp = function runBabelApp(scriptId) {
  const src = document.getElementById(scriptId).textContent;
  const compiled = Babel.transform(src, { presets: [['react', { runtime: 'classic' }]] }).code;
  (0, eval)(compiled);
};

window.loadKeenComponents = async function loadKeenComponents(paths) {
  window.Keen = window.Keen || {};
  for (const path of paths) {
    const res = await fetch(path);
    if (!res.ok) {
      console.warn('[Keen loader] could not fetch', path);
      continue;
    }
    let src = await res.text();
    src = src.replace(/^import .*$/gm, '');
    src = src.replace(/export function/g, 'function');
    src = src.replace(/export const/g, 'var');
    src = src.replace(/export class/g, 'class');
    const compiled = Babel.transform(src, { presets: [['react', { runtime: 'classic' }]], sourceType: 'script' }).code;
    (0, eval)(compiled);
    const m = src.match(/(?:function|var|class)\s+([A-Z]\w*)/);
    if (m) window.Keen[m[1]] = window[m[1]];
  }
  return window.Keen;
};
