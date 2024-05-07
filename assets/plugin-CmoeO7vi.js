function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-DApDd9be.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B-4TYdgZ.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-DApDd9be.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
