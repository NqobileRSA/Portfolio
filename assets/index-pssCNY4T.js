function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-nH7KcVMM.js","assets/PolygonDrawerBase-DeUV3br5.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css","assets/TriangleDrawer-BUb4Y9Yy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-B-4TYdgZ.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-nH7KcVMM.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BUb4Y9Yy.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
