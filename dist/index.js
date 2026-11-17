"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=f(function(k,d){
var l=require('@stdlib/ndarray-base-shape/dist'),c=require('@stdlib/ndarray-base-strides/dist'),g=require('@stdlib/ndarray-base-stride/dist'),s=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),p=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),h=require('@stdlib/blas-base-gger/dist').ndarray;function o(e){var r,t,u,a,i,v;return i=e[0],v=e[1],a=e[2],r=p(e[3]),t=l(a,!1),u=c(a,!1),h(t[0],t[1],r,q(i),g(i,0),s(i),q(v),g(v,0),s(v),q(a),u[0],u[1],s(a)),a}d.exports=o
});var x=n();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
