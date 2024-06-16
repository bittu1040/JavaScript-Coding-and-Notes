function add1(a){
	return function(b){
		return a+b;
	}
}

console.log(add1(2)(3));



function add(a){
	return function(b){
  	if(b !== undefined){
    	return add(a+b)
    }
  	return a;
  }
}

console.log(add(2)(3)(6)());