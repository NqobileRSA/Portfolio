function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cj8qdq3K.js","assets/index-CIvoZKCq.js","assets/index-CkYlxCk7.css","assets/index-B2vBzB4l.js","assets/index-BRDAIQnt.js","assets/index--2OCFPiR.js","assets/index-v4URU93O.js","assets/index-CpEpMEhN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CIvoZKCq.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cj8qdq3K.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B2vBzB4l.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BRDAIQnt.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index--2OCFPiR.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-v4URU93O.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CpEpMEhN.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
