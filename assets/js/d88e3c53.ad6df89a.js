(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),c=(r(0),r(112)),a={},i={unversionedId:"developers/contracts/yWETH",id:"developers/contracts/yWETH",isDocsHomePage:!1,title:"yWETH",description:"Functions",source:"@site/docs/developers/contracts/yWETH.md",sourceDirName:"developers/contracts",slug:"/developers/contracts/yWETH",permalink:"/yearn-devdocs/docs/developers/contracts/yWETH",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/contracts/yWETH.md",version:"current",frontMatter:{},sidebar:"developers",previous:{title:"yToken",permalink:"/yearn-devdocs/docs/developers/contracts/yToken"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"depositETH",id:"depositeth",children:[]},{value:"withdrawETH",id:"withdraweth",children:[]},{value:"receive",id:"receive",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(c.b)("h3",{id:"depositeth"},"depositETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function depositETH(\n  ) public returns (uint256)\n")),Object(c.b)("h3",{id:"withdraweth"},"withdrawETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function withdrawETH(\n  ) external returns (uint256 withdrawn)\n")),Object(c.b)("h3",{id:"receive"},"receive"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function receive(\n  ) external\n")))}l.isMDXComponent=!0},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return r?o.a.createElement(f,i(i({ref:t},u),{},{components:r})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);