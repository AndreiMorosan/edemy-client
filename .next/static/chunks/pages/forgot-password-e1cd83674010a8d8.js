(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{98165:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(1413),a=r(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},u=r(42135),c=function(e,t){return a.createElement(u.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};c.displayName="SyncOutlined";var o=a.forwardRef(c)},52036:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return r(11066)}])},11066:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(70655),s=r(85893),u=r(67294),c=r(50196),o=r(22920),l=r(98165);r(41664);var i=r(5144),p=r(11163),d=function(){var e,t=(0,u.useState)(""),r=t[0],d=t[1],f=(0,u.useState)(!1),m=f[0],h=f[1],w=(0,u.useState)(""),b=w[0],v=w[1],g=(0,u.useState)(""),_=g[0],y=g[1],x=(0,u.useState)(!1),N=x[0],j=x[1],C=(0,u.useContext)(i._).state.user,E=(0,p.useRouter)();(0,u.useEffect)(function(){null!==C&&E.push("/")},[C]);var S,Z=(e=(0,n.Z)(function(e){var t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:e.preventDefault(),j(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,c.Z.post("/api/forgot-password",{email:r})];case 2:return n.sent().data,h(!0),(0,o.Am)("Check your email for the secret code"),j(!1),[3,4];case 3:return t=n.sent(),j(!1),(0,o.Am)(t.response.data),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)}),k=(S=(0,n.Z)(function(e){var t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:e.preventDefault(),n.label=1;case 1:return n.trys.push([1,3,,4]),j(!0),[4,c.Z.post("/api/reset-password",{email:r,code:b,newPassword:_})];case 2:return n.sent().data,d(""),v(""),y(""),j(!1),(0,o.Am)("Great! Now you can login with your new password"),[3,4];case 3:return t=n.sent(),j(!1),(0,o.Am)(t.response.data),[3,4];case 4:return[2]}})}),function(e){return S.apply(this,arguments)});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"jumbotron text-center bg-primary square",children:"Forgot Password"}),(0,s.jsx)("div",{className:"container col-md-4 offset-md-4 pb-5",children:(0,s.jsxs)("form",{onSubmit:m?k:Z,children:[(0,s.jsx)("input",{type:"email",className:"form-control mb-4 p-4",value:r,onChange:function(e){return d(e.target.value)},placeholder:"Enter email",required:!0}),m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"text",className:"form-control mb-4 p-4",value:b,onChange:function(e){return v(e.target.value)},placeholder:"Enter secret code",required:!0}),(0,s.jsx)("input",{type:"password",className:"form-control mb-4 p-4",value:_,onChange:function(e){return y(e.target.value)},placeholder:"New Password",required:!0})]}),(0,s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block p-2 w-100",disabled:N||!r,children:N?(0,s.jsx)(l.Z,{spin:!0}):"Submit"})]})})]})};t.default=d}},function(e){e.O(0,[774,888,179],function(){return e(e.s=52036)}),_N_E=e.O()}]);