function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CN1t_cFX.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css","assets/ValueWithRandom-BPqzyHuG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B-4TYdgZ.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CN1t_cFX.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
