montageDefine("99596c3","signal",{dependencies:["collections/map"],factory:function(e,t,n){function i(e){var t=new r;return t.getDefault=function(){return 0},{observe:function(n){return n(e),t.set(n,t.get(n)+1),function(){t.set(n,t.get(n)-1)}},emit:function(n){e=n,t.forEach(function(e,t){t(n)})}}}var r=e("collections/map");n.exports=i}});