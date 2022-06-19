"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[2479],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||r;return n?o.createElement(g,l(l({ref:e},s),{},{components:n})):o.createElement(g,l({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2149:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={sidebar_label:"Buttons",sidebar_position:3},u="Buttons",p={unversionedId:"components/buttons",id:"components/buttons",title:"Buttons",description:"Use BlazorBootstrap's button styles for actions in forms, dialogs, and more with support for multiple sizes, states, etc.",source:"@site/docs/components/buttons.md",sourceDirName:"components",slug:"/components/buttons",permalink:"/docs/components/buttons",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/buttons.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Buttons",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"},next:{title:"Callout",permalink:"/docs/components/callout"}},s={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Buttons",id:"buttons-1",level:3},{value:"Button tags",id:"button-tags",level:3},{value:"Outline Buttons",id:"outline-buttons",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Disabled State",id:"disabled-state",level:3},{value:"Block Buttons",id:"block-buttons",level:3},{value:"Toogle States",id:"toogle-states",level:3},{value:"Loading spinner",id:"loading-spinner",level:3},{value:"Tooltip",id:"tooltip",level:3},{value:"Events",id:"events",level:3},{value:"Click events",id:"click-events",level:4},{value:"Double click event",id:"double-click-event",level:4},{value:"Click event with arguments",id:"click-event-with-arguments",level:4}],d={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,"Use BlazorBootstrap's button styles for actions in forms, dialogs, and more with support for multiple sizes, states, etc."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Active"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", places the component in the active state with active styling."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Makes the button to span the full width of a parent."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,r.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this ",(0,r.kt)("inlineCode",{parentName:"td"},"Button"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ButtonColor")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the button color."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", disables the component's functionality and places it in a disabled state."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Loading"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows the loading spinner or a ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadingTemplate"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadingTemplate"),(0,r.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the component loading template."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadingText"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the loadgin text."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Loading..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Outline"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Makes the button to have the outlines."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Size")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the size of a button."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TabIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"int?"),(0,r.kt)("td",{parentName:"tr",align:null},"If defined, indicates that its element can be focused and can participates in sequential keyboard navigation."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Target")),(0,r.kt)("td",{parentName:"tr",align:null},"The target attribute specifies where to open the linked document for a ",(0,r.kt)("inlineCode",{parentName:"td"},"ButtonType.Link"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Target.None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"To"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Denotes the target route of the ",(0,r.kt)("inlineCode",{parentName:"td"},"ButtonType.Link")," button."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TooltipPlacement"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TooltipPlacement")),(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip placement"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TooltipPlacement.Top"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TooltipTitle"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays informative text when users hover, focus, or tap an element."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ButtonType")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the button type."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ButtonType.Button"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"buttons-1"},"Buttons"),(0,r.kt)("p",null,"BlazorBootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control."),(0,r.kt)("img",{src:"https://i.imgur.com/Ne7FJ5H.jpg",alt:"Blazor Bootstrap: Button Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"> Primary </Button>\n    <Button Color="ButtonColor.Secondary"> Secondary </Button>\n    <Button Color="ButtonColor.Success"> Success </Button>\n    <Button Color="ButtonColor.Danger"> Danger </Button>\n    <Button Color="ButtonColor.Warning"> Warning </Button>\n    <Button Color="ButtonColor.Info"> Info </Button>\n    <Button Color="ButtonColor.Light"> Light </Button>\n    <Button Color="ButtonColor.Dark"> Dark </Button>\n    <Button Color="ButtonColor.Link"> Link </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#examples"},"See buttons demo here.")),(0,r.kt)("h3",{id:"button-tags"},"Button tags"),(0,r.kt)("img",{src:"https://i.imgur.com/ZscbcWh.jpg",alt:"Blazor Bootstrap: Button Component - Button tags"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" To="#"> Link </Button>\n    <Button Type="ButtonType.Submit" Color="ButtonColor.Primary" To="#"> Button </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#button-tags"},"See button tags demo here.")),(0,r.kt)("h3",{id:"outline-buttons"},"Outline Buttons"),(0,r.kt)("img",{src:"https://i.imgur.com/ta0Mgtk.jpg",alt:"Blazor Bootstrap: Button Component - Outline Buttons"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Outline="true"> Primary </Button>\n    <Button Color="ButtonColor.Secondary" Outline="true"> Secondary </Button>\n    <Button Color="ButtonColor.Success" Outline="true"> Success </Button>\n    <Button Color="ButtonColor.Danger" Outline="true"> Danger </Button>\n    <Button Color="ButtonColor.Warning" Outline="true"> Warning </Button>\n    <Button Color="ButtonColor.Info" Outline="true"> Info </Button>\n    <Button Color="ButtonColor.Dark" Outline="true"> Dark </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#outline-buttons"},"See outline button demo here.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast."))),(0,r.kt)("h3",{id:"sizes"},"Sizes"),(0,r.kt)("p",null,"Fancy larger or smaller buttons? Add ",(0,r.kt)("inlineCode",{parentName:"p"},'Size="Size.Large"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'Size="Size.Small"')," for additional sizes."),(0,r.kt)("img",{src:"https://i.imgur.com/Vdiyg6q.jpg",alt:"Blazor Bootstrap: Button Component - Sizes"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Large"> Large button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Large"> Large button </Button>\n</p>\n<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Small"> Small button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Small"> Small button </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#sizes"},"See buttons with different size demo here.")),(0,r.kt)("h3",{id:"disabled-state"},"Disabled State"),(0,r.kt)("p",null,"Make buttons look inactive by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},'Disabled="true"')," boolean parameter to any ",(0,r.kt)("inlineCode",{parentName:"p"},"<Button>")," component. Disabled buttons have ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer-events: none")," applied to, preventing hover and active states from triggering."),(0,r.kt)("img",{src:"https://i.imgur.com/A0MlIha.jpg",alt:"Blazor Bootstrap: Button Component - Disable State"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Large button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Large button </Button>\n</p>\n<p>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Primary link </Button>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Link </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#disabled-state"},"See button disabled state demo here.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Disabled buttons using the ",(0,r.kt)("inlineCode",{parentName:"p"},'Type="ButtonType.Link"')," parameter behave a bit different."))),(0,r.kt)("h3",{id:"block-buttons"},"Block Buttons"),(0,r.kt)("p",null,'Create responsive stacks of full-width, "block buttons" like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.'),(0,r.kt)("img",{src:"https://i.imgur.com/jB7joKv.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,r.kt)("img",{src:"https://i.imgur.com/iSsEMgi.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2 d-md-block mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,r.kt)("img",{src:"https://i.imgur.com/20LuzVC.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2 col-6 mx-auto mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,r.kt)("img",{src:"https://i.imgur.com/bJXgFkF.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#block-buttons"},"See block buttons demo here.")),(0,r.kt)("h3",{id:"toogle-states"},"Toogle States"),(0,r.kt)("p",null,"If you''re pre-toggling a button, you must manually add the ",(0,r.kt)("inlineCode",{parentName:"p"},'Active="true"')," parameter."),(0,r.kt)("img",{src:"https://i.imgur.com/JH9SZxQ.jpg",alt:"Blazor Bootstrap: Button Component - Button Toogle States"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"> Toggle button </Button>\n    <Button Color="ButtonColor.Primary" Active="true"> Active toggle button </Button>\n    <Button Color="ButtonColor.Primary" Disabled="true"> Disabled toggle button </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#toggle-states"},"See button toogle states demo here.")),(0,r.kt)("h3",{id:"loading-spinner"},"Loading spinner"),(0,r.kt)("p",null,"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."),(0,r.kt)("img",{src:"https://i.imgur.com/ENKhcXR.jpg",alt:"Blazor Bootstrap: Button Component - Button with Loading Spinner"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Loading="true" />\n    <Button Color="ButtonColor.Primary" Loading="true" LoadingText="Saving..." />\n    <Button Color="ButtonColor.Primary" Loading="true">\n        <LoadingTemplate>\n            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>\n            Loading...\n        </LoadingTemplate>\n    </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#loading-spinner"},"See button with loading spinner demo here.")),(0,r.kt)("h3",{id:"tooltip"},"Tooltip"),(0,r.kt)("p",null,"Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left."),(0,r.kt)("img",{src:"https://i.imgur.com/zp3G6pZ.jpg",alt:"Blazor Bootstrap: Button Component - Buttons with Tooltip"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Top"> Tooltip Top </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Right"> Tooltip Right </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Bottom"> Tooltip Bottom </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Left"> Tooltip Left </Button>\n</p>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#tooltip"},"See button with tooltip demo here.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"HTML tooltips not supported at this moment."))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("h4",{id:"click-events"},"Click events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" @onclick="OnClick"> Click Event </Button>\n</p>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'@code{\n\n    protected void OnClick(EventArgs args)\n    {\n        Console.WriteLine("click event");\n    }\n\n}\n')),(0,r.kt)("h4",{id:"double-click-event"},"Double click event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" @ondblclick="OnDoubleClick"> Double Click Event </Button>\n</p>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'@code{\n\n    protected void OnDoubleClick(EventArgs args)\n    {\n        Console.WriteLine("double click event");\n    }\n\n}\n')),(0,r.kt)("h4",{id:"click-event-with-arguments"},"Click event with arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" @onclick="((args) => OnClickWithArgs(args, message))"> Click   Args </Button>\n</p>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'@code{\n\n    public string message = "Test message";\n\n    protected void OnClickWithArgs(EventArgs args, string message)\n    {\n        Console.WriteLine($"message: {message}");\n    }\n\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/buttons#click-events"},"See button click events demo here.")))}c.isMDXComponent=!0}}]);