function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-D3UMO8_h.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-B-4TYdgZ.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-D3UMO8_h.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
