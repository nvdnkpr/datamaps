d3.xhr=function(e,t,n){var r=new XMLHttpRequest;arguments.length<3?(n=t,t=null):t&&r.overrideMimeType&&r.overrideMimeType(t),r.open("GET",e,!0),t&&r.setRequestHeader("Accept",t),r.onreadystatechange=function(){if(r.readyState===4){var e=r.status;n(!e&&r.response||e>=200&&e<300||e===304?r:null)}},r.send(null)}