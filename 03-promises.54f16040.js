function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7248;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7248=r);var i=r("eWCmQ");const l={formBtnStartTimer:document.querySelector("button"),firstDelay:document.querySelector("[name='delay']"),delayStep:document.querySelector("[name='step']"),amount:document.querySelector("[name='amount']")};function u(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.formBtnStartTimer.addEventListener("click",(t=>{t.preventDefault();for(let t=1;t<=l.amount.value;t++)u(t,Number(l.firstDelay.value)+Number(l.delayStep.value)*t).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`),console.log(`✅Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`),console.log(`❌ Rejected promise ${t} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.54f16040.js.map
