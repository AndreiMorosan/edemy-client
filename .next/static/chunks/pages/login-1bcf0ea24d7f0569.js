(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{98165:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(1413),s=r(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},c=r(42135),i=function(e,t){return s.createElement(c.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};i.displayName="SyncOutlined";var u=s.forwardRef(i)},36429:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(64984)}])},64984:function(e,t,r){"use strict";r.r(t);var n=r(47568),s=r(70655),a=r(85893),c=r(67294),i=r(50196),u=r(22920),l=r(98165),o=r(41664),d=r.n(o),p=r(5144),f=r(11163),h=function(){var e,t=(0,c.useState)(""),r=t[0],o=t[1],h=(0,c.useState)(""),m=h[0],g=h[1],x=(0,c.useState)(!1),b=x[0],w=x[1],N=(0,c.useContext)(p._),j=N.state.user,_=N.dispatch,v=(0,f.useRouter)();(0,c.useEffect)(function(){null!==j&&v.push("/")},[j]);var y=(e=(0,n.Z)(function(e){var t,n;return(0,s.__generator)(this,function(s){switch(s.label){case 0:e.preventDefault(),s.label=1;case 1:return s.trys.push([1,3,,4]),w(!0),[4,i.Z.post("/api/login",{email:r,password:m})];case 2:return _({type:"LOGIN",payload:t=s.sent().data}),window.localStorage.setItem("user",JSON.stringify(t)),v.push("/user"),[3,4];case 3:return n=s.sent(),(0,u.Am)(n.response.data),w(!1),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"jumbotron text-center bg-primary square",children:"Login"}),(0,a.jsxs)("div",{className:"container col-md-4 offset-md-4 pb-5",children:[(0,a.jsxs)("form",{onSubmit:y,children:[(0,a.jsx)("input",{type:"email",className:"form-control mb-4 p-4",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Enter email",required:!0}),(0,a.jsx)("input",{type:"password",className:"form-control mb-4 p-4",value:m,onChange:function(e){return g(e.target.value)},placeholder:"Enter password",required:!0}),(0,a.jsx)("button",{type:"submit",className:"btn btn-block btn-primary w-100",disabled:!r||!m||b,children:b?(0,a.jsx)(l.Z,{spin:!0}):"Submit"})]}),(0,a.jsxs)("p",{className:"text-center pt-3",children:["Not yet registered?"," ",(0,a.jsx)(d(),{href:"/register",children:(0,a.jsx)("a",{children:"Register"})})]}),(0,a.jsx)("p",{className:"text-center",children:(0,a.jsx)(d(),{href:"/forgot-password",children:(0,a.jsx)("a",{className:"text-danger",children:"Forgot password?"})})})]})]})};t.default=h}},function(e){e.O(0,[774,888,179],function(){return e(e.s=36429)}),_N_E=e.O()}]);