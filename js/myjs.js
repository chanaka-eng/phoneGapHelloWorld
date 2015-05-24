var MyJs = (function(module){
	module.prependWords = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');		
	};
	
	return module;
}(MyJs || {}));