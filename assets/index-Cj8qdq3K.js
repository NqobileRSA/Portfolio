function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DoJvin6u.js","assets/index-CIvoZKCq.js","assets/index-CkYlxCk7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CIvoZKCq.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DoJvin6u.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
