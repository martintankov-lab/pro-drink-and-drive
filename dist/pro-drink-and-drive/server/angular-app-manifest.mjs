
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
    "chunk-463Q56M2.js"
  ]
},
  assets: {
    'index.csr.html': {size: 36218, hash: 'ac7a53052f009cda6e39f5c50ea13213140b6cd6b27e219859ed8629b99ed925', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29654, hash: '7d86dae6b6a82e425c27a870c0a995001faf41566c573bd99949e2295e18a77f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WYVYTWJ2.css': {size: 7634, hash: '4IxfU0V69Os', text: () => import('./assets-chunks/styles-WYVYTWJ2_css.mjs').then(m => m.default)}
  },
};
