function defineEach(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}require("../shim");var List=require("../list"),WeakMap=require("weak-map"),PropertyChanges=require("./property-changes"),RangeChanges=require("./range-changes"),MapChanges=require("./map-changes"),array_splice=Array.prototype.splice,array_slice=Array.prototype.slice,array_reverse=Array.prototype.reverse,array_sort=Array.prototype.sort,array_swap=Array.prototype.swap,EMPTY_ARRAY=[],protoIsSupported={}.__proto__===Object.prototype,array_makeObservable;array_makeObservable=protoIsSupported?function(){this.__proto__=ChangeDispatchArray}:function(){Object.defineProperties(this,observableArrayProperties)},Object.defineProperty(Array.prototype,"makeObservable",{value:array_makeObservable,writable:!0,configurable:!0,enumerable:!1}),defineEach(PropertyChanges.prototype),defineEach(RangeChanges.prototype),defineEach(MapChanges.prototype);var observableArrayProperties={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){var e=this.constructClone(this);return e.reverse(),this.swap(0,this.length,e),this},writable:!0,configurable:!0},sort:{value:function(){this.dispatchBeforeRangeChange(this,this,0);for(var e=0;this.length>e;e++)PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);array_sort.apply(this,arguments);for(var e=0;this.length>e;e++)PropertyChanges.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},swap:{value:function(e,t,n){n?Array.isArray(n)||(n=array_slice.call(n)):n=EMPTY_ARRAY,0>e&&(e=this.length+e);var i;if(0===t){if(0===n.length)return[];i=EMPTY_ARRAY}else i=array_slice.call(this,e,e+t);var r=n.length-i.length,a=this.length,s=Math.max(this.length+r,e+n.length),o=Math.max(a,s);if(r&&PropertyChanges.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(n,i,e),0===r)for(var l=e;e+n.length>l;l++)PropertyChanges.dispatchBeforeOwnPropertyChange(this,l,this[l]),this.dispatchBeforeMapChange(l,this[l]);else if(PropertyChanges.hasOwnPropertyChangeDescriptor(this))for(var l=e;o>l;l++)PropertyChanges.dispatchBeforeOwnPropertyChange(this,l,this[l]),this.dispatchBeforeMapChange(l,this[l]);e>a&&(this.length=e);var c=array_swap.call(this,e,t,n);if(0===r)for(var l=e;e+n.length>l;l++)PropertyChanges.dispatchOwnPropertyChange(this,l,this[l]),this.dispatchMapChange(l,this[l]);else if(PropertyChanges.hasOwnPropertyChangeDescriptor(this))for(var l=e;o>l;l++)PropertyChanges.dispatchOwnPropertyChange(this,l,this[l]),this.dispatchMapChange(l,this[l]);return this.dispatchRangeChange(n,i,e),r&&PropertyChanges.dispatchOwnPropertyChange(this,"length",this.length),c},writable:!0,configurable:!0},splice:{value:function(e,t){return e>this.length&&(e=this.length),this.swap.call(this,e,t,array_slice.call(arguments,2))},writable:!0,configurable:!0},set:{value:function(e,t){return this.splice(e,1,t),this},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(e){if(1===arguments.length)return this.splice(this.length,0,e);var t=array_slice.call(arguments);return this.swap(this.length,0,t)},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=array_slice.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},ChangeDispatchArray=Object.create(Array.prototype,observableArrayProperties);