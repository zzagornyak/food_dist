/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(i?i(m):y())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,g,p,_,y=void 0;function w(t,e){var n=this,r=new this.constructor(L);void 0===r[S]&&C(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return H(o,r,i,n._result)}))}else j(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(L);return q(e,t),e}y=u?function(){return process.nextTick(m)}:l?(g=0,p=new l(m),_=document.createTextNode(""),p.observe(_,{characterData:!0}),function(){_.data=g=++g%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function L(){}var A=void 0;function E(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?M(t,e._result):2===e._state?x(t,e._result):j(e,void 0,(function(e){return q(t,e)}),(function(e){return x(t,e)}))}(e,n):void 0===r?M(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?q(t,n):M(t,n))}),(function(e){r||(r=!0,x(t,e))}),t._label);!r&&o&&(r=!0,x(t,o))}),t)}(e,n,r):M(e,n)}function q(t,e){if(t===e)x(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)M(t,e);else{var n=void 0;try{n=e.then}catch(e){return void x(t,e)}E(t,e,n)}var r,o}function T(t){t._onerror&&t._onerror(t._result),I(t)}function M(t,e){t._state===A&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(I,t))}function x(t,e){t._state===A&&(t._state=2,t._result=e,s(T,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(I,t)}function I(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?H(n,r,o,i):o(i);t._subscribers.length=0}}function H(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void x(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==A||(i&&a?q(n,s):!1===a?x(n,c):1===e?M(n,s):2===e&&x(n,s))}var k=0;function C(t){t[S]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var $=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(L),this.promise[S]||C(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?M(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&M(this.promise,this._result))):x(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===A&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==A)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===N){var c=new n(L);s?x(c,i):E(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===A&&(this._remaining--,2===t?x(r,n):this._result[e]=n),0===this._remaining&&M(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var N=function(){function e(t){this[S]=k++,this._result=this._state=void 0,this._subscribers=[],L!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){q(t,e)}),(function(e){x(t,e)}))}catch(e){x(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return N.prototype.then=w,N.all=function(t){return new $(this,t).promise},N.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},N.resolve=b,N.reject=function(t){var e=new this(L);return x(e,t),e},N._setScheduler=function(t){i=t},N._setAsap=function(t){s=t},N._asap=s,N.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=N},N.Promise=N,N}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);function t(t){document.querySelector(t).style.display="none",document.body.style.overflow=""}function e(t,e){document.querySelector(t).style.display="block",document.body.style.overflow="hidden",e&&clearInterval(e)}var r=function(n,r,o){const i=document.querySelector(r);document.querySelectorAll(n).forEach((t=>{t.addEventListener("click",(()=>e(r,o)))})),i.addEventListener("click",(e=>{e.target!==i&&""!=e.target.getAttribute("data-close")||t(r)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&"block"===i.style.display&&t(r)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(r,o),window.removeEventListener("scroll",t))}))};n(702).polyfill(),document.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>r(".modal",n)),1e13);(function(t,e,n){const r=document.querySelectorAll(t),o=document.querySelectorAll(e);function i(){o.forEach((t=>{t.classList.add("hide")})),r.forEach((t=>{t.classList.remove(n)}))}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o[t].classList.remove("hide"),r[t].classList.add(n)}i(),s(),r.forEach(((t,e)=>{t.addEventListener("click",(t=>{i(),s(e)}))}))})(".tabheader__item",".tabcontent","tabheader__item_active"),function(t,e){const n=document.querySelector(t),r=n.querySelector("#days"),o=n.querySelector("#hours"),i=n.querySelector("#minutes"),s=n.querySelector("#seconds"),c=setInterval(a,1e3);function a(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/6e4)%60,seconds:Math.floor(e/1e3)%60}}(e);r.innerHTML=t.days>9?t.days:"0"+t.days,o.innerHTML=t.hours>9?t.hours:"0"+t.hours,i.innerHTML=t.minutes>9?t.minutes:"0"+t.minutes,s.innerHTML=t.seconds>9?t.seconds:"0"+t.seconds,t.total<=0&&(clearInterval(c),r.innerHTML="00",o.innerHTML="00",i.innerHTML="00",s.innerHTML="00")}a()}(".timer","2022-06-29"),r("[data-modal]",".modal",n),function(){const t=document.querySelector(".menu__field").querySelector(".container");class e{constructor(t,e,n,r,o){this.img=t,this.title=e,this.descr=n,this.price=r,this.parentSelector=o,this.alt="image";for(var i=arguments.length,s=new Array(i>5?i-5:0),c=5;c<i;c++)s[c-5]=arguments[c];this.classes=s,this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}addToHTML(){if(0===this.classes.length)this.classes="menu__item";else{let t="";for(let e of this.classes)t+=`${e} `;this.classes=t}this.parentSelector.innerHTML+=`\n            <div class="${this.classes}">\n                <img src="${this.img}" alt="${this.alt}">\n                <h3 class="menu__item-subtitle">${this.title}"</h3>\n                <div class="menu__item-descr">${this.descr} </div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            </div>`}}(async function(t){const e=await axios.get("http://localhost:3000/menu");return await e})().then((n=>n.data.forEach((n=>{let{img:r,title:o,descr:i,price:s}=n;new e(r,o,i,s,t,"menu__item").addToHTML()}))))}(),function(n,r){function o(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),e(".modal",r);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.classList.add("show"),o.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{!function(t){t.addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const r=new FormData(t);(async(t,e)=>await axios.post("http://localhost:3000/requests",e))(0,JSON.stringify(Object.fromEntries(r.entries()))).then((function(t){console.log(t.data),o("Спасибо, мы скоро с Вами свяжемся"),n.remove()})).catch((function(t){console.log(t),o("Что-то пошло не так")})).finally((()=>{t.reset()}))}))}(t)}))}("form",n),function(t){let{sliderArg:e,slides:n,prev:r,next:o,totalSlides:i,curentSlide:s,sliderFieldArg:c}=t;const a=[{img:"img/slider/pepper.jpg",alt:"pepper",hide:!1},{img:"img/slider/food-12.jpg",alt:"food",hide:!0},{img:"img/slider/olive-oil.jpg",alt:"oil",hide:!0},{img:"img/slider/paprika.jpg",alt:"paprika",hide:!0}],l=document.querySelector(e),u=document.querySelectorAll(n),d=document.querySelector(r),h=document.querySelector(o),f=document.querySelector(i),m=document.querySelector(s),v=document.querySelector(c),g=window.getComputedStyle(l).width;let p=0,_=1;const y=function(){u.length<10?(f.textContent=`0${u.length}`,m.textContent=`0${_}`):(f.textContent=u.length,m.textContent=_)};y(),v.style.width=100*u.length+"%",v.style.display="flex",v.style.transition="0.5s all",l.style.overflow="hidden",u.forEach((t=>{t.style.width=g}));const w=()=>{v.style.transform=`translateX(-${p}px)`};h.addEventListener("click",(()=>{p==Number.parseInt(g)*(u.length-1)?p=0:p+=Number.parseInt(g),w(),_==u.length?(_=1,L(_-1),y()):(_++,L(_-1),y())})),d.addEventListener("click",(()=>{0==p?p=Number.parseInt(g)*(u.length-1):p-=Number.parseInt(g),w(),1==_?(_=u.length,L(_-1),y()):(_--,L(_-1),y())})),l.style.position="relative";const b=document.createElement("div");b.classList.add("carousel-indicators"),l.append(b);const S=function(t,e){let n=document.createElement("div");n.className="dot",t.append(n)},L=t=>{A.forEach((t=>{t.classList.remove("dot__active")})),A[t].classList.add("dot__active")};for(let t=1;t<=a.length;t++)S(b);const A=document.querySelectorAll(".dot");A[0].classList.add("dot__active"),A.forEach(((t,e)=>{t.addEventListener("click",(t=>{L(e),_=e+1,p=+g.slice(0,g.length-2)*e,w(),y()}))}))}({sliderArg:".offer__slider-wrapper",slides:".offer__slide",prev:".offer__slider-prev",next:".offer__slider-next",totalSlides:"#total",curentSlide:"#current",sliderFieldArg:".offer__slider-inner"}),function(){let t={gender:"",height:0,weight:0,age:0,activity:0};const e=document.querySelector(".calculating__result span"),n=(document.querySelectorAll(".calculating__choose-item"),()=>{let{gender:n,height:r,weight:o,age:i,activity:s}=t;e.textContent=n&&r&&o&&i&&s?"male"==n?Math.floor((10*o+6.25*r-5*i+5)*s):Math.floor((10*o+6.25*r-5*i-161)*s):0});localStorage.getItem("activity")?t.activity=localStorage.getItem("activity"):localStorage.setItem("activity","1.375"),localStorage.getItem("gender")?t.gender=localStorage.getItem("gender"):localStorage.setItem("gender","female"),n();const r=t=>{document.querySelectorAll(t).forEach((t=>{t.classList.remove("calculating__choose-item_active"),t.getAttribute("data-activity")===localStorage.getItem("activity")&&t.classList.add("calculating__choose-item_active"),t.getAttribute("data-gender")===localStorage.getItem("gender")&&t.classList.add("calculating__choose-item_active")}))};function o(e){const r=document.querySelectorAll(e);r.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-activity")?(t.activity=+e.target.getAttribute("data-activity"),localStorage.setItem("activity",+e.target.getAttribute("data-activity"))):(t.gender=e.target.getAttribute("data-gender"),localStorage.setItem("gender",e.target.getAttribute("data-gender"))),r.forEach((t=>{t.classList.remove("calculating__choose-item_active")})),e.target.classList.add("calculating__choose-item_active"),n()}))}))}function i(e){document.querySelector(`#${e}`).addEventListener("input",(r=>{r.target.value.match(/\D/g)?r.target.style.border="1px red solid":r.target.style.border="none",t[e]=r.target.value,n()}))}r("#gender div"),r(".calculating__choose_big div"),o("#gender div"),o(".calculating__choose_big div"),i("height"),i("weight"),i("age")}()}))}()}();
//# sourceMappingURL=bundle.js.map