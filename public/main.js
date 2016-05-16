LZW={compress:function(r,o,f,n,e,s,t,u){for(o={},f=n=256;n--;)o[String.fromCharCode(n)]=n;for(e=s=[];t=r[++n];)e=o[u=e+t]?u:(s.push(o[e]),o[u]=f++,t);return s.push(o[e]),s},decompress:function(r,o,f,n,e,s,t,u){for(o=[],f=n=256,e=String.fromCharCode;n--;)o[n]=e(n);for(e=s=e(r[n=0]);(u=r[++n])<=f;)t=o[u]||e+e[0],o[f++]=e+t[0],s+=e=t;return s}};

ace.require("ace/ext/language_tools")
e=ace.edit('editor')
e.getSession().setUseWorker(false)
e.setTheme("ace/theme/monokai")
e.getSession().setMode("ace/mode/javascript")
e.setShowInvisibles(true)
e.setOptions({
	fontFamily:'dvsm',
	fontSize:'13px',
	enableBasicAutocompletion: true,
	enableSnippets:true,
	enableLiveAutocompletion:true
})

$('#run').click(function(){
	showLoading()
	$.get('/eval/'+btoa(escape(encodeURIComponent(String.fromCharCode(...LZW.compress(e.getValue())))))),function(x){
		hideLoading()
		showDialog({
			title:'Result',
			text:'<pre id="res" style="font-family:dvsm;overflow:auto">'+x.r+'</pre>',
			positive:{
				title:'Edit'
			}
		})
	})
})

$('#github').click(function(){
	rdr=window.open('https://github.com/molarmanful/edon','_blank');
	$.ajax({
		type:'POST',
		url:'/echo/json/',
		success:function(){rdr.location}
	})
})