function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r=i("7Y9D8");e(r).Notify.init({width:"350px",useIcon:!1});const l={delayFirst:document.querySelector("input[name=delay]"),delayStep:document.querySelector("input[name=step]"),delayAmount:document.querySelector("input[name=amount]"),createBtn:document.querySelector("button")};function u(e,t){return new Promise(((e,n)=>{const o=Math.random()>.3;setTimeout((()=>{o?e("Success! Value passed to resolve function"):n("Error! Error passed to reject function")}),t)}))}l.delayFirst.addEventListener("input",(function(e){const t=e.target.value;console.log(t)})),l.delayStep.addEventListener("input",(function(e){const t=e.target.value;console.log(t)})),l.delayAmount.addEventListener("input",(function(e){const t=e.target.value;console.log(t)})),l.createBtn.addEventListener("click",(function(){})),u(0,1500).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n} ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n} ms`)})),u(0,3500).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n} ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n} ms`)}));
//# sourceMappingURL=03-promises.5c282660.js.map