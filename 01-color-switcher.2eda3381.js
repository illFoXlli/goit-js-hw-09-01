!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body"),textValueColor:document.querySelector(".text-color")},e=null,a="btn-active btn-primary-active btn-secondary-active btn-primary-active",n="btn btn-primary btn-secondary btn-primary";t.btnStart.addEventListener("click",(function(r){r.target.disabled=!0,t.btnStop.disabled=!1,t.btnStart.className=a,t.btnStop.className=n,e=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=e,t.textValueColor.textContent=e}),1e3)})),t.btnStop.addEventListener("click",(function(r){r.target.disabled=!0,t.btnStart.disabled=!1,clearInterval(e),t.btnStop.className=a,t.btnStart.className=n}))}();
//# sourceMappingURL=01-color-switcher.2eda3381.js.map
