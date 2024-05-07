function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-w1bA3JZz.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css","assets/CanvasUtils-CxaAAtZc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B-4TYdgZ.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-w1bA3JZz.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
