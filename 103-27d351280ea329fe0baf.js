(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{MsKa:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),c=n.n(i),a=n("vOnD"),M=n("ctXc");var o=n("aC/h"),u=a.c.div.withConfig({displayName:"livechat__StyledLiveChat",componentId:"sc-18xicvj-0"})(["position:fixed;bottom:1.6rem;right:1.6rem;background-color:var(--color-white);box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);padding:1.6rem;display:flex;cursor:pointer;border-radius:50%;z-index:9999;@media ","{padding:1rem;}"],o.a.tabletS);t.default=function(){var e=c.a.useState(!1),t=e[0],n=e[1],i=Object(M.a)(),a=i[0],o=i[1];return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(u,{className:"gtm-deriv-livechat",onClick:function(){o.open_chat_window()},onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}},t?c.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzg1QUNCMCIgZD0iTTIxIDJIM2EzIDMgMCAwMC0zIDN2MTZsLjAwNi4xMTRjLjA4Ny44MTQgMS4wOTkgMS4xOTYgMS43MDEuNTkzTDUuNDE0IDE4SDIxYTMgMyAwIDAwMy0zVjVhMyAzIDAgMDAtMy0zeiIvPjxwYXRoIGZpbGw9IiM4NUFDQjAiIGQ9Ik0yNiAxMHY2YzAgMi4yMS0xLjc5IDQtNCA0SDh2M2EzIDMgMCAwMDIuODI0IDIuOTk1TDExIDI2aDE1LjU4NmwzLjcwNyAzLjcwN2MuNjAyLjYwMyAxLjYxNC4yMiAxLjcwMS0uNTkzTDMyIDI5VjEzYTMgMyAwIDAwLTIuODI0LTIuOTk1TDI5IDEwaC0zeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMSAxMGExIDEgMCAwMS4xMTcgMS45OTNMMTEgMTJIN2ExIDEgMCAwMS0uMTE3LTEuOTkzTDcgMTBoNHptNi00YTEgMSAwIDAxLjExNyAxLjk5M0wxNyA4SDdhMSAxIDAgMDEtLjExNy0xLjk5M0w3IDZoMTB6Ii8+PC9nPjwvc3ZnPg==",alt:"livechat hover"}):c.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iIzg1QUNCMCIgZD0iTTI5IDEwbC4xNzYuMDA1QTMgMyAwIDAxMzIgMTN2MTZsLS4wMDYuMTE0Yy0uMDg3LjgxNC0xLjA5OSAxLjE5Ni0xLjcwMS41OTNMMjYuNTg2IDI2SDExbC0uMTc2LS4wMDVBMyAzIDAgMDE4IDIzdi0zaDJ2M2wuMDA3LjExN0ExIDEgMCAwMDExIDI0aDE2bC4xMzEuMDA5Yy4yMTcuMDI4LjQyLjEyOC41NzYuMjg0TDMwIDI2LjU4NFYxM2wtLjAwNy0uMTE3QTEgMSAwIDAwMjkgMTJoLTN2LTJoM3ptLTgtOGEzIDMgMCAwMTMgM3YxMGEzIDMgMCAwMS0zIDNINS40MTRsLTMuNzA3IDMuNzA3Yy0uNjAyLjYwMy0xLjYxNC4yMi0xLjcwMS0uNTkzTDAgMjFWNWEzIDMgMCAwMTMtM3ptMCAySDNhMSAxIDAgMDAtMSAxdjEzLjU4NGwyLjI5My0yLjI5MWEuOTk2Ljk5NiAwIDAxLjU3Ni0uMjg0TDUgMTZoMTZhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTF6bS0xMCA2YTEgMSAwIDAxLjExNyAxLjk5M0wxMSAxMkg3YTEgMSAwIDAxLS4xMTctMS45OTNMNyAxMGg0em02LTRhMSAxIDAgMDEuMTE3IDEuOTkzTDE3IDhIN2ExIDEgMCAwMS0uMTE3LTEuOTkzTDcgNmgxMHoiLz48L3N2Zz4=",alt:"livechat ic"})))}},ctXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var i=n("q1tI"),c=n.n(i),a=n("txul"),M=function(){var e=c.a.useState(!1),t=e[0],i=e[1],M=Object(a.J)()&&window.LC_API||{},o=c.a.useState(!1),u=o[0],l=o[1],r=c.a.useRef(null),w=new URLSearchParams(Object(a.J)()&&window.location.search||"").get("is_livechat_open");return c.a.useEffect((function(){var e=null,t=null;if(Object(a.J)()){var c=Object(a.A)();try{n.e(84).then(n.bind(null,"49Cj")).then((function(e){r.current=e}))}catch(M){}e=setInterval((function(){var e=Object(a.w)(c);l(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){i(!0),"true"===(null==w?void 0:w.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),c.a.useEffect((function(){if(Object(a.J)()){var e=null,n=Object(a.A)();if(r.current)try{e=r.current.init({licenseId:a.O,clientId:a.N})}catch(i){}t&&window.LiveChatWidget.on("ready",(function(){var t=Object(a.G)(n),i=Object(a.w)(n),c=t||{},M=c.utm_source,o=c.utm_medium,l=c.utm_campaign,r=i||{},w=r.loginid,I=r.email,g=r.landing_company_shortcode,d=r.currency,s=r.residence,D=r.first_name,A=r.last_name,T={is_logged_in:u,loginid:null!=w?w:"",landing_company_shortcode:null!=g?g:"",currency:null!=d?d:"",residence:null!=s?s:"",email:null!=I?I:"",utm_source:null!=M?M:"",utm_medium:null!=o?o:"",utm_campaign:null!=l?l:""};if(window.LiveChatWidget.call("set_session_variables",T),u)I&&window.LiveChatWidget.call("set_customer_email",I),D&&A&&window.LiveChatWidget.call("set_customer_name",D+" "+A);else{var m=window.LiveChatWidget.get("chat_data").chatId;m&&e&&e.on("connected",(function(){var t;null===(t=e)||void 0===t||t.deactivateChat({chatId:m}).catch((function(){}))})),window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")}var x=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==x?void 0:x.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[u,r,t]),[t,M]}}}]);
//# sourceMappingURL=103-27d351280ea329fe0baf.js.map