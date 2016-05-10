# edon
Edon is a simple, mobile-friendly Node ES6 environment for the browser. It was made as a way for me to run ES6 code (esp. code with arrow functions) on my phone without having to use Babel or some other complicated method.

# Supported Node Natives
```javascript
{
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
}
```

# REST API
Just make a GET request to `https://edon-molarmanful.rhcloud.com/eval/[URI-encoded JS here]`. It returns a JSON file with the result.