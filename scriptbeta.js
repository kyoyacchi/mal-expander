// ==UserScript==
// @name        MyAnimeList - Auto Modern "About Me" expander. Works for mobile, too
// @name:tr     MyAnimeList - Otomatik Modern "Hakkımda" kısmı genişletici. Mobil içinde çalışır.
// @namespace   https://myanimelist.net/profile/kyoyatempest
// @match       https://myanimelist.net/profile/*
// @version     1.3
// @author      kyoyacchi
// @icon        https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://myanimelist.net&size=64
// @description This is my first script, but it works well. Enjoy it!
// @description:tr İlk scriptim ama iyi çalışıyor. Keyfini çıkarın!
// ==/UserScript==
//code
window.onload = function(){
 let veri = document.getElementById('modern-about-me-expand-button')
 if (veri){
  let desc = document.querySelector("l-intro-description")//getElementById("c-intro-description")
  console.error(desc)
   veri.click();
  console.log("Expanded modern about me section")
 } else return;
}


//

