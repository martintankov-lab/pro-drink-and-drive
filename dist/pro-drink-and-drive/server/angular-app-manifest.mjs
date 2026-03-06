
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-RFAHL67O.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-XMWGELL7.js"
  ]
},
  assets: {
    'index.csr.html': {size: 36049, hash: 'ff56b65bdb4ea554b6fc5314b7d7e4b971646d3e6a55c664f1e7ff7cb978be30', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29476, hash: '212bd579363e10f5e96c1507cc4c164e5967a3ab0e44fe47ddbb84d3466be244', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};
