function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-Ap1Ln6uv.js","assets/index-DD88Mb2n.js","assets/index-DRnz_tTj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DD88Mb2n.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-Ap1Ln6uv.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
