!function(){var t,e={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};e.start.addEventListener("click",(function(){t=setInterval((function(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.start.setAttribute("disabled",""),e.stop.removeAttribute("disabled","")})),e.stop.addEventListener("click",(function(){clearInterval(t),e.stop.setAttribute("disabled",""),e.start.removeAttribute("disabled","")})),e.stop.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.98ad1534.js.map
