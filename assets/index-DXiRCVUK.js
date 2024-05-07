function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-C5Iy-uyi.js","assets/ValueWithRandom-BPqzyHuG.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B-4TYdgZ.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-C5Iy-uyi.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
