"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[5732],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,b=u["".concat(c,".").concat(p)]||u[p]||s[p]||o;return r?n.createElement(b,m(m({ref:t},l),{},{components:r})):n.createElement(b,m({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,m=new Array(o);m[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var d=2;d<o;d++)m[d]=r[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6676:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),m=["components"],i={sidebar_label:"Breadcrumb",sidebar_position:2},c="Breadcrumb",d={unversionedId:"components/breadcrumb",id:"components/breadcrumb",title:"Breadcrumb",description:"BlazorBootstrap's breadcrumb component indicates the current page's location within a navigational hierarchy that automatically adds separators.",source:"@site/docs/components/breadcrumb.md",sourceDirName:"components",slug:"/components/breadcrumb",permalink:"/docs/components/breadcrumb",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/breadcrumb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Breadcrumb",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/docs/components/alerts"},next:{title:"Buttons",permalink:"/docs/components/buttons"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Breadcrumb",id:"breadcrumb-1",level:3},{value:"Dividers",id:"dividers",level:3},{value:"Embedded SVG icon",id:"embedded-svg-icon",level:3}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"breadcrumb"},"Breadcrumb"),(0,o.kt)("p",null,"BlazorBootstrap's breadcrumb component indicates the current page's location within a navigational hierarchy that automatically adds separators."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Items"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"List<BreadcrumbItem>")),(0,o.kt)("td",{parentName:"tr",align:null},"List of all the items."),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"breadcrumb-1"},"Breadcrumb"),(0,o.kt)("img",{src:"https://i.imgur.com/hO90HoC.jpg",alt:"Blazor Bootstrap: Breadcrumb Component"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div>\n    <Breadcrumb Items="NavItems1"></Breadcrumb>\n    <Breadcrumb Items="NavItems2"></Breadcrumb>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'@code {\n    private List<BreadcrumbItem> NavItems1 { get; set; }\n    private List<BreadcrumbItem> NavItems2 { get; set; }\n\n    protected override void OnInitialized()\n    {\n        NavItems1 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n\n        NavItems2 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Docs", Href ="/docs" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/breadcrumb#examples"},"See breadcrumb demo here.")),(0,o.kt)("h3",{id:"dividers"},"Dividers"),(0,o.kt)("p",null,"Dividers are automatically added in CSS through ",(0,o.kt)("inlineCode",{parentName:"p"},"::before")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"content"),". They can be changed by modifying a local CSS custom property ",(0,o.kt)("inlineCode",{parentName:"p"},"--bs-breadcrumb-divider.")),(0,o.kt)("img",{src:"https://i.imgur.com/oUqUOY1.jpg",alt:"Blazor Bootstrap: Breadcrumb Component - Dividers"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div>\n    <Breadcrumb style="--bs-breadcrumb-divider: \'>\';" Items="NavItems2"></Breadcrumb>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'@code {\n    private List<BreadcrumbItem> NavItems2 { get; set; }\n\n    protected override void OnInitialized()\n    {\n        NavItems2 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Docs", Href ="/docs" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/breadcrumb#dividers"},"See breadcrumb with dividers demo here.")),(0,o.kt)("h3",{id:"embedded-svg-icon"},"Embedded SVG icon"),(0,o.kt)("p",null,"It's also possible to use an embedded SVG icon. Apply it via our CSS custom property"),(0,o.kt)("img",{src:"https://i.imgur.com/mZaXqgZ.jpg",alt:"Blazor Bootstrap: Breadcrumb Component - Embedded SVG icon"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml"},"<div>\n    <Breadcrumb style=\"--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);\" Items=\"NavItems2\"></Breadcrumb>\n</div>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'@code {\n    private List<BreadcrumbItem> NavItems2 { get; set; }\n\n    protected override void OnInitialized()\n    {\n        NavItems2 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Docs", Href ="/docs" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/breadcrumb#embedded-svg-icon"},"See breadcrumb with embedded svg icon demo here.")))}p.isMDXComponent=!0}}]);