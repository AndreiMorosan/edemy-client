(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{89739:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1413),s=n(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},a=n(42135),i=function(e,t){return s.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};i.displayName="CheckCircleFilled";var o=s.forwardRef(i)},74842:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1413),s=n(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"},a=n(42135),i=function(e,t){return s.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};i.displayName="PlayCircleOutlined";var o=s.forwardRef(i)},24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return c}});var r=n(4942),s=n(87462),c=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,o=-1,l={};t.ZP={matchHandlers:{},dispatch:function(e){return l=e,i.forEach(function(e){return e(l)}),i.size>=1},subscribe:function(e){return i.size||this.register(),o+=1,i.set(o,e),e(l),o},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach(function(t){var n=a[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),i.clear()},register:function(){var e=this;Object.keys(a).forEach(function(t){var n=a[t],c=function(n){var c=n.matches;e.dispatch((0,s.Z)((0,s.Z)({},l),(0,r.Z)({},t,c)))},i=window.matchMedia(n);i.addListener(c),e.matchHandlers[n]={mql:i,listener:c},c(i)})}}},86871:function(e,t,n){"use strict";n.d(t,{C:function(){return z}});var r=n(87462),s=n(4942),c=n(71002),a=n(97685),i=n(94184),o=n.n(i),l=n(48555),u=n(42550),f=n(67294),d=n(53124),m=n(68821),p=n(24308),v=f.createContext("default"),h=function(e){var t=e.children,n=e.size;return f.createElement(v.Consumer,null,function(e){return f.createElement(v.Provider,{value:n||e},t)})},g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n},y=function(e,t){var n,i,h,y=f.useContext(v),x=f.useState(1),Z=(0,a.Z)(x,2),b=Z[0],E=Z[1],w=f.useState(!1),j=(0,a.Z)(w,2),N=j[0],C=j[1],O=f.useState(!0),S=(0,a.Z)(O,2),_=S[0],z=S[1],k=f.useRef(null),L=f.useRef(null),P=(0,u.sQ)(t,k),M=f.useContext(d.E_).getPrefixCls,H=function(){if(L.current&&k.current){var t=L.current.offsetWidth,n=k.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,s=void 0===r?4:r;2*s<n&&E(n-2*s<t?(n-2*s)/t:1)}}};f.useEffect(function(){C(!0)},[]),f.useEffect(function(){z(!0),E(1)},[e.src]),f.useEffect(function(){H()},[e.gap]);var R=function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},T=e.prefixCls,I=e.shape,A=void 0===I?"circle":I,D=e.size,F=void 0===D?"default":D,B=e.src,W=e.srcSet,q=e.icon,V=e.className,U=e.alt,X=e.draggable,G=e.children,K=e.crossOrigin,Q=g(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),$="default"===F?y:F,J=Object.keys("object"===(0,c.Z)($)&&$||{}).some(function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)}),Y=(0,m.Z)(J),ee=f.useMemo(function(){if("object"!==(0,c.Z)($))return{};var e=$[p.c4.find(function(e){return Y[e]})];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:q?e/2:18}:{}},[Y,$]),et=M("avatar",T),en=o()((n={},(0,s.Z)(n,"".concat(et,"-lg"),"large"===$),(0,s.Z)(n,"".concat(et,"-sm"),"small"===$),n)),er=f.isValidElement(B),es=o()(et,en,(i={},(0,s.Z)(i,"".concat(et,"-").concat(A),!!A),(0,s.Z)(i,"".concat(et,"-image"),er||B&&_),(0,s.Z)(i,"".concat(et,"-icon"),!!q),i),V),ec="number"==typeof $?{width:$,height:$,lineHeight:"".concat($,"px"),fontSize:q?$/2:18}:{};if("string"==typeof B&&_)h=f.createElement("img",{src:B,draggable:X,srcSet:W,onError:R,alt:U,crossOrigin:K});else if(er)h=B;else if(q)h=q;else if(N||1!==b){var ea="scale(".concat(b,") translateX(-50%)"),ei="number"==typeof $?{lineHeight:"".concat($,"px")}:{};h=f.createElement(l.Z,{onResize:H},f.createElement("span",{className:"".concat(et,"-string"),ref:L,style:(0,r.Z)((0,r.Z)({},ei),{msTransform:ea,WebkitTransform:ea,transform:ea})},G))}else h=f.createElement("span",{className:"".concat(et,"-string"),style:{opacity:0},ref:L},G);return delete Q.onError,delete Q.gap,f.createElement("span",(0,r.Z)({},Q,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},ec),ee),Q.style),className:es,ref:P}),h)},x=f.forwardRef(y),Z=n(50344),b=n(87381),E=function(e){return e?"function"==typeof e?e():e:null},w=n(33603),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n},N=function(e){var t=e.title,n=e.content,r=e.prefixCls;return t||n?f.createElement(f.Fragment,null,t&&f.createElement("div",{className:"".concat(r,"-title")},E(t)),f.createElement("div",{className:"".concat(r,"-inner-content")},E(n))):null},C=f.forwardRef(function(e,t){var n=e.prefixCls,s=e.title,c=e.content,a=e._overlay,i=e.placement,o=e.trigger,l=e.mouseEnterDelay,u=e.mouseLeaveDelay,m=e.overlayStyle,p=j(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),v=f.useContext(d.E_).getPrefixCls,h=v("popover",n),g=v();return f.createElement(b.Z,(0,r.Z)({placement:void 0===i?"top":i,trigger:void 0===o?"hover":o,mouseEnterDelay:void 0===l?.1:l,mouseLeaveDelay:void 0===u?.1:u,overlayStyle:void 0===m?{}:m},p,{prefixCls:h,ref:t,overlay:a||f.createElement(N,{prefixCls:h,title:s,content:c}),transitionName:(0,w.mL)(g,"zoom-big",p.transitionName)}))}),O=n(96159),S=function(e){var t=f.useContext(d.E_),n=t.getPrefixCls,r=t.direction,c=e.prefixCls,a=e.className,i=e.maxCount,l=e.maxStyle,u=e.size,m=n("avatar-group",c),p=o()(m,(0,s.Z)({},"".concat(m,"-rtl"),"rtl"===r),void 0===a?"":a),v=e.children,g=e.maxPopoverPlacement,y=e.maxPopoverTrigger,b=(0,Z.Z)(v).map(function(e,t){return(0,O.Tm)(e,{key:"avatar-key-".concat(t)})}),E=b.length;if(i&&i<E){var w=b.slice(0,i),j=b.slice(i,E);return w.push(f.createElement(C,{key:"avatar-popover-key",content:j,trigger:void 0===y?"hover":y,placement:void 0===g?"top":g,overlayClassName:"".concat(m,"-popover")},f.createElement(x,{style:l},"+".concat(E-i)))),f.createElement(h,{size:u},f.createElement("div",{className:p,style:e.style},w))}return f.createElement(h,{size:u},f.createElement("div",{className:p,style:e.style},b))},_=x;_.Group=S;var z=_},68821:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294),s=n(97685),c=n(24308),a=function(){var e,t=!(arguments.length>0)||void 0===arguments[0]||arguments[0],n=(0,r.useRef)({}),a=(e=r.useReducer(function(e){return e+1},0),(0,s.Z)(e,2)[1]);return(0,r.useEffect)(function(){var e=c.ZP.subscribe(function(e){n.current=e,t&&a()});return function(){return c.ZP.unsubscribe(e)}},[]),n.current}},61302:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/course/[slug]",function(){return n(70997)}])},70997:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(47568),s=n(10797),c=n(70655),a=n(85893),i=n(67294),o=n(11163),l=n(50196),u=n(98165),f=function(e){var t=e.children;e.showNav;var n,s=(0,i.useState)(!1),f=s[0],d=s[1],m=(0,o.useRouter)();(0,i.useEffect)(function(){p()},[]);var p=(n=(0,r.Z)(function(){var e,t;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,l.Z.get("/api/current-user")];case 1:return e.sent().data.ok&&d(!0),[3,3];case 2:return t=e.sent(),console.log(t),d(!1),m.push("/login"),[3,3];case 3:return[2]}})}),function(){return n.apply(this,arguments)});return(0,a.jsx)(a.Fragment,{children:f?(0,a.jsx)("div",{className:"container-fluid",children:t}):(0,a.jsx)(u.Z,{spin:!0,className:"d-flex justify-content-center display-1 text-primary p-5"})})},d=n(18985),m=n(71577),p=n(86871),v=n(22004),h=n(30724),g=n.n(h),y=n(1413),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},Z=n(42135),b=function(e,t){return i.createElement(Z.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:x}))};b.displayName="MenuUnfoldOutlined";var E=i.forwardRef(b),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},j=function(e,t){return i.createElement(Z.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:w}))};j.displayName="MenuFoldOutlined";var N=i.forwardRef(j),C=n(89739),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"},S=function(e,t){return i.createElement(Z.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:O}))};S.displayName="MinusCircleFilled";var _=i.forwardRef(S),z=n(74842),k=d.Z.Item,L=function(){var e=(0,i.useState)(-1),t=e[0],n=e[1],u=(0,i.useState)(!1),h=u[0],y=u[1],x=(0,i.useState)(!1);x[0],x[1];var Z,b=(0,i.useState)({lessons:[]}),w=b[0],j=b[1],O=(0,i.useState)([]),S=O[0],L=O[1],P=(0,i.useState)(!1),M=P[0],H=P[1],R=(0,i.useState)(!1),T=R[0],I=R[1],A=(0,o.useRouter)().query.slug;(0,i.useEffect)(function(){A&&W()},[A]),(0,i.useEffect)(function(){w&&q()},[w]),(0,i.useEffect)(function(){I(!1),setTimeout(function(){return I(!0)},1e3)},[t]);var D,F,B,W=(Z=(0,r.Z)(function(){var e;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return[4,l.Z.get("/api/user/course/".concat(A))];case 1:return j(e.sent().data),[2]}})}),function(){return Z.apply(this,arguments)}),q=(D=(0,r.Z)(function(){var e;return(0,c.__generator)(this,function(t){switch(t.label){case 0:return[4,l.Z.post("/api/list-completed",{courseId:w._id})];case 1:return e=t.sent().data,console.log("COMPLETED LESSONS => ",e),L(e),[2]}})}),function(){return D.apply(this,arguments)}),V=(F=(0,r.Z)(function(){var e;return(0,c.__generator)(this,function(n){switch(n.label){case 0:return[4,l.Z.post("/api/mark-completed",{courseId:w._id,lessonId:w.lessons[t]._id})];case 1:return e=n.sent().data,console.log(e),L((0,s.Z)(S).concat([w.lessons[t]._id])),[2]}})}),function(){return F.apply(this,arguments)}),U=(B=(0,r.Z)(function(){var e,n,r,s;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,l.Z.post("/api/mark-incomplete",{courseId:w._id,lessonId:w.lessons[t]._id})];case 1:return e=c.sent().data,console.log(e),n=S,console.log("ALL => ",n),(r=n.indexOf(w.lessons[t]._id))>-1&&(n.splice(r,1),console.log("ALL WITHOUT REMOVED => ",n),L(n),H(!M)),[3,3];case 2:return s=c.sent(),console.log(s),[3,3];case 3:return[2]}})}),function(){return B.apply(this,arguments)});return(0,a.jsx)(f,{children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{style:{maWidth:320},children:[(0,a.jsxs)(m.Z,{onClick:function(){return y(!h)},className:"text-primary mt-1 btn-block mb-2",children:[(0,i.createElement)(h?E:N)," ",!h&&"Lessons"]}),(0,a.jsx)(d.Z,{defaultSelectedKeys:[t],inlineCollapsed:h,style:{height:"80vh",overflow:"scroll"},children:w.lessons.map(function(e,t){return(0,a.jsxs)(k,{onClick:function(){return n(t)},icon:(0,a.jsx)(p.C,{children:t+1}),children:[e.title.substring(0,30)," ",S.includes(e._id)?(0,a.jsx)(C.Z,{className:"float-right text-primary ml-2",style:{marginTop:"13px"}}):(0,a.jsx)(_,{className:"float-right text-danger ml-2",style:{marginTop:"13px"}})]},t)})})]}),(0,a.jsx)("div",{className:"col",children:-1!==t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"col alert alert-primary square",children:[(0,a.jsx)("b",{children:w.lessons[t].title.substring(0,30)}),S.includes(w.lessons[t]._id)?(0,a.jsx)("span",{className:"float-right pointer",onClick:U,children:"Mark as incomplete"}):(0,a.jsx)("span",{className:"float-right pointer",onClick:V,children:"Mark as completed"})]}),w.lessons[t].video&&w.lessons[t].video.Location&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(v.default,{className:"player",url:T?w.lessons[t].video.Location:"/",width:"100%",height:"100%",controls:!0})})}),(0,a.jsx)(g(),{source:w.lessons[t].content,className:"single-post"})]}):(0,a.jsx)("div",{className:"d-flex justify-content-center p-5",children:(0,a.jsxs)("div",{className:"text-center p-5",children:[(0,a.jsx)(z.Z,{className:"text-primary display-1 p-5"}),(0,a.jsx)("p",{className:"lead",children:"Click on the lessons to start learning"})]})})})]})})}},10797:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return s}})}},function(e){e.O(0,[577,4,536,774,888,179],function(){return e(e.s=61302)}),_N_E=e.O()}]);