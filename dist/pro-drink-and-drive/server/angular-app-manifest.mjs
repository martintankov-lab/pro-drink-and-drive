
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
    "chunk-2HJAP7K2.js"
  ]
},
  assets: {
    'index.csr.html': {size: 36049, hash: '71cdf155801c6f9173828a7804966c2f438acb15144f06359f6242ca734b96fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29476, hash: 'ae0dd7fcd86b66c5ab698ec6e46d93175a6df1244b15a9eb30fd02910aed2cdf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};
