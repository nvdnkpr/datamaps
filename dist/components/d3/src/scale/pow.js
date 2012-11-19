function d3_scale_pow(e,t){function i(t){return e(n(t))}var n=d3_scale_powPow(t),r=d3_scale_powPow(1/t);return i.invert=function(t){return r(e.invert(t))},i.domain=function(t){return arguments.length?(e.domain(t.map(n)),i):e.domain().map(r)},i.ticks=function(e){return d3_scale_linearTicks(i.domain(),e)},i.tickFormat=function(e){return d3_scale_linearTickFormat(i.domain(),e)},i.nice=function(){return i.domain(d3_scale_nice(i.domain(),d3_scale_linearNice))},i.exponent=function(e){if(!arguments.length)return t;var s=i.domain();return n=d3_scale_powPow(t=e),r=d3_scale_powPow(1/t),i.domain(s)},i.copy=function(){return d3_scale_pow(e.copy(),t)},d3_scale_linearRebind(i,e)}function d3_scale_powPow(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}d3.scale.pow=function(){return d3_scale_pow(d3.scale.linear(),1)}