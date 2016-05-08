e=ace.edit('editor')
e.getSession().setUseWorker(false)
e.setTheme("ace/theme/monokai")
e.getSession().setMode("ace/mode/javascript")
e.setOptions({
	fontFamily:'dvsm',
	fontSize:'13px'
})

$('#run').click(function(){
	showLoading()
	$.get(encodeURI('/eval/'+(e.getValue()||'undefined')),function(x){
		hideLoading()
		showDialog({
			title:'Result',
			text:'<pre id="res" style="font-family:dvsm">'+x.r+'</pre>',
			positive:{
				title:'Edit'
			},
		})
	})
});