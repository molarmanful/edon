e=ace.edit('editor')
e.getSession().setUseWorker(false)
e.setTheme("ace/theme/monokai")
e.getSession().setMode("ace/mode/javascript")
e.setOptions({
	fontFamily:'dvsm',
	fontSize:'13px'
})

$('#run').click(function(){
	$.get('/eval/'+$('#editor .ace_content').text(),function(x){
		showDialog({
			title:'Result',
			text:'<div id="res">'+x.r+'</div>'
		})
	})
	res=ace.edit('res')
	res.getSession().setUseWorker(false)
	res.setTheme("ace/theme/monokai")
	res.getSession().setMode("ace/mode/javascript")
	res.setOptions({
		fontFamily:'dvsm',
		fontSize:'13px'
	})
});