(this.webpackJsonpjeetcode=this.webpackJsonpjeetcode||[]).push([[0],{192:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(67),i=n.n(r),a=(n(74),n(3));n.p,n(75),n(76);function l(e){return"question_cache_".concat(e)}function o(e){return e.match(/^#[0-9]+$/)?+e.slice(1):1}function u(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){return window.sendMessage=function(e){s((function(t){return t.concat([e])}))},function(){window.sendMessage=void 0}}),[]),n}var d=n(9),j=n(13);var f=n(2);function h(){var e=function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),s=Object(a.a)(n,2),r=s[0],i=s[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]}("is-virtual-console-open",!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=u(),i=Object(c.useRef)();return Object(c.useEffect)((function(){i.current&&(i.current.scrollTop=i.current.scrollHeight)}),[r]),Object(f.jsxs)("div",{className:"w-full bg-green-100 flex flex-col",children:[Object(f.jsxs)("div",{className:"w-full h-8 bg-gray-400 shadow-sm flex justify-center items-center relative",children:[Object(f.jsxs)("div",{className:"text-green-50",children:["Console (",r.length,")"]}),Object(f.jsx)("div",{className:"absolute right-2 hover: cursor-pointer text-green-50",onClick:function(){s((function(e){return!e}))},children:Object(f.jsx)(j.a,{icon:n?d.a:d.b})})]}),Object(f.jsx)("div",{className:"w-full h-40 p-1 overflow-scroll",hidden:!n,ref:i,children:r.map((function(e){return Object(f.jsx)("p",{className:"font-sans border-b border-gray-50 border-solid "+("console.error"===e.type?"text-red-500":"text-green-900"),children:e.data.content},e.id)}))})]})}function b(e){var t=e.html,n=e.css,s=e.javascript,r=(u(),function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/iframe_inject.js").then((function(e){return e.text()})).then((function(e){s(e)}))}),[]),n}()),i="\n    <html>\n        <head>\n            <style>\n                ".concat(n,"\n            </style>\n            <script>\n                ").concat(r,"\n            <\/script>\n        </head>\n\n        <body>\n            ").concat(t,"\n        </body>\n\n        <script>\n            ").concat(s,"\n        <\/script>\n    </html>\n  ");return r?Object(f.jsxs)("div",{className:"w-full h-full flex flex-col",children:[Object(f.jsx)("iframe",{className:"w-full h-full flex-1",srcDoc:i}),Object(f.jsx)(h,{})]}):Object(f.jsx)("div",{className:"w-full h-full flex justify-center justify-items-center",children:"loading..."})}var m=n(68),v=n.n(m);function x(e){var t=e.markdown;return Object(f.jsx)("div",{className:"p-2 overflow-y-scroll",children:Object(f.jsx)(v.a,{children:t})})}var O=n(25);function p(e){var t=e.html,n=e.css,s=e.javascript,r=e.onChange,i=Object(c.useRef)(null),a=Object(c.useRef)(null),l=Object(c.useRef)(null);return Object(c.useEffect)((function(){i.current&&i.current.setValue(t),a.current&&a.current.setValue(n),l.current&&l.current.setValue(s)}),[t,n,s]),Object(f.jsxs)("div",{className:"flex flex-col h-full",children:[Object(f.jsxs)("div",{className:"flex-1 relative",children:[Object(f.jsx)(O.a,{defaultLanguage:"html",theme:"vs-dark",defaultValue:t,options:{minimap:{enabled:!1}},onChange:function(e){r({html:e})},onMount:function(e){return i.current=e}}),Object(f.jsx)("div",{className:"absolute right-0 top-0 text-white p-1 rounded-xl bg-red-400",children:"HTML"})]}),Object(f.jsxs)("div",{className:"flex-1 relative",children:[Object(f.jsx)(O.a,{defaultLanguage:"css",theme:"vs-dark",defaultValue:n,options:{minimap:{enabled:!1}},onChange:function(e){r({css:e})},onMount:function(e){return a.current=e}}),Object(f.jsx)("div",{className:"absolute right-0 top-0 text-white p-1 rounded-xl bg-green-400",children:"CSS"})]}),Object(f.jsxs)("div",{className:"flex-1 relative",children:[Object(f.jsx)(O.a,{defaultLanguage:"javascript",theme:"vs-dark",defaultValue:s,options:{minimap:{enabled:!1}},onChange:function(e){return r({javascript:e})},onMount:function(e){return l.current=e}}),Object(f.jsx)("div",{className:"absolute right-0 top-0 text-white p-1 rounded-xl bg-blue-400",children:"JS"})]})]})}function g(e){var t=e.questionNumber,n=void 0===t?1:t,s=Object(c.useState)({html:null,css:null,javascript:null}),r=Object(a.a)(s,2),i=r[0],o=r[1],u=Object(c.useState)({html:"",css:"",javascript:""}),d=Object(a.a)(u,2),j=d[0],h=d[1],m=function(e,t,n,s){var r=Object(c.useState)(null),i=Object(a.a)(r,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){o(null);var t=fetch("/questions/q".concat(e,"/question.md")).then((function(e){return e.text()})),n=fetch("/questions/q".concat(e,"/question.html")).then((function(e){return e.text()})),c=fetch("/questions/q".concat(e,"/question.css")).then((function(e){return e.text()})),s=fetch("/questions/q".concat(e,"/question.js")).then((function(e){return e.text()}));Promise.all([t,n,c,s]).then((function(t){var n=Object(a.a)(t,4),c=n[0],s=n[1],r=n[2],i=n[3];o({questionNumber:e,md:c,html:s,css:r,javascript:i})}))}),[e]),l}(n);function v(e){!function(e,t){t?localStorage.setItem(l(e),JSON.stringify(t)):localStorage.setItem(l(e),"")}(n,e)}Object(c.useEffect)((function(){var e=function(e){var t=localStorage.getItem(l(e));return t?JSON.parse(t):null}(n);if(e){var t={html:e.html,css:e.css,javascript:e.javascript};o(t),h(t)}else if((null===m||void 0===m?void 0:m.questionNumber)===n){var c={html:m.html,css:m.css,javascript:m.javascript};o(c),h(c)}}),[n,m]);var O=function(e,t,n){var c;return function(){var s=this,r=arguments,i=function(){c=null,n||e.apply(s,r)},a=n&&!c;clearTimeout(c),c=setTimeout(i,t),a&&e.apply(s,r)}}((function(e){var t=Object.assign({},j,e);v(t),h(t)}),500);return Object(f.jsxs)("div",{className:"flex justify-items-stretch flex-1 flex-col md:flex-row",children:[Object(f.jsx)("div",{className:"md:flex-1 bg-indigo-200 min-w",children:Object(f.jsx)(x,{markdown:null===m||void 0===m?void 0:m.md})}),Object(f.jsx)("div",{className:"md:flex-1 bg-purple-100 h-screen",children:null!==i.html?Object(f.jsx)(p,{html:i.html,css:i.css,javascript:i.javascript,onChange:O}):null}),Object(f.jsx)("div",{className:"md:flex-1 bg-pink-100",children:Object(f.jsx)(b,{html:j.html,javascript:j.javascript,css:j.css})})]})}function w(){return Object(f.jsx)("div",{className:"font-bold font-sans p-1 pl-4",title:"\u524d\u7aef\u9762\u8bd5\u9898\u7ec3\u4e60\u573a",children:"JeesCode!"})}function N(e){var t=e.children;return Object(f.jsxs)("div",{className:"flex h-10 w-screen items-center shadow-md bg-gray-100",children:[Object(f.jsx)("div",{className:"hidden md:block",children:Object(f.jsx)(w,{})}),Object(f.jsx)("div",{className:"flex-1 flex",children:t}),Object(f.jsxs)("div",{className:"pl-2 pr-2 hidden md:block",children:[Object(f.jsx)("span",{className:"text-red-700 pr-2",children:Object(f.jsx)(j.a,{icon:d.c})}),Object(f.jsx)("span",{children:Object(f.jsx)("a",{href:"https://github.com/lulu2jinchi",children:"@lulu2jinchi"})})]})]})}var y=n(69),S=n.n(y);function k(){var e={clientID:"5cd53a83725fc77fea88",clientSecret:"fb93d69b954f7c5b287781f36f59154879ec4033",repo:"jeescode.github.io",owner:"jeescode",admin:["jeescode","mmjang"],id:window.location.href,distractionFreeMode:!1},t=Object(c.useRef)();return Object(c.useEffect)((function(){new S.a(e).render("gitalk-container")}),[]),Object(f.jsx)("div",{id:"gitalk-container",ref:t})}function q(e){var t,n=e.options,s=void 0===n?[]:n,r=e.value,i=e.onChange,l=e.placeholder,o=void 0===l?"\u8bf7\u9009\u62e9...":l,u=e.className,h=void 0===u?"":u,b=Object(c.useState)(!1),m=Object(a.a)(b,2),v=m[0],x=m[1],O=null===(t=s.find((function(e){return e.id===r})))||void 0===t?void 0:t.label,p=Object(c.useRef)();Object(c.useEffect)((function(){var e=function(e){console.log("onmousedown"),p.current&&!p.current.contains(e.target)&&(console.log(e.target),x(!1))};return console.log("use effect"),window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var g=v?Object(f.jsx)("div",{className:"absolute top-full w-full z-50 shadow-md",children:s.map((function(e){return Object(f.jsx)("div",{className:"p-2 border-t border-solid border-gray-100 bg-white hover:bg-gray-200 transition-all",onClick:function(){return t=e.id,console.log("onselect ".concat(t)),x(!1),void i(t);var t},children:e.label},e.id)}))}):null;return Object(f.jsxs)("div",{className:"relative h-8 bg-white flex items-center ml-2 cursor-pointer hover:shadow-md ".concat(h),ref:p,children:[Object(f.jsxs)("div",{className:"pl-2 pr-4 w-full",onClick:function(){x((function(e){return!e}))},children:[Object(f.jsx)("div",{className:"overflow-ellipsis overflow-hidden whitespace-nowrap",style:{width:"calc(100%)"},children:O?Object(f.jsx)("span",{children:O}):Object(f.jsx)("span",{className:"text-gray-400",children:o})}),Object(f.jsx)("div",{className:"absolute right-1 top-0 bottom-0 flex items-center",children:Object(f.jsx)(j.a,{icon:d.a})})]}),g]})}var C=function(){var e=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/questions.json").then((function(e){return e.json()})).then((function(e){s(e.list)}))}),[]),n}(),t=function(){var e=Object(c.useState)(o(window.location.hash)),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){var e=window.location.hash,t=o(e);e||(window.location.hash="#1"),s(t)}return window.addEventListener("hashchange",e),e(),function(){window.removeEventListener("hashchange",e)}}),[]),n}(),n=Object(c.useState)(t),s=Object(a.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)(!1),u=Object(a.a)(l,2),h=u[0],b=u[1];Object(c.useEffect)((function(){b(!1)}),[t]);var m=Object(f.jsx)(q,{value:r,options:e.map((function(e){return{id:e.questionNumber,label:e.title}})),onChange:function(e){window.location.href="#".concat(e),i(e)},className:"w-40"});return Object(f.jsxs)("div",{className:"w-screen md:h-screen flex flex-col",children:[Object(f.jsxs)(N,{children:[Object(f.jsx)("span",{className:"pl-4 p-1 text-blue-700 hidden md:inline",children:"\u9898\u76ee\u5217\u8868\uff1a"}),m,Object(f.jsx)("button",{onClick:function(){b(!0)},className:"shadow-md ml-4 bg-white p-1",children:"\u67e5\u770b\u8bc4\u8bba"}),Object(f.jsx)("span",{className:"ml-4 cursor-pointer hover:text-green-600",title:"\u91cd\u7f6e",children:Object(f.jsx)(j.a,{icon:d.d})})]}),Object(f.jsx)(g,{questionNumber:t}),h?Object(f.jsx)("div",{className:"fixed w-screen h-screen flex items-center justify-center",onClick:function(e){b(!1)},children:Object(f.jsx)("div",{className:"w-screen md:w-3/6 h-5/6 bg-gray-50 rounded-xl shadow-md p-2",onClick:function(e){return e.stopPropagation()},children:Object(f.jsx)(k,{})})}):null]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),E()},74:function(e,t,n){},75:function(e,t,n){}},[[192,1,2]]]);
//# sourceMappingURL=main.c6d4bf6d.chunk.js.map