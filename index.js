import{a as m,S as d,i as a}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="52560033-9cbbf5f969f605b9fcf55c2f5",g="https://pixabay.com/api/";function y(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:r})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({largeImageURL:o,webformatURL:i,tags:e,likes:t,views:n,comments:f,downloads:p})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
              width="360"
              height="200"
            />
          </a>
          <ul class="gallery-item-info">
            <li class="info-block"><h5>Likes</h5><p>${t}</p></li>
            <li class="info-block"><h5>Views</h5><p>${n}</p></li>
            <li class="info-block"><h5>Comments</h5><p>${f}</p></li>
            <li class="info-block"><h5>Downloads</h5><p>${p}</p></li>
          </ul>
        </li>`).join("");c.innerHTML=r,L.refresh()}function S(){c.innerHTML=""}function q(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const l=document.querySelector(".form"),P=document.querySelector(".form-input");l.addEventListener("submit",s=>{s.preventDefault();const r=P.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}q(),S(),y(r).then(o=>{const i=o.data.hits;if(i.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else b(i)}).catch(o=>{a.error({title:"Error",message:"Ups.. Something went wrong",position:"topRight"})}).finally(()=>{w(),l.reset()})});
//# sourceMappingURL=index.js.map
