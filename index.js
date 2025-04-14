import{a as p,S as f,i as c}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="49674407-1d122c5bfd0965d51e6fbc3dd";function y(i){return p("https://pixabay.com/api/",{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a",{captions:!1});function h(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:a,downloads:d})=>`
      <li class="card">
        <a href="${s}" class="gallery-item">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="card-info">
          <p>👍 Likes: ${t}</p>
          <p>👁 Views: ${n}</p>
          <p>💬 Comments: ${a}</p>
          <p>⬇ Downloads: ${d}</p>
        </div>
      </li>
    `).join("");l.innerHTML=r,g.refresh()}function L(){l.innerHTML=""}function b(){u.style.display="flex"}function q(){u.style.display="none"}const S=document.querySelector("#search-form"),w=document.querySelector("#breed-input"),v=document.querySelector("#breeds-list");S.addEventListener("submit",i=>{i.preventDefault();const r=w.value.trim();r&&(L(),b(),y(r).then(o=>{if(o.length===0){c.info({title:"No results",message:"No images found for your query.",position:"topRight"});return}h(o);const s=o.flatMap(n=>n.tags.split(",").map(a=>a.trim().toLowerCase())),t=[...new Set(s)].slice(0,10);v.innerHTML=t.map(n=>`<option value="${n}"></option>`).join("")}).catch(o=>{console.error(o),c.error({title:"Error",message:"Something went wrong!",position:"topRight"})}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
