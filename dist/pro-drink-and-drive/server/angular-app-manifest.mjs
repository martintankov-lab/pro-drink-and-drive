
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
    "chunk-QUWFGY6I.js"
  ]
},
  assets: {
    'index.csr.html': {size: 34146, hash: '9e052766df3dcb726a82cc7b94b05e2df658e4cd6b35469a70f7881b8205502f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27573, hash: 'e3a0838453fb034c76f807fdc99cb1e7f8276816941649f90a1e3dc4f906c240', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};
