function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-iRPq9I2E.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B-4TYdgZ.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-iRPq9I2E.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
