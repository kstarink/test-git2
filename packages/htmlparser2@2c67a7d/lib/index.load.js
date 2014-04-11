montageDefine("2c67a7d","lib/index",{dependencies:["./Parser.js","domhandler","./FeedHandler.js","./Tokenizer.js","domelementtype","./Stream.js","./WritableStream.js","./ProxyHandler.js","domutils","./CollectingHandler.js"],factory:function(e,t,n){function i(e,t){return delete n.exports[e],n.exports[e]=t,t}n.exports={get Parser(){return i("Parser",e("./Parser.js"))},get DomHandler(){return i("DomHandler",e("domhandler"))},get FeedHandler(){return i("FeedHandler",e("./FeedHandler.js"))},get Tokenizer(){return i("Tokenizer",e("./Tokenizer.js"))},get ElementType(){return i("ElementType",e("domelementtype"))},get Stream(){return i("Stream",e("./Stream.js"))},get WritableStream(){return i("WritableStream",e("./WritableStream.js"))},get ProxyHandler(){return i("ProxyHandler",e("./ProxyHandler.js"))},get DomUtils(){return i("DomUtils",e("domutils"))},get CollectingHandler(){return i("CollectingHandler",e("./CollectingHandler.js"))},get DefaultHandler(){return i("DefaultHandler",this.DomHandler)},get RssHandler(){return i("RssHandler",this.FeedHandler)},createDomStream:function(e,t,i){var r=new n.exports.DomHandler(e,t,i);return new n.exports.Parser(r,t)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}}}});