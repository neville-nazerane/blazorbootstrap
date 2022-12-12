"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[4404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,b=d["".concat(m,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={title:"Blazor Number Input Components",description:'Blazor Bootstrap `NumberInput` component is built around HTML input of `type="number"` that prevents the user input based on the parameters set.',image:"https://i.imgur.com/iUNBkki.png",sidebar_label:"Number Input",sidebar_position:3},i="Blazor Number Input",o={unversionedId:"forms/number-input",id:"forms/number-input",title:"Blazor Number Input Components",description:'Blazor Bootstrap `NumberInput` component is built around HTML input of `type="number"` that prevents the user input based on the parameters set.',source:"@site/docs/forms/number-input.md",sourceDirName:"forms",slug:"/forms/number-input",permalink:"/docs/forms/number-input",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/forms/number-input.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Blazor Number Input Components",description:'Blazor Bootstrap `NumberInput` component is built around HTML input of `type="number"` that prevents the user input based on the parameters set.',image:"https://i.imgur.com/iUNBkki.png",sidebar_label:"Number Input",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Currency Input",permalink:"/docs/forms/currency-input"},next:{title:"Alerts",permalink:"/docs/components/alerts"}},m={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Generic type",id:"generic-type",level:3},{value:"Enable min and max",id:"enable-min-and-max",level:3},{value:"Step",id:"step",level:3},{value:"Text alignment",id:"text-alignment",level:3},{value:"Allow negative numbers",id:"allow-negative-numbers",level:3},{value:"Disable",id:"disable",level:3},{value:"Validations",id:"validations",level:3},{value:"Events: ValueChanged",id:"events-valuechanged",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blazor-number-input"},"Blazor Number Input"),(0,l.kt)("p",null,"Blazor Bootstrap ",(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput")," component is built around HTML input of ",(0,l.kt)("inlineCode",{parentName:"p"},'type="number"')," that prevents the user input based on the parameters set."),(0,l.kt)("img",{src:"https://i.imgur.com/XXD0xF4.png",alt:"Blazor Bootstrap: Number Input Component"}),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AllowNegativeNumbers"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Allows negative numbers. By default, negative numbers are not allowed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AutoComplete"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Indicates whether the NumberInput can complete the values automatically by the browser.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"EnableMinMax"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether to restrict the user input to Min and Max range. If true, restricts the user input between the Min and Max range. Else accepts the user input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Max"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'Gets or sets the max. Max ignored if EnableMinMax="false".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Min"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'Gets or sets the min. Min ignored if EnableMinMax="false".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the placeholder.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Step"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double?"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the step.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TextAlignment"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Alignment")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Alignment.None")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the text alignment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the value.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Disable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Disables number input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enables number input.")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ValueChanged"),(0,l.kt)("td",{parentName:"tr",align:"left"},"This is event fires on every user keystroke that changes the ",(0,l.kt)("inlineCode",{parentName:"td"},"NumberInput")," value.")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"e + -")," are blocked. For all integral numeric types, dot ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is blocked."),(0,l.kt)("img",{src:"https://i.imgur.com/XXD0xF4.png",alt:"Blazor Bootstrap: Number Input Component - Basic usage"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="int" @bind-Value="@amount" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private int amount;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#basic-usage"},"See demo here")),(0,l.kt)("h3",{id:"generic-type"},"Generic type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput")," is a generic component. Always specify the exact type. In the below example ",(0,l.kt)("b",null,"TValue")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"int?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"double?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"decimal"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"decimal?"),"."),(0,l.kt)("img",{src:"https://i.imgur.com/iUNBkki.png",alt:"Blazor Bootstrap: Number Input Component - Generic type"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,8,13,18,23,28,33,38} showLineNumbers","{3,8,13,18,23,28,33,38}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Enter int number</label>\n    <NumberInput TValue="int" @bind-Value="@amount" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter int? number</label>\n    <NumberInput TValue="int?" @bind-Value="@amount2" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter float number</label>\n    <NumberInput TValue="float" @bind-Value="@amount3" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter float? number</label>\n    <NumberInput TValue="float?" @bind-Value="@amount4" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter double number</label>\n    <NumberInput TValue="double" @bind-Value="@amount5" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter double? number</label>\n    <NumberInput TValue="double?" @bind-Value="@amount6" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter decimal number</label>\n    <NumberInput TValue="decimal" @bind-Value="@amount7" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter decimal? number</label>\n    <NumberInput TValue="decimal?" @bind-Value="@amount8" />\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int amount;\n    private int? amount2;\n    private float amount3;\n    private float? amount4;\n    private double amount5;\n    private double? amount6;\n    private decimal amount7;\n    private decimal? amount8;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#generic-type"},"See demo here")),(0,l.kt)("h3",{id:"enable-min-and-max"},"Enable min and max"),(0,l.kt)("p",null,"Set ",(0,l.kt)("inlineCode",{parentName:"p"},'EnableMinMax="true"')," and set the ",(0,l.kt)("inlineCode",{parentName:"p"},"Min")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Max")," parameters to restrict the user input between the Min and Max range."),(0,l.kt)("img",{src:"https://i.imgur.com/v4SWtWs.png",alt:"Blazor Bootstrap: Number Input Component - Enable min and max"}),(0,l.kt)("admonition",{title:"NOTE",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If the user tries to enter a number in the ",(0,l.kt)("b",null,"NumberInput")," field which is out of range, then it will override with Min or Max value based on the context.\nIf the user input is less than the Min value, then it will override with the Min value.\nIf the user input exceeds the Max value, it will override with the Max value.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="decimal?" @bind-Value="@amount" EnableMinMax="true" Min="10" Max="500" Placeholder="Enter amount" />\n    <span class="form-text">Tip: The amount must be between 10 and 500.</span>\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private decimal? amount;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#enable-min-and-max"},"See demo here")),(0,l.kt)("h3",{id:"step"},"Step"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Step")," sets the stepping interval when clicking the up and down spinner buttons. If not explicitly included, ",(0,l.kt)("inlineCode",{parentName:"p"},"Step")," defaults to ",(0,l.kt)("b",null,"1"),"."),(0,l.kt)("img",{src:"https://i.imgur.com/Lq10NP1.png",alt:"Blazor Bootstrap: Number Input Component - Step"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,10} showLineNumbers","{3,10}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="int?" @bind-Value="@amount" Step="10" Placeholder="Enter amount" />\n    <span class="form-text">Info: Here <code>Step</code> parameter is set to <b>10</b>.</span>\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n\n<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="decimal?" @bind-Value="@amount2" Step="2.5" Placeholder="Enter amount" />\n    <span class="form-text">Info: Here <code>Step</code> parameter is set to <b>2.5</b>.</span>\n</div>\n<div class="mb-3">Entered Amount: @amount2</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int? amount;\n    private decimal? amount2;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#step"},"See demo here")),(0,l.kt)("h3",{id:"text-alignment"},"Text alignment"),(0,l.kt)("p",null,"You can change the text alignment according to your need. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"TextAlignment")," parameter to set the alignment. In the below example, alignment is set to center and end."),(0,l.kt)("img",{src:"https://i.imgur.com/hbHHfKr.png",alt:"Blazor Bootstrap: Number Input Component - Text alignment"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,9} showLineNumbers","{3,9}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="int" @bind-Value="@amount" TextAlignment="Alignment.Center" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n\n<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="decimal" @bind-Value="@amount2" TextAlignment="Alignment.End" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount2</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int amount;\n    private decimal amount2 = 2.34M;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#text-alignment"},"See demo here")),(0,l.kt)("h3",{id:"allow-negative-numbers"},"Allow negative numbers"),(0,l.kt)("p",null,"By default, negative numbers are not allowed. Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"AllowNegativeNumbers")," parameter to true to allow the negative numbers."),(0,l.kt)("img",{src:"https://i.imgur.com/jmtUxzB.png",alt:"Blazor Bootstrap: Number Input Component - Allow negative numbers"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput TValue="int" @bind-Value="@amount" AllowNegativeNumbers="true" Placeholder="Enter amount" />\n    <span class="form-text">Tip: Negative numbers are also allowed.</span>\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int amount;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#allow-negative-numbers"},"See demo here")),(0,l.kt)("h3",{id:"disable"},"Disable"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Disable")," parameter to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput"),". Also, use ",(0,l.kt)("b",null,"Enable()")," and ",(0,l.kt)("b",null,"Disable()")," methods to enable and disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput"),"."),(0,l.kt)("img",{src:"https://i.imgur.com/ezc3VBH.png",alt:"Blazor Bootstrap: Number Input Component - Disable"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <NumberInput @ref="numberInput" TValue="int?" @bind-Value="@amount" Disabled="true" Placeholder="Enter amount" />\n</div>\n\n<Button Color="ButtonColor.Primary" @onclick="enableNumberInput"> Enable </Button>\n<Button Color="ButtonColor.Secondary" @onclick="disableNumberInput"> Disable </Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,5,7} showLineNumbers","{2,5,7}":!0,showLineNumbers:!0},"@code {\n    private NumberInput<int?> numberInput;\n    private int? amount;\n\n    private void enableNumberInput() => numberInput.Enable();\n\n    private void disableNumberInput() => numberInput.Disable();\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#disable"},"See demo here")),(0,l.kt)("h3",{id:"validations"},"Validations"),(0,l.kt)("p",null,"Like any other blazor input components, ",(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput")," supports validations. Add the DataAnnotations on the ",(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput")," component to validate the user input before submitting the form. In the below example, we used ",(0,l.kt)("b",null,"Required")," and ",(0,l.kt)("b",null,"Range")," attributes."),(0,l.kt)("img",{src:"https://i.imgur.com/K7bepKc.png",alt:"Blazor Bootstrap: Number Input Component - Validations"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{17,18,23,24,31,32,39,40} showLineNumbers","{17,18,23,24,31,32,39,40}":!0,showLineNumbers:!0},'@using System.ComponentModel.DataAnnotations\n\n<style>\n    .valid.modified:not([type=checkbox]) {\n        outline: 1px solid #26b050;\n    }\n\n    .invalid {\n        outline: 1px solid red;\n    }\n\n    .validation-message {\n        color: red;\n    }\n</style>\n\n<EditForm EditContext="@editContext" OnValidSubmit="HandleOnValidSubmit">\n    <DataAnnotationsValidator />\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Item Price: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <NumberInput TValue="decimal?" Value="invoice.Price" ValueExpression="() => invoice.Price" ValueChanged="(value) => PriceChanged(value)" Placeholder="Enter price" />\n            <ValidationMessage For="@(() => invoice.Price)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Item Discount:</label>\n        <div class="col-md-10">\n            <NumberInput TValue="decimal?" Value="invoice.Discount" ValueExpression="() => invoice.Discount" ValueChanged="(value) => DiscountChanged(value)" Placeholder="Enter discount" />\n            <ValidationMessage For="@(() => invoice.Discount)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Total Amount: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <NumberInput TValue="decimal?" @bind-Value="invoice.Total" Disabled="true" Placeholder="Enter total" />\n            <ValidationMessage For="@(() => invoice.Total)" />\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12 text-right">\n            <Button Type="ButtonType.Button" Color="ButtonColor.Secondary" Class="float-end" @onclick="ResetForm">Reset</Button>\n            <Button Type="ButtonType.Submit" Color="ButtonColor.Success" Class="float-end me-2">Submit</Button>\n        </div>\n    </div>\n</EditForm>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2-3,7-8,36,46,49-61} showLineNumbers","{2-3,7-8,36,46,49-61}":!0,showLineNumbers:!0},'@code {\n    private Invoice invoice = new();\n    private EditContext editContext;\n\n    protected override void OnInitialized()\n    {\n        editContext = new EditContext(invoice);\n        base.OnInitialized();\n    }\n\n    protected override void OnParametersSet()\n    {\n        CalculateToatl();\n        base.OnParametersSet();\n    }\n\n    private void PriceChanged(decimal? value)\n    {\n        invoice.Price = value;\n        CalculateToatl();\n    }\n\n    private void DiscountChanged(decimal? value)\n    {\n        invoice.Discount = value;\n        CalculateToatl();\n    }\n\n    private void CalculateToatl()\n    {\n        var price = invoice.Price.HasValue ? invoice.Price.Value : 0;\n        var discount = invoice.Discount.HasValue ? invoice.Discount.Value : 0;\n        invoice.Total = price - discount;\n    }\n\n    public void HandleOnValidSubmit()\n    {\n        Console.WriteLine($"Price: {invoice.Price}");\n        Console.WriteLine($"Discount: {invoice.Discount}");\n        Console.WriteLine($"Total: {invoice.Total}");\n    }\n\n    private void ResetForm()\n    {\n        invoice = new();\n        editContext = new EditContext(invoice);\n    }\n\n    public class Invoice\n    {\n        [Required(ErrorMessage = "Price required.")]\n        [Range(60, 500, ErrorMessage = "Price should be between 60 and 500.")]\n        public decimal? Price { get; set; } = 232M;\n\n        [Range(0, 50, ErrorMessage = "Discount should be between 0 and 50.")]\n        public decimal? Discount { get; set; }\n\n        [Required(ErrorMessage = "Amount required.")]\n        [Range(10, 500, ErrorMessage = "Total should be between 60 and 500.")]\n        public decimal? Total { get; set; }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#validations"},"See demo here")),(0,l.kt)("h3",{id:"events-valuechanged"},"Events: ValueChanged"),(0,l.kt)("p",null,"This event fires on every user keystroke that changes the ",(0,l.kt)("inlineCode",{parentName:"p"},"NumberInput")," value."),(0,l.kt)("img",{src:"https://i.imgur.com/1DGW8dG.png",alt:"Blazor Bootstrap: Number Input Component - Events: ValueChanged"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{4} showLineNumbers","{4}":!0,showLineNumbers:!0},'<div class="row mb-3">\n    <label class="col-md-2 col-form-label">Item Price: <span class="text-danger">*</span></label>\n    <div class="col-md-10">\n        <NumberInput TValue="decimal?" Value="price" ValueExpression="() => price" ValueChanged="(value) => PriceChanged(value)" Placeholder="Enter price" />\n    </div>\n</div>\n<div>\n    @displayPrice\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5-9} showLineNumbers","{5-9}":!0,showLineNumbers:!0},'@code {\n    private decimal? price = 10M;\n    private string displayPrice;\n\n    private void PriceChanged(decimal? value)\n    {\n        price = value; // this is mandatory\n        displayPrice = $"Price: {value}, changed at {DateTime.Now.ToLocalTime()}.";\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/form/number-input#event-value-changed"},"See demo here")))}p.isMDXComponent=!0}}]);