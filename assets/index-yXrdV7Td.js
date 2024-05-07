function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BsZIHcxm.js","assets/index-B-4TYdgZ.js","assets/index-CcqzzffG.css","assets/index-O79mPqxI.js","assets/index-Dl-dEWPW.js","assets/index-jXTp24KJ.js","assets/index-CMpfjZ2W.js","assets/index-Biuh52mp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B-4TYdgZ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BsZIHcxm.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-O79mPqxI.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Dl-dEWPW.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-jXTp24KJ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CMpfjZ2W.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Biuh52mp.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
