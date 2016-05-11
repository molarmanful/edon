h=require('http')
fs=require('fs')
vm=require('vm')
url=require('url')
path=require('path')
punycode=require('punycode')
crypto=require('crypto')
StringDecoder=require('string_decoder').StringDecoder
querystring=require('querystring')
ex=require('express')
ts=require('tosource')
app=ex()

_eval=x=>{
	try{
		return vm.runInNewContext(x,{
			Buffer:Buffer,
			clearImmediate:clearImmediate,
			clearInterval:clearInterval,
			clearTimeout:clearTimeout,
			setImmediate:setImmediate,
			setTimeout:setTimeout,
			setInterval:setInterval,
			crypto:crypto,
			punycode:punycode,
			querystring:querystring,
			StringDecoder:StringDecoder,
			url:url,
			vm:vm
		},{timeout:1000})
	}catch(e){return e.toString()}
}

app.use(ex.static(__dirname+'/public'))
app.get('/eval/:x',(x,y)=>{
	y.setHeader('Content-Type','application/json')
	y.json({r:ts(_eval(decodeURI(x.params.x)))})
})
app.listen(process.env.OPENSHIFT_NODEJS_PORT||8080,process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1')