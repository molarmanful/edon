e=ace.edit('editor')
e.getSession().setUseWorker(false)
e.setTheme("ace/theme/monokai")
e.getSession().setMode("ace/mode/javascript")
e.setShowInvisibles(true)
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