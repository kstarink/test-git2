montageDefine("6f105bf","core/converter/number-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter,i=e("core/converter/converter").Validator,r=e("core/converter/converter").isNumber,a=e("core/converter/converter").isDef,s=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,o=["P","T","B","M","K","","m","u","n"],u=t.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},l=t.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},h=t._numericValueToString=function(e,t,n,i,r){r=r||o;var s=e,u="",l=1;0>e&&(e=-e);for(var h=0;r.length>h;h++){var c=r[h];if(l=t[c],e>=l||1>=l&&e>.1*l){u=c;break}}u?i&&(u+=i):l=1;var d=Math.pow(10,a(n)?n:2);return Math.round(s/l*d)/d+u},c=function(e,t){var n=e.match(s);return n?n[1]*t[n[2]]:0/0};t.stringToNumericValue=function(e){return e.endsWith("B")?c(e,l):c(e,u)};var d=t.numericValueToString=function(e,t){return h(e,u,t)},m=t.NumberValidator=i.specialize({allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(e){var t;return e=e||"",e=e.replace(/,/g,""),t=r(e)?e:this.allowFloat===!0?parseFloat(e,10):parseInt(e,10),isNaN(t)?{message:"Invalid Number"}:t}}});t.NumberConverter=n.specialize({allowPartialConversion:{value:!1},validator:{value:new m},shorten:{value:null},decimals:{value:2},forceDecimals:{value:!1},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(e,t,n){t=t||",",n=n||".";for(var i=(""+e).split("."),r=i[0];this._reg.test(r);)r=r.replace(this._reg,"$1"+t+"$2");var a=i.length>1?i[1]:"";if(this.forceDecimals)for(;a.length<this.decimals;)a+="0";var s=a.length>0?n+a:"";return r+s}},convert:{value:function(e){if(this.shorten)return d(e,this.decimals);var t;if(this.round)t=""+Number(Math.round(e));else{var n=Math.pow(10,this.decimals||2),i=1;t=Number(Math.round(e/i*n)/n)}return this._makeReadable(t)}},revert:{value:function(e){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var t=this.validator.validate(e);if(r(t))return t;throw Error(t.message)}}})}});