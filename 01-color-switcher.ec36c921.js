!function(){var t,e=document.querySelector("body"),r=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");r.addEventListener("click",(function(){t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),r.setAttribute("disabled",""),d.removeAttribute("disabled","")})),d.addEventListener("click",(function(){clearInterval(t),d.setAttribute("disabled",""),r.removeAttribute("disabled","")})),d.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.ec36c921.js.map