(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(3),s=n.n(a),i=(n(12),n(13),n(4)),o=n(5),l=n(7),b=n(6),u=n(0),d=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={prev:0,current:0,operation:0,dot:!1,dotcount:1},t.dotpressed=function(){t.setState({dot:!0})},t.getmyid=function(e){if(0!==t.state.current){var n=10*t.state.current+e;t.setState({current:n})}else t.setState({current:e});console.log(t.state.current)},t.allop=function(e){t.setState({prev:t.state.current}),t.setState({current:0}),t.setState({operation:e})},t.equalsto=function(){11===t.state.operation&&t.setState({current:t.state.current+t.state.prev}),12===t.state.operation&&t.setState({current:t.state.prev-t.state.current}),13===t.state.operation&&t.setState({current:t.state.current*t.state.prev}),14===t.state.operation&&t.setState({current:t.state.prev/t.state.current})},t.clearall=function(){t.setState({current:0})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"d-flex justify-content-center mt-2 mb-4",children:Object(u.jsx)("input",{className:"border shadow px-4",type:"text",value:String(this.state.current)})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"d-flex justify-content-center mb-4 mt-2",children:[Object(u.jsx)("button",{name:"C",value:"C",className:"btn btn-lg btn-warning mx-2 px-3 border",onClick:function(){return t.clearall()},children:"C"}),Object(u.jsx)("button",{name:"+",value:"+",className:"btn btn-lg btn-warning mx-2 px-3 border",onClick:function(e){return t.allop(11)},children:"+"}),Object(u.jsx)("button",{name:"-",value:"-",className:"btn btn-lg btn-warning mx-2 px-3 border",onClick:function(e){return t.allop(12)},children:"-"}),Object(u.jsx)("button",{name:"*",value:"*",className:"btn btn-lg btn-warning mx-2 px-3 border",onClick:function(e){return t.allop(13)},children:"*"}),Object(u.jsx)("button",{name:"/",value:"/",className:"btn btn-lg btn-warning mx-2 px-3 border",onClick:function(e){return t.allop(14)},children:"/"}),Object(u.jsx)("button",{name:"=",value:"=",className:"btn btn-lg btn-success mx-2 px-4 border",onClick:function(){return t.equalsto()},children:"="})]}),Object(u.jsxs)("div",{className:"container d-flex justify-content-center mb-3",children:[Object(u.jsx)("button",{onClick:function(){return t.getmyid(1)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"1"}),Object(u.jsx)("button",{onClick:function(){return t.getmyid(2)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"2"}),Object(u.jsx)("button",{onClick:function(){return t.getmyid(3)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"3"})]}),Object(u.jsxs)("div",{className:"container d-flex justify-content-center mb-3",children:[Object(u.jsx)("button",{onClick:function(){return t.getmyid(4)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"4"}),Object(u.jsx)("button",{onClick:function(){return t.getmyid(5)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"5"}),Object(u.jsx)("button",{onClick:function(){return t.getmyid(6)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"6"})]}),Object(u.jsxs)("div",{className:"container d-flex justify-content-center mb-3",children:[Object(u.jsx)("button",{onClick:function(){return t.getmyid(7)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"7"}),Object(u.jsx)("button",{onClick:function(){return t.getmyid(8)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"8"}),Object(u.jsx)("button",{onClick:function(){return t.getmyid(9)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"9"})]}),Object(u.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(u.jsx)("button",{onClick:function(){return t.getmyid(0)},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"0"}),Object(u.jsx)("button",{onClick:function(){return t.dotpressed()},className:"btn btn-lg btn-primary mx-2 px-3 border",children:"."})]})]})]})}}]),n}(r.Component);var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(d,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};n(15);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.9131d3b0.chunk.js.map