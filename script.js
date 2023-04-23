// ==UserScript==
// @name        MyAnimeList - Auto Modern "About Me" expander. Works for mobile, too
// @name:tr     MyAnimeList - Otomatik Modern "Hakkımda" kısmı genişletici. Mobil içinde çalışır.
// @namespace   https://myanimelist.net/profile/kyoyatempest
// @match       https://myanimelist.net/profile/*
// @grant       none
// @version     1.6
// @author      kyoyacchi
// @icon        https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://myanimelist.net&size=64
// @description Auto expands the modern "about me"
// @description:tr Modern "Hakkımda" yerini otomatik olarak genişletir.
// @run-at     document-end
// @grant        GM_registerMenuCommand
//
// ==/UserScript==
function Expand(){

  let modern = document.getElementById('modern-about-me-expand-button')
  if (modern) { modern.click() }

}
window.onload = function () {
  Expand()
}


GM_registerMenuCommand("Expand",Expand)
