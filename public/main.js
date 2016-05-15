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
	$.get('/eval/'+(e.getValue()||'undefined').split('').map(function(x){return ('0000'+x.charCodeAt().toString(16)).slice(-4)}).join``,function(x){
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