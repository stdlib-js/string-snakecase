// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,e)||f.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),p="get"in t,s="set"in t,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,e,t.get),s&&u&&u.call(r,e,t.set),r};var c=e;function l(r,e,t){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return"string"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var d=y()?function(r){var e,t,n,o,i;if(null==r)return v.call(r);t=r[b],i=b,e=null!=(o=r)&&g.call(o,i);try{r[b]=void 0}catch(e){return v.call(r)}return n=v.call(r),e?r[b]=t:delete r[b],n}:function(r){return v.call(r)},m=String.prototype.valueOf;var w=y();function _(r){return"object"==typeof r&&(r instanceof String||(w?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object String]"===d(r)))}function j(r){return p(r)||_(r)}l(j,"isPrimitive",p),l(j,"isObject",_);var h=/[-\/\\^$*+?.()|[\]{}]/g;var E=/./;function S(r){return"boolean"==typeof r}var T=Boolean.prototype.toString;var O=y();function x(r){return"object"==typeof r&&(r instanceof Boolean||(O?function(r){try{return T.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function A(r){return S(r)||x(r)}function V(){return new Function("return this;")()}l(A,"isPrimitive",S),l(A,"isObject",x);var P="object"==typeof self?self:null,$="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},R="object"==typeof B?B:null;var C=function(r){if(arguments.length){if(!S(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return V()}if(P)return P;if($)return $;if(R)return R;throw new Error("unexpected error. Unable to resolve global object.")}(),M=C.document&&C.document.childNodes,L=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;l(k,"REGEXP",F);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};function I(r){return null!==r&&"object"==typeof r}function N(r){var e,t,n,o;if(("Object"===(t=d(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=F.exec(n.toString()))return e[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(I,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!G(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(I));var U="function"==typeof E||"object"==typeof L||"function"==typeof M?function(r){return N(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?N(r).toLowerCase():e};var z=RegExp.prototype.exec;var X=y();function Z(r){return"object"==typeof r&&(r instanceof RegExp||(X?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===d(r)))}function q(r,e,t){if(!p(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(p(e))e=function(r){var e,t;if(!p(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(h,"\\$&"):(e=(e=r.substring(1,t)).replace(h,"\\$&"),r=r[0]+e+r.substring(t))}(e),e=new RegExp(e,"g");else if(!Z(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!p(t)&&"function"!==U(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)}var D=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var H=/\s+/g,J=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,K=/([a-z0-9])([A-Z])/g;function Q(r){if(!p(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("0ha3N",r));return r=q(r,J," "),r=function(r){if(!p(r))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+r+"`.");return q(r,D,"$1")}(r=q(r,K,"$1 $2")),function(r){if(!p(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()}(r=q(r,H,"_"))}export{Q as default};
//# sourceMappingURL=mod.js.map
