"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[4033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=r,g=p["".concat(i,".").concat(c)]||p[c]||d[c]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={title:"Blazor AutoComplete Component",description:"Blazor Bootstrap autocomplete component is a textbox that offers the users suggestions as they type from the data source. And it supports client-side and server-side filtering.",image:"https://i.imgur.com/gRcdvc0.png",sidebar_label:"Auto Complete",sidebar_position:1},l="Blazor Auto Complete",s={unversionedId:"forms/autocomplete",id:"forms/autocomplete",title:"Blazor AutoComplete Component",description:"Blazor Bootstrap autocomplete component is a textbox that offers the users suggestions as they type from the data source. And it supports client-side and server-side filtering.",source:"@site/docs/forms/autocomplete.md",sourceDirName:"forms",slug:"/forms/autocomplete",permalink:"/docs/forms/autocomplete",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/forms/autocomplete.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Blazor AutoComplete Component",description:"Blazor Bootstrap autocomplete component is a textbox that offers the users suggestions as they type from the data source. And it supports client-side and server-side filtering.",image:"https://i.imgur.com/gRcdvc0.png",sidebar_label:"Auto Complete",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Icons",permalink:"/docs/content/icons"},next:{title:"Currency Input",permalink:"/docs/forms/currency-input"}},i={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Callback Events",id:"callback-events",level:2},{value:"Examples",id:"examples",level:2},{value:"Client side data",id:"client-side-data",level:3},{value:"Client side data with StringComparision",id:"client-side-data-with-stringcomparision",level:3},{value:"Server side data",id:"server-side-data",level:3},{value:"Validations",id:"validations",level:3}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-auto-complete"},"Blazor Auto Complete"),(0,r.kt)("p",null,"Blazor Bootstrap autocomplete component is a textbox that offers the users suggestions as they type from the data source. And it supports client-side and server-side filtering."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Descritpion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"delegate"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProvider is for items to render. The provider should always return an instance of ",(0,r.kt)("inlineCode",{parentName:"td"},"AutoCompleteDataProviderResult"),", and null is not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Is AutoComplete disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AutoComplete placeholder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PropertyName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoComplete data text property name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AutoCompleteSize.Default")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"AutoCompleteSize.Default")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"AutoCompleteSize.Large")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"AutoCompleteSize.Small"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StringComparison"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.OrdinalIgnoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the culture, case, and sort rules to be used. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.CurrentCulture")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.CurrentCultureIgnoreCase")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.InvariantCulture")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.InvariantCultureIgnoreCase")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.Ordinal")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringComparison.OrdinalIgnoreCase"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StringFilterOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StringFilterOperator.Contains")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"StringFilterOperator.Equals")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringFilterOperator.Contains")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringFilterOperator.StartsWith")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"StringFilterOperator.EndsWith"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoComplete value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ValueExpression"),(0,r.kt)("td",{parentName:"tr",align:null},"expression"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AutoComplete value expression.")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"Arguments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disable()"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable()"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RefreshDataAsync()"),(0,r.kt)("td",{parentName:"tr",align:null},"Task"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResetAsync()"),(0,r.kt)("td",{parentName:"tr",align:null},"Task"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h2",{id:"callback-events"},"Callback Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"This event fires immediately when the autocomplete selection changes by the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ValueChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"This event fires on every user keystroke that changes the textbox value.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"client-side-data"},"Client side data"),(0,r.kt)("img",{src:"https://i.imgur.com/gRcdvc0.png",alt:"Blazor Bootstrap AutoComplete Component - Client side data"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3-8} showLineNumbers","{3-8}":!0,showLineNumbers:!0},'<div class="row">\n    <div class="col-md-5 col-sm-12">\n        <AutoComplete @bind-Value="customerName"\n                      TItem="Customer"\n                      DataProvider="CustomersDataProvider"\n                      PropertyName="CustomerName"\n                      Placeholder="Search a customer..."\n                      OnChanged="(Customer customer) => OnAutoCompleteChanged(customer)" />\n    </div>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{34,36,39,41} showLineNumbers","{34,36,39,41}":!0,showLineNumbers:!0},'@code {\n    private string customerName;\n\n    public IEnumerable<Customer> customers;\n\n    protected override void OnInitialized()\n    {\n        customers = new List<Customer> {\n            new(1, "Pich S"),\n            new(2, "sfh Sobi"),\n            new(3, "Jojo chan"),\n            new(4, "Jee ja"),\n            new(5, "Rose Canon"),\n            new(6, "Manju A"),\n            new(7, "Bandita PA"),\n            new(8, "Sagar Adil"),\n            new(9, "Isha Wang"),\n            new(10, "Daina JJ"),\n            new(11, "Komala Mug"),\n            new(12, "Dikshita BD"),\n            new(13, "Neha Gosar"),\n            new(14, "Preeti S"),\n            new(15, "Sagar Seth"),\n            new(16, "Vinayak MM"),\n            new(17, "Vijaya Lakhsmi"),\n            new(18, "Jahan K"),\n            new(19, "Joy B"),\n            new(20, "Zaraiah C"),\n            new(21, "Laura L"),\n            new(22, "Punith ES")\n        };\n    }\n\n    private async Task<AutoCompleteDataProviderResult<Customer>> CustomersDataProvider(AutoCompleteDataProviderRequest<Customer> request)\n    {\n        return await Task.FromResult(request.ApplyTo(customers.OrderBy(customer => customer.CustomerName)));\n    }\n\n    private void OnAutoCompleteChanged(Customer customer)\n    {\n        // TODO: handle your own logic\n\n        // NOTE: do null check\n        Console.WriteLine($"\'{customer?.CustomerName}\' selected.");\n        Console.WriteLine($"Data null: {customer is null}.");\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"public record Customer(int CustomerId, string CustomerName);\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/grid#client-side-data"},"See demo here")),(0,r.kt)("h3",{id:"client-side-data-with-stringcomparision"},"Client side data with StringComparision"),(0,r.kt)("p",null,"In the below example, ",(0,r.kt)("inlineCode",{parentName:"p"},"StringComparision.Ordinal")," is used to make the filter case-sensitive."),(0,r.kt)("img",{src:"https://i.imgur.com/8YZzW9f.png",alt:"Blazor Bootstrap AutoComplete Component - Client side data with StringComparision"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{8} showLineNumbers","{8}":!0,showLineNumbers:!0},'<div class="row">\n    <div class="col-md-5 col-sm-12">\n        <AutoComplete @bind-Value="customerName"\n                      TItem="Customer"\n                      DataProvider="CustomersDataProvider"\n                      PropertyName="CustomerName"\n                      Placeholder="Search a customer..."\n                      StringComparison="StringComparison.Ordinal"\n                      OnChanged="(Customer customer) => OnAutoCompleteChanged(customer)" />\n    </div>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{34,36,39,41} showLineNumbers","{34,36,39,41}":!0,showLineNumbers:!0},'@code {\n    private string customerName;\n\n    public IEnumerable<Customer> customers;\n\n    protected override void OnInitialized()\n    {\n        customers = new List<Customer> {\n            new(1, "Pich S"),\n            new(2, "sfh Sobi"),\n            new(3, "Jojo chan"),\n            new(4, "Jee ja"),\n            new(5, "Rose Canon"),\n            new(6, "Manju A"),\n            new(7, "Bandita PA"),\n            new(8, "Sagar Adil"),\n            new(9, "Isha Wang"),\n            new(10, "Daina JJ"),\n            new(11, "Komala Mug"),\n            new(12, "Dikshita BD"),\n            new(13, "Neha Gosar"),\n            new(14, "Preeti S"),\n            new(15, "Sagar Seth"),\n            new(16, "Vinayak MM"),\n            new(17, "Vijaya Lakhsmi"),\n            new(18, "Jahan K"),\n            new(19, "Joy B"),\n            new(20, "Zaraiah C"),\n            new(21, "Laura L"),\n            new(22, "Punith ES")\n        };\n    }\n\n    private async Task<AutoCompleteDataProviderResult<Customer>> CustomersDataProvider(AutoCompleteDataProviderRequest<Customer> request)\n    {\n        return await Task.FromResult(request.ApplyTo(customers.OrderBy(customer => customer.CustomerName)));\n    }\n\n    private void OnAutoCompleteChanged(Customer customer)\n    {\n        // TODO: handle your own logic\n\n        // NOTE: do null check\n        Console.WriteLine($"\'{customer?.CustomerName}\' selected.");\n        Console.WriteLine($"Data null: {customer is null}.");\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"public record Customer(int CustomerId, string CustomerName);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"StringComparison.OrdinalIgnoreCase")," is used to compare culture-agnostic and case-insensitive string matching.")),(0,r.kt)("h3",{id:"server-side-data"},"Server side data"),(0,r.kt)("img",{src:"https://i.imgur.com/D5ox9um.png",alt:"Blazor Bootstrap AutoComplete Component - Server side data"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3-8} showLineNumbers","{3-8}":!0,showLineNumbers:!0},'<div class="row">\n    <div class="col-md-5 col-sm-12">\n        <AutoComplete @bind-Value="customerName"\n                      TItem="Customer"\n                      DataProvider="CustomersDataProvider"\n                      PropertyName="CustomerName"\n                      Placeholder="Search a customer..."\n                      OnChanged="(Customer customer) => OnAutoCompleteChanged(customer)" />\n    </div>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{6,8-9,12,14} showLineNumbers","{6,8-9,12,14}":!0,showLineNumbers:!0},'@code {\n    private string customerName;\n\n    [Inject] ICustomerService _customerService { get; set; }\n\n    private async Task<AutoCompleteDataProviderResult<Customer>> CustomersDataProvider(AutoCompleteDataProviderRequest<Customer> request)\n    {\n        var customers = await _customerService.GetCustomers(request.Filter); // API call\n        return await Task.FromResult(new AutoCompleteDataProviderResult<Customer> { Data = customers, TotalCount = customers.Count() });\n    }\n\n    private void OnAutoCompleteChanged(Customer customer)\n    {\n        // TODO: handle your own logic\n\n        // NOTE: do null check\n        Console.WriteLine($"\'{customer?.CustomerName}\' selected.");\n        Console.WriteLine($"Data null: {customer is null}.");\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/grid#server-side-data"},"See demo here")),(0,r.kt)("h3",{id:"validations"},"Validations"),(0,r.kt)("img",{src:"https://i.imgur.com/sMQ7Uc6.png",alt:"Blazor Bootstrap AutoComplete Component - Validations - Data empty"}),(0,r.kt)("img",{src:"https://i.imgur.com/4IzNcdp.png",alt:"Blazor Bootstrap AutoComplete Component - Validations - Item selected"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@using System.ComponentModel.DataAnnotations\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<style>\n    .valid.modified:not([type=checkbox]) {\n        outline: 1px solid #26b050;\n    }\n\n    .invalid {\n        outline: 1px solid red;\n    }\n\n    .validation-message {\n        color: red;\n    }\n</style>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{7-13} showLineNumbers","{7-13}":!0,showLineNumbers:!0},'<EditForm EditContext="@_editContext" OnValidSubmit="HandleOnValidSubmit">\n    <DataAnnotationsValidator />\n\n    <div class="form-group row mb-2">\n        <label for="supplier" class="col-md-2 col-form-label">Customer:</label>\n        <div class="col-md-10">\n            <AutoComplete @bind-Value="customerAddress.CustomerName"\n                          TItem="Customer"\n                          DataProvider="CustomersDataProvider"\n                          PropertyName="CustomerName"\n                          Placeholder="Search a customer..."\n                          OnChanged="(Customer customer) => OnAutoCompleteChanged(customer)" />\n            <ValidationMessage For="@(() => customerAddress.CustomerName)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label for="name" class="col-md-2 col-form-label">Address:</label>\n        <div class="col-md-10">\n            <InputText id="name" class="form-control" @bind-Value="customerAddress.Address" />\n            <ValidationMessage For="@(() => customerAddress.Address)" />\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12 text-right">\n            <button type="submit" class="btn btn-success float-right">Submit</button>\n        </div>\n    </div>\n</EditForm>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{18,20-21,24,26} showLineNumbers","{18,20-21,24,26}":!0,showLineNumbers:!0},'@code {\n    private CustomerAddress customerAddress = new();\n    private EditContext _editContext;\n\n    [Inject] ICustomerService _customerService { get; set; }\n\n    protected override void OnInitialized()\n    {\n        _editContext = new EditContext(customerAddress);\n        base.OnInitialized();\n    }\n\n    public void HandleOnValidSubmit()\n    {\n        Console.WriteLine($"Customer name is {customerAddress.CustomerName} and address is {customerAddress.Address}");\n    }\n\n    private async Task<AutoCompleteDataProviderResult<Customer>> CustomersDataProvider(AutoCompleteDataProviderRequest<Customer> request)\n    {\n        var customers = await _customerService.GetCustomers(request.Filter); // API call\n        return await Task.FromResult(new AutoCompleteDataProviderResult<Customer> { Data = customers, TotalCount = customers.Count() });\n    }\n\n    private void OnAutoCompleteChanged(Customer customer)\n    {\n        // TODO: handle your own logic\n\n        // NOTE: do null check\n        Console.WriteLine($"\'{customer?.CustomerName}\' selected.");\n        Console.WriteLine($"Data null: {customer is null}.");\n    }\n\n    public class CustomerAddress\n    {\n        [Required]\n        public string CustomerName { get; set; }\n\n        [Required]\n        public string Address { get; set; }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/grid#validations"},"See demo here")))}d.isMDXComponent=!0}}]);