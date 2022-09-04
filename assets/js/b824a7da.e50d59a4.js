"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[3694],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return o?n.createElement(h,r(r({ref:t},u),{},{components:o})):n.createElement(h,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},960:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const l={title:"Blazor Callout Component",description:"BlazorBootstrap's callout component provides content presentation in a visually distinct manner.",image:"https://getblazorbootstrap.com/img/logo.svg",sidebar_label:"Callout",sidebar_position:5},r="Callout",i={unversionedId:"components/callout",id:"components/callout",title:"Blazor Callout Component",description:"BlazorBootstrap's callout component provides content presentation in a visually distinct manner.",source:"@site/docs/components/callout.md",sourceDirName:"components",slug:"/components/callout",permalink:"/docs/components/callout",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/callout.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Blazor Callout Component",description:"BlazorBootstrap's callout component provides content presentation in a visually distinct manner.",image:"https://getblazorbootstrap.com/img/logo.svg",sidebar_label:"Callout",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Buttons",permalink:"/docs/components/buttons"},next:{title:"Confirm Dialog",permalink:"/docs/components/confirmation-dialog"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Callout - Default",id:"callout---default",level:3},{value:"Callout - Danger",id:"callout---danger",level:3},{value:"Callout - Warning",id:"callout---warning",level:3},{value:"Callout - Info",id:"callout---info",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callout"},"Callout"),(0,a.kt)("p",null,"BlazorBootstrap's callout component provides content presentation in a visually distinct manner."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,a.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Color"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CalloutColor")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets or sets the callout color."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CalloutColor.None"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"callout---default"},"Callout - Default"),(0,a.kt)("img",{src:"https://i.imgur.com/MT3utK8.jpg",alt:"Blazor Bootstrap: Callout Component - Default"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},"<Callout>\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/callout#default"},"See callout default demo here.")),(0,a.kt)("h3",{id:"callout---danger"},"Callout - Danger"),(0,a.kt)("img",{src:"https://i.imgur.com/0EAmQcp.jpg",alt:"Blazor Bootstrap: Callout Component - Danger"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Callout Color="CalloutColor.Danger">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/callout#danger"},"See callout danger demo here.")),(0,a.kt)("h3",{id:"callout---warning"},"Callout - Warning"),(0,a.kt)("img",{src:"https://i.imgur.com/e9wy7fg.jpg",alt:"Blazor Bootstrap: Callout Component - Warning"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Callout Color="CalloutColor.Warning">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/callout#warning"},"See callout warning demo here.")),(0,a.kt)("h3",{id:"callout---info"},"Callout - Info"),(0,a.kt)("img",{src:"https://i.imgur.com/b4hecTm.jpg",alt:"Blazor Bootstrap: Callout Component - Info"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Callout Color="CalloutColor.Info">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/callout#info"},"See callout info demo here.")))}p.isMDXComponent=!0}}]);