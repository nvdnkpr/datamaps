function d3_arrayCopy(e){var t=-1,n=e.length,r=[];while(++t<n)r.push(e[t]);return r}function d3_arraySlice(e){return Array.prototype.slice.call(e)}var d3_array=d3_arraySlice;try{d3_array(document.documentElement.childNodes)[0].nodeType}catch(e){d3_array=d3_arrayCopy}var d3_arraySubclass=[].__proto__?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)e[n]=t[n]}