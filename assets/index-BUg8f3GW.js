function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-0mWEXskm.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B-4TYdgZ.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-0mWEXskm.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
