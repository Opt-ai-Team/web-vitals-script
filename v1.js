!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[r]&&i[r],u=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!u[t]){if(!e[t]){var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);if(a)return a(t,!0);if(c&&"string"==typeof t)return c(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},d.cache={};var l=u[t]=new f.Module(t);e[t][0].call(l.exports,d,l,l.exports,this)}return u[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=u,f.parent=a,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return i[r]}}),i[r]=f;for(var s=0;s<t.length;s++)f(t[s]);if(n){var l=f(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):o&&(this[o]=l)}}({"83hJF":[function(e,t,n){var r=e("web-vitals");let o=document.querySelector("[data-optomate-wv]").getAttribute("data-optomate-wv"),i="@optomate-wv",a=(e,t,n)=>{console.log("saved",`${i}-${t}-${n.name}`,e,t,n),localStorage.setItem(`${i}-${t}-${n.name}`,JSON.stringify({path:e,id:t,data:n}))},u=e=>{e&&a(location.pathname,e.id,e)};(0,r.onCLS)(u),(0,r.onFCP)(u),(0,r.onFID)(u),(0,r.onINP)(u),(0,r.onLCP)(u),(0,r.onTTFB)(u);let c=()=>{let e=Object.keys(localStorage).filter(e=>e.includes(i));return e.length?e[0]:null},f=!1,s=()=>{if(f)return;f=!0;let e=c();if(e){let t=localStorage.getItem(e);localStorage.removeItem(e),fetch("http://localhost:3010/api/lwv/collect",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:t}).then(console.log).catch(console.log)}f=!1};document.addEventListener("DOMContentLoaded",()=>{setInterval(()=>{s()},1e3)})},{"web-vitals":"ff8Ms"}],ff8Ms:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"CLSThresholds",()=>F),r.export(n,"FCPThresholds",()=>S),r.export(n,"FIDThresholds",()=>B),r.export(n,"INPThresholds",()=>U),r.export(n,"LCPThresholds",()=>X),r.export(n,"TTFBThresholds",()=>ee),r.export(n,"getCLS",()=>I),r.export(n,"getFCP",()=>P),r.export(n,"getFID",()=>N),r.export(n,"getINP",()=>W),r.export(n,"getLCP",()=>Z),r.export(n,"getTTFB",()=>en),r.export(n,"onCLS",()=>I),r.export(n,"onFCP",()=>P),r.export(n,"onFID",()=>N),r.export(n,"onINP",()=>W),r.export(n,"onLCP",()=>Z),r.export(n,"onTTFB",()=>en);var o,i,a,u,c,f=-1,s=function(e){addEventListener("pageshow",function(t){t.persisted&&(f=t.timeStamp,e(t))},!0)},l=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=l();return e&&e.activationStart||0},p=function(e,t){var n=l(),r="navigate";return f>=0?r="back-forward-cache":n&&(document.prerendering||d()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},m=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(e){Promise.resolve().then(function(){t(e.getEntries())})});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},v=function(e,t,n,r){var o,i;return function(a){var u;t.value>=0&&(a||r)&&((i=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=i,t.rating=(u=t.value)>n[1]?"poor":u>n[0]?"needs-improvement":"good",e(t))}},h=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},g=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},y=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},T=-1,b=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},C=function(e){"hidden"===document.visibilityState&&T>-1&&(T="visibilitychange"===e.type?e.timeStamp:0,w())},E=function(){addEventListener("visibilitychange",C,!0),addEventListener("prerenderingchange",C,!0)},w=function(){removeEventListener("visibilitychange",C,!0),removeEventListener("prerenderingchange",C,!0)},x=function(){return T<0&&(T=b(),E(),s(function(){setTimeout(function(){T=b(),E()},0)})),{get firstHiddenTime(){return T}}},L=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},S=[1800,3e3],P=function(e,t){t=t||{},L(function(){var n,r=x(),o=p("FCP"),i=m("paint",function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=Math.max(e.startTime-d(),0),o.entries.push(e),n(!0)))})});i&&(n=v(e,o,S,t.reportAllChanges),s(function(r){n=v(e,o=p("FCP"),S,t.reportAllChanges),h(function(){o.value=performance.now()-r.timeStamp,n(!0)})}))})},F=[.1,.25],I=function(e,t){t=t||{},P(y(function(){var n,r=p("CLS",0),o=0,i=[],a=function(e){e.forEach(function(e){if(!e.hadRecentInput){var t=i[0],n=i[i.length-1];o&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(o+=e.value,i.push(e)):(o=e.value,i=[e])}}),o>r.value&&(r.value=o,r.entries=i,n())},u=m("layout-shift",a);u&&(n=v(e,r,F,t.reportAllChanges),g(function(){a(u.takeRecords()),n(!0)}),s(function(){o=0,n=v(e,r=p("CLS",0),F,t.reportAllChanges),h(function(){return n()})}),setTimeout(n,0))}))},M={passive:!0,capture:!0},A=new Date,O=function(e,t){o||(o=t,i=e,a=new Date,k(removeEventListener),j())},j=function(){if(i>=0&&i<a-A){var e={entryType:"first-input",name:o.type,target:o.target,cancelable:o.cancelable,startTime:o.timeStamp,processingStart:o.timeStamp+i};u.forEach(function(t){t(e)}),u=[]}},D=function(e){if(e.cancelable){var t,n,r,o=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){O(o,e),r()},n=function(){r()},r=function(){removeEventListener("pointerup",t,M),removeEventListener("pointercancel",n,M)},addEventListener("pointerup",t,M),addEventListener("pointercancel",n,M)):O(o,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,D,M)})},B=[100,300],N=function(e,t){t=t||{},L(function(){var n,r=x(),a=p("FID"),c=function(e){e.startTime<r.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},f=function(e){e.forEach(c)},l=m("first-input",f);n=v(e,a,B,t.reportAllChanges),l&&g(y(function(){f(l.takeRecords()),l.disconnect()})),l&&s(function(){n=v(e,a=p("FID"),B,t.reportAllChanges),u=[],i=-1,o=null,k(addEventListener),u.push(c),j()})})},_=0,q=1/0,R=0,$=function(e){e.forEach(function(e){e.interactionId&&(q=Math.min(q,e.interactionId),_=(R=Math.max(R,e.interactionId))?(R-q)/7+1:0)})},H=function(){return c?_:performance.interactionCount||0},J=function(){"interactionCount"in performance||c||(c=m("event",$,{type:"event",buffered:!0,durationThreshold:0}))},U=[200,500],z=0,G=function(){return H()-z},K=[],Q={},V=function(e){var t=K[K.length-1],n=Q[e.interactionId];if(n||K.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};Q[r.id]=r,K.push(r)}K.sort(function(e,t){return t.latency-e.latency}),K.splice(10).forEach(function(e){delete Q[e.id]})}},W=function(e,t){t=t||{},L(function(){J();var n,r=p("INP"),o=function(e){e.forEach(function(e){e.interactionId&&V(e),"first-input"!==e.entryType||K.some(function(t){return t.entries.some(function(t){return e.duration===t.duration&&e.startTime===t.startTime})})||V(e)});var t,o=(t=Math.min(K.length-1,Math.floor(G()/50)),K[t]);o&&o.latency!==r.value&&(r.value=o.latency,r.entries=o.entries,n())},i=m("event",o,{durationThreshold:t.durationThreshold||40});n=v(e,r,U,t.reportAllChanges),i&&(i.observe({type:"first-input",buffered:!0}),g(function(){o(i.takeRecords()),r.value<0&&G()>0&&(r.value=0,r.entries=[]),n(!0)}),s(function(){K=[],z=H(),n=v(e,r=p("INP"),U,t.reportAllChanges)}))})},X=[2500,4e3],Y={},Z=function(e,t){t=t||{},L(function(){var n,r=x(),o=p("LCP"),i=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(o.value=Math.max(t.startTime-d(),0),o.entries=[t],n())},a=m("largest-contentful-paint",i);if(a){n=v(e,o,X,t.reportAllChanges);var u=y(function(){Y[o.id]||(i(a.takeRecords()),a.disconnect(),Y[o.id]=!0,n(!0))});["keydown","click"].forEach(function(e){addEventListener(e,u,!0)}),g(u),s(function(r){n=v(e,o=p("LCP"),X,t.reportAllChanges),h(function(){o.value=performance.now()-r.timeStamp,Y[o.id]=!0,n(!0)})})}})},ee=[800,1800],et=function e(t){document.prerendering?L(function(){return e(t)}):"complete"!==document.readyState?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},en=function(e,t){t=t||{};var n=p("TTFB"),r=v(e,n,ee,t.reportAllChanges);et(function(){var o=l();if(o){var i=o.responseStart;if(i<=0||i>performance.now())return;n.value=Math.max(i-d(),0),n.entries=[o],r(!0),s(function(){(r=v(e,n=p("TTFB",0),ee,t.reportAllChanges))(!0)})}})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jiucr:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["83hJF"],"83hJF","parcelRequire99f0");