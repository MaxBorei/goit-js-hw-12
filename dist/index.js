import{a as b,S as q,i as d}from"./assets/vendor-CjwUT-lV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="49674407-1d122c5bfd0965d51e6fbc3dd";async function g(t,o=1){return(await b("https://pixabay.com/api/",{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),w=new q(".gallery a",{captions:!1});function $(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:a,downloads:l})=>`
      <li class="card">
        <a href="${i}" class="gallery-item">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="card-info">
          <p>👍 Likes: ${r}</p>
          <p>👁 Views: ${n}</p>
          <p>💬 Comments: ${a}</p>
          <p>⬇ Downloads: ${l}</p>
        </div>
      </li>
    `).join("");y.innerHTML=o,w.refresh()}function T(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:a,downloads:l})=>`
      <li class="card">
        <a href="${i}" class="gallery-item">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="card-info">
          <p>👍 Likes: ${r}</p>
          <p>👁 Views: ${n}</p>
          <p>💬 Comments: ${a}</p>
          <p>⬇ Downloads: ${l}</p>
        </div>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",o),w.refresh(),M()}function M(){const t=document.querySelector(".gallery .card");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}function B(){y.innerHTML=""}function L(){h.style.display="flex"}function v(){h.style.display="none"}function p(){const t=document.querySelector(".load-more");t&&t.classList.remove("is-visible")}function E(){const t=document.querySelector(".load-more");t&&t.classList.add("is-visible")}const R=document.querySelector("#search-form"),C=document.querySelector("#breed-input"),H=document.querySelector("#breeds-list"),N=document.querySelector(".load-more");let c=1,u="",f=0;R.addEventListener("submit",async t=>{t.preventDefault();const o=C.value.trim();if(o){o!==u&&(u=o,c=1,B()),p(),L();try{const s=await g(u,c),i=s.hits;if(f=s.totalHits,i.length===0){d.info({title:"No results",message:"No images found for your query.",position:"topRight"});return}$(i),c++,(c-1)*15>=f?(p(),d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):E();const e=i.flatMap(a=>a.tags.split(",").map(l=>l.trim().toLowerCase())),n=[...new Set(e)].slice(0,10);H.innerHTML=n.map(a=>`<option value="${a}"></option>`).join("")}catch(s){console.error(s),d.error({title:"Error",message:"Something went wrong!",position:"topRight"})}finally{v()}}});N.addEventListener("click",async()=>{L();try{const o=(await g(u,c)).hits;T(o),c++,(c-1)*15>=f&&(p(),d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error(t),d.error({title:"Error",message:"Something went wrong while loading more images!",position:"topRight"})}finally{v()}});const m=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{window.scrollY>400?m.classList.add("show"):m.classList.remove("show")});m.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
