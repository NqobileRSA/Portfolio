function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-IL2URckf.js","assets/index-DD88Mb2n.js","assets/index-DRnz_tTj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DD88Mb2n.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-IL2URckf.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
