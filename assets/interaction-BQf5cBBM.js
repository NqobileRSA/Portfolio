function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-D_qgLxnI.js","assets/Ranges-DK4o7irE.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css","assets/index-BpurBRMi.js","assets/OptionsColor-DZnBuV5c.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B-4TYdgZ.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-D_qgLxnI.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
