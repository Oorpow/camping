"use strict";(self.webpackChunkcamping=self.webpackChunkcamping||[]).push([[945],{7945:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(890),i=n(1889),a=n(7047),o=(n(2791),n(2983)),s=n(9212),c=n(7756),d=n(5392),l={order_title:"AccountOrder_order_title__khHfh",order_item:"AccountOrder_order_item__MLVnT",order_item_img:"AccountOrder_order_item_img__AnBTe",order_item_text:"AccountOrder_order_item_text__zKhmh",order_item_text_desc_font:"AccountOrder_order_item_text_desc_font__k6-lL",order_item_text_detail:"AccountOrder_order_item_text_detail__gIrhz",order_item_text_detail_font:"AccountOrder_order_item_text_detail_font__nx1zH",order_title_main:"AccountOrder_order_title_main__j62TG"},h=n(184),m=function(t){var e=t.title,n=t.icon,i=t.num;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{variant:"h6",children:e}),(0,h.jsxs)(r.Z,{variant:"body2",className:l.order_item_text_desc_font,children:[n," ",(0,h.jsx)(r.Z,{variant:"caption",marginLeft:"5px",children:i})]})]})},u=function(t){var e=t.item,n=0;return n=e.tent.length>1?e.tent.reduce((function(t,e){return t.num*t.price+e.num*e.price})):e.tent[0].num*e.tent[0].price,(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:l.order_title,children:[(0,h.jsxs)(r.Z,{variant:"h5",className:l.order_title_main,children:["Location: ",e.location]}),(0,h.jsxs)(r.Z,{variant:"body2",children:["$ ",n]})]}),e.tent.map((function(t){return(0,h.jsx)(i.ZP,{item:!0,xs:12,sx:{paddingBottom:"10px",borderBottom:"1px solid #ccc"},children:(0,h.jsxs)("div",{className:l.order_item,children:[(0,h.jsx)("div",{className:l.order_item_img,children:(0,h.jsx)("img",{src:"http://175.178.99.5:5005"+t.src,alt:t.title})}),(0,h.jsxs)("div",{className:l.order_item_text,children:[(0,h.jsx)("div",{className:l.order_item_text_desc,children:(0,h.jsx)(m,{title:t.title,num:t.capacity,icon:(0,h.jsx)(o.Z,{sx:{color:"#374151",fontSize:"22px"}})})}),(0,h.jsxs)("div",{className:l.order_item_text_detail,children:[(0,h.jsxs)(r.Z,{variant:"body2",className:l.order_item_text_detail_font,children:[(0,h.jsx)(s.Z,{sx:{color:"#374151",fontSize:"22px"}}),(0,h.jsxs)(r.Z,{variant:"caption",marginLeft:"5px",children:[e.duration.startDate," ~"," ",e.duration.endDate]})]}),(0,h.jsxs)(r.Z,{variant:"caption",className:l.order_item_text_desc_font,children:[(0,h.jsx)(c.Z,{sx:{color:"#374151",fontSize:"22px"}}),e.contactInfo.firstName+e.contactInfo.lastName]})]})]})]})},t._id)}))]})},_=function(t){var e=t.userId,n=(0,d.FN)(e),r=n.data,o=(n.isSuccess,n.isLoading);return(0,h.jsx)(i.ZP,{container:!0,direction:"column",children:o?Array.from(new Array(3)).map((function(t,e){return(0,h.jsx)(i.ZP,{container:!0,item:!0,children:(0,h.jsxs)(i.ZP,{item:!0,xs:12,marginTop:"20px",children:[(0,h.jsx)(a.Z,{variant:"rectangular",height:"130px"}),(0,h.jsx)(a.Z,{}),(0,h.jsx)(a.Z,{width:"60%"})]})},e)})):r.data.map((function(t){return(0,h.jsx)(i.ZP,{container:!0,item:!0,rowSpacing:2,marginTop:"15px",children:(0,h.jsx)(u,{item:t})},t._id)}))})}},9212:function(t,e,n){var r=n(4836);e.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");e.Z=o},2983:function(t,e,n){var r=n(4836);e.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"}),"PeopleOutline");e.Z=o},7756:function(t,e,n){var r=n(4836);e.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PersonOutline");e.Z=o},7047:function(t,e,n){n.d(e,{Z:function(){return N}});var r=n(168),i=n(3366),a=n(7462),o=n(2791),s=n(8182),c=n(2554),d=n(9961);function l(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function h(t){return parseFloat(t)}var m=n(2065),u=n(6934),_=n(1402),x=n(41);function v(t){return(0,x.Z)("MuiSkeleton",t)}(0,n(8856).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f,p,g,Z,j,w,b,C,S=n(184),k=["animation","className","component","height","style","variant","width"],y=(0,c.F4)(j||(j=f||(f=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),z=(0,c.F4)(w||(w=p||(p=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=l(e.shape.borderRadius)||"px",i=h(e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,m.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,c.iv)(b||(b=g||(g=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),y)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,c.iv)(C||(C=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),z,(n.vars||n).palette.action.hover)})),N=o.forwardRef((function(t,e){var n=(0,_.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,c=n.className,l=n.component,h=void 0===l?"span":l,m=n.height,u=n.style,x=n.variant,f=void 0===x?"text":x,p=n.width,g=(0,i.Z)(n,k),Z=(0,a.Z)({},n,{animation:o,component:h,variant:f,hasChildren:Boolean(g.children)}),j=function(t){var e=t.classes,n=t.variant,r=t.animation,i=t.hasChildren,a=t.width,o=t.height,s={root:["root",n,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,d.Z)(s,v,e)}(Z);return(0,S.jsx)(A,(0,a.Z)({as:h,ref:e,className:(0,s.Z)(j.root,c),ownerState:Z},g,{style:(0,a.Z)({width:p,height:m},u)}))}))}}]);
//# sourceMappingURL=945.9838508b.chunk.js.map