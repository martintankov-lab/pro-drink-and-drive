
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-W57PRG54.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-4ERDAAW7.js"
  ]
},
  assets: {
    'index.csr.html': {size: 36218, hash: 'c91561ed4dc9fcd5ea9b3b75e0ef634556d3491730c63950772732729c3a0c9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29654, hash: '4061832c373753cd3b577dbe146a6b60442514f32fccd58ffd4ca3c076099b64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GSZAAIJO.css': {size: 7614, hash: 'yqPz6akG9EI', text: () => import('./assets-chunks/styles-GSZAAIJO_css.mjs').then(m => m.default)}
  },
};
