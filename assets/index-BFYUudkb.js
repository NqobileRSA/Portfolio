function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DIjR5D1E.js","assets/index-DD88Mb2n.js","assets/index-DRnz_tTj.css","assets/index-BEcfJAMY.js","assets/index-Dq_VLd17.js","assets/index-BYcgwpce.js","assets/index-DUkyDZgy.js","assets/index-DV-Q3_Xn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DD88Mb2n.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DIjR5D1E.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BEcfJAMY.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Dq_VLd17.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BYcgwpce.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DUkyDZgy.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DV-Q3_Xn.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};