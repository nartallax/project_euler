(function(packageCode, modname, runEval, entryPoint, entryFunction, waitLoad, onPackageNotFound){
	var knownPackages = {
		require: function(name){
			return onPackageNotFound(name);
		}
	}

	var currentPackage = null;
	var define = function(reqs, fn){
		var pkgs = [];
		var result = null;
		for(var i = 0; i < reqs.length; i++){
			var r = modname.resolve(currentPackage, reqs[i]);
			if(r === "exports")
				pkgs.push(result = {});
			else if(!(r in knownPackages))
				pkgs.push(onPackageNotFound(r))
			else
				pkgs.push(knownPackages[r]);
		}
		fn.apply(null, pkgs);
		knownPackages[currentPackage] = result;
	}
	
	var run = function(){
		for(var i = 0; i < packageCode.length; i++){
			var pkgName = packageCode[i][0];
			var pkgCode = packageCode[i][1] + "\n//# sourceURL=" + pkgName;
			currentPackage = pkgName;
			runEval(pkgCode, define);
			currentPackage = null;
		}
		knownPackages[entryPoint][entryFunction]();
	}
	
	waitLoad = waitLoad || function(cb){ cb() };
	waitLoad(run);
})([["solutions/6","define([\"require\", \"exports\"], function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    const limit = 100;\n    function main() {\n        let mult = 0;\n        let result = 0;\n        for (let i = limit; i >= 1; i--) {\n            result += mult * i;\n            mult += i;\n        }\n        result *= 2;\n        console.log(result);\n    }\n    exports.main = main;\n});\n"]],{
"dirname":function(name){
	return name.replace(/\/?[^\/]+$/, "");
},
"join":function(){
	var result = [];
	for(var i = 0; i < arguments.length; i++){
		var x = arguments[i];
		(i === 0) || (x = x.replace(/^\//, ""));
		(i === arguments.length - 1) || (x = x.replace(/\/$/, ""));
		x && result.push(x);
	}
	return this.normalize(result.join("/"));
},
"normalize":function(name){
	var x = name, xx;
	while(true){
		xx = x.replace(/[^\/]+\/\.\.\//g, "");
		if(xx.length === x.length)
			break;
		x = xx;
	}
	while(true){
		xx = x.replace(/\.\//g, "");
		if(xx.length === x.length)
			break;
		x = xx;
	}
	return x;
},
"resolve":function(base, name){
	return name.charAt(0) !== "."? name: this.join(this.dirname(base), name)
}
},function(code, define){ return eval(code) },"solutions/6","main", null, function(r){
	return require(r);
})
