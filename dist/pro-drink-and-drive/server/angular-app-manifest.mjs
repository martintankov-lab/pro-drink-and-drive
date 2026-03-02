
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-LHQLGZWN.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-AUJXNAIR.js"
  ]
},
  assets: {
    'index.csr.html': {size: 34146, hash: 'ff1b7f5bb1950f478766190d05d37dee6a5d7f5810c8c3c460f9a4b039ccd2d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27573, hash: 'e52b759a61a09d4c3e65059a051de06aa1a911eb72221be75cfbe8a6dd1d6875', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};
