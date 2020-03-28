const svg = {
  blockquote: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><g transform="translate(0 -292.238)"><rect ry=".265" y="293.296" x=".794" height="1.323" width="1.323" style="marker:none"/><rect style="marker:none" width="1.323" height="1.323" x="2.646" y="293.296" ry=".265"/><path d="M2.117 294.09v.793c0 .265-.265.794-.265.794s-.088.265-.352.265h-.265c-.264 0-.177-.265-.177-.265s.265-.53.265-.794v-.793zM3.969 294.09v.793c0 .265-.265.794-.265.794s-.088.265-.352.265h-.265c-.264 0-.177-.265-.177-.265s.265-.53.265-.794v-.793z" style="marker:none"/></g></svg>`,
  bold: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><path d="M1.058.53a.265.265 0 00-.264.264v3.175a.265.265 0 00.264.264h1.588c1.058 0 1.323-.529 1.323-1.058 0-.35-.118-.699-.502-.896.174-.194.237-.442.237-.692C3.704 1.058 3.44.53 2.381.53H1.058zm.262.527h1.06c.442 0 .612.104.686.178.075.074.112.175.112.351 0 .177-.037.28-.112.354-.072.073-.24.172-.66.177H1.32v-1.06zM2.39 2.645h.257c.441 0 .61.103.684.176.073.074.11.177.11.353 0 .177-.037.28-.11.354-.073.073-.243.176-.684.176H1.322V2.646H2.39z"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><path d="M3.572.792a.132.132 0 00-.132.132.132.132 0 000 .01v.265a1.586 1.586 0 00-2.357 2.094c.504.717 1.494.89 2.211.385.138-.097.257-.218.356-.353a.132.132 0 00.026-.027.132.132 0 00-.032-.184.132.132 0 00-.184.031h-.001a1.323 1.323 0 11.005-1.525.132.132 0 00.184.03.132.132 0 00.056-.116V.924a.132.132 0 00-.132-.132z" style="marker:none"/></svg>`,
  h1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><path d="M.794.53s0-.265.264-.265h.265c.264 0 .264.264.264.264v1.588h1.588V.529s0-.264.265-.264h.264c.265 0 .265.264.265.264v3.704s0 .265-.265.265H3.44c-.265 0-.265-.265-.265-.265V2.646H1.587v1.587s0 .265-.264.265h-.265c-.264 0-.264-.265-.264-.265z"/></svg>`,
  h2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><path d="M1.058.53s0-.265.265-.265c.264 0 .264.264.264.264v1.588c.265-.265.53-.265 1.059-.265.794 0 1.058.53 1.058 1.058v1.323s0 .265-.264.265c-.265 0-.265-.265-.265-.265V2.91a.55.55 0 00-.53-.529c-.528 0-.793 0-1.058.53v1.322s0 .265-.264.265c-.265 0-.265-.265-.265-.265z"/></svg>`,
  italic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><path d="M2.381.53a.265.265 0 100 .528l-.529 2.646a.265.265 0 100 .53h.53a.265.265 0 000-.53l.528-2.646a.265.265 0 100-.529z"/></svg>`,
  ol: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><g transform="translate(0 -292.238)"><path d="M.397 295.413a.132.132 0 100 .264h.331a.066.066 0 110 .132H.66a.132.132 0 100 .265h.067a.066.066 0 110 .132H.397a.132.132 0 100 .265H.66a.397.33 0 00.397-.331.397.33 0 00-.08-.198.397.33 0 00.08-.199.397.33 0 00-.397-.33z" style="marker:none"/><rect ry=".265" style="marker:none" width="3.175" height=".529" x="1.587" y="293.031"/><rect y="294.354" x="1.587" height=".529" width="3.175" style="marker:none" ry=".265"/><rect ry=".265" style="marker:none" width="3.175" height=".529" x="1.587" y="295.677"/><path d="M.397 292.767a.132.132 0 100 .264h.132v.53H.397a.132.132 0 100 .264h.529a.132.132 0 100-.265H.794v-.661a.132.132 0 00-.133-.132zM.397 294.09a.132.132 0 100 .264H.66a.09.09 0 01.02.002.133.133 0 01.109.098v.003a.134.134 0 01.003.047v.004a.132.132 0 01-.016.044v.002l-.002.002a.133.133 0 01-.033.037H.74l-.3.225-.124.093-.006.007a.125.125 0 00-.018.02.116.116 0 00-.013.02c-.004.006-.006.015-.008.023a.124.124 0 00-.006.028l-.001.008.002.014c.001.01.003.019.006.028a.143.143 0 00.011.023l.007.015.007.006a.128.128 0 00.02.018.095.095 0 00.042.02c.01.004.02.006.03.007l.007.002h.529a.132.132 0 100-.265H.794l.106-.079c.003-.002.004-.006.007-.009a.395.395 0 00-.246-.706z" style="marker:none"/></g></svg>`,
  strikethrough: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><g transform="translate(0 -292.238)"><path d="M2.646 292.767c-1.059 0-1.588.529-1.588 1.058 0 .09.021.178.051.265h.62c-.111-.099-.144-.188-.144-.266 0-.088.034-.19.185-.304.152-.114.434-.225.875-.225h.795a.265.265 0 100-.528zm.39 2.379c.11.097.141.186.141.264 0 .088-.035.19-.188.305-.152.114-.431.225-.872.227l-.266.002v-.002h-.528a.265.265 0 100 .529l.793-.002c1.058-.003 1.588-.53 1.588-1.059 0-.089-.021-.177-.052-.264z"/><rect ry=".265" y="294.354" x=".265" height=".529" width="4.233" style="marker:none"/></g></svg>`,
  ul: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.762 4.762" height="18" width="18"><g transform="translate(0 -292.238)"><circle cy="294.619" cx=".529" style="marker:none" r=".529"/><circle style="marker:none" cx=".529" cy="293.296" r=".529"/><rect ry=".265" style="marker:none" width="3.175" height=".529" x="1.587" y="293.031"/><circle cy="295.942" cx=".529" style="marker:none" r=".529"/><rect y="294.354" x="1.587" height=".529" width="3.175" style="marker:none" ry=".265"/><rect ry=".265" style="marker:none" width="3.175" height=".529" x="1.587" y="295.677"/></g></svg>`
};

export default svg;