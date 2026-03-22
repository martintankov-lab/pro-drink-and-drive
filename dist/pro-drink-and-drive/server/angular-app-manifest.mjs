
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-AZI3QNSS.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-CDXK5ZPQ.js"
  ]
},
  assets: {
    'index.csr.html': {size: 36218, hash: '5640c1758f43fd3120afac6742c5cb7281aca1d6513cc825707f112d92c701be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29654, hash: '8ad69a13162b7abbf16cc454051c4f92a0df433ba2c06094d082eb57598264a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WYVYTWJ2.css': {size: 7634, hash: '4IxfU0V69Os', text: () => import('./assets-chunks/styles-WYVYTWJ2_css.mjs').then(m => m.default)}
  },
};
