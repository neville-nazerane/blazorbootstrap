"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[7447],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(g,l(l({ref:e},m),{},{components:r})):a.createElement(g,l({ref:e},m))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},833:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"BlazorBootstrap v0.3.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.3.0","blazorbootstrap","grid"]},l=void 0,i={permalink:"/blog/2022/08/31/blazorbootstrap-0.3.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2022-08-31-blazorbootstrap-0.3.0.md",source:"@site/blog/2022-08-31-blazorbootstrap-0.3.0.md",title:"BlazorBootstrap v0.3.0",description:"We are excited to release 0.3.0 with significant enhancements to the grid component.",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"v0.3.0",permalink:"/blog/tags/v-0-3-0"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"grid",permalink:"/blog/tags/grid"}],readingTime:.5,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"BlazorBootstrap v0.3.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.3.0","blazorbootstrap","grid"]},prevItem:{title:"BlazorBootstrap v0.4.0",permalink:"/blog/2022/09/04/blazorbootstrap-0.4.0"},nextItem:{title:"BlazorBootstrap v0.2.6",permalink:"/blog/2022/08/13/blazorbootstrap-0.2.6"}},p={authorsImageUrls:[void 0]},s=[{value:"Updates",id:"updates",level:3},{value:"Grid component enhancements",id:"grid-component-enhancements",level:3},{value:"Links",id:"links",level:3}],m={toc:s};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are excited to release ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.0")," with significant enhancements to the grid component."),(0,n.kt)("img",{src:"https://i.imgur.com/36RsWZ3.png",alt:"Blazor Bootstrap: Grid Component"}),(0,n.kt)("h3",{id:"updates"},"Updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Grid")," component enhancements")),(0,n.kt)("h3",{id:"grid-component-enhancements"},"Grid component enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multiple columns filtering (client side and server side)"),(0,n.kt)("li",{parentName:"ul"},"Set default filtering"),(0,n.kt)("li",{parentName:"ul"},"Disable specific column filter"),(0,n.kt)("li",{parentName:"ul"},"Increase filter textbox width"),(0,n.kt)("li",{parentName:"ul"},"Set default sorting"),(0,n.kt)("li",{parentName:"ul"},"Disable specific column sorting"),(0,n.kt)("li",{parentName:"ul"},"Header text alignment"),(0,n.kt)("li",{parentName:"ul"},"Cell alignment"),(0,n.kt)("li",{parentName:"ul"},"Cell formatting"),(0,n.kt)("li",{parentName:"ul"},"Cell nowrap"),(0,n.kt)("li",{parentName:"ul"},"Pagination alignment"),(0,n.kt)("li",{parentName:"ul"},"Empty data"),(0,n.kt)("li",{parentName:"ul"},"Responsive grid with horizontal scrolling")),(0,n.kt)("h3",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/grid"},"Grid Demos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/grid"},"Grid Component Documentation"))))}c.isMDXComponent=!0}}]);