function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BcES__xF.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B-4TYdgZ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BcES__xF.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
