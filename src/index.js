

module.exports = function check(str, bracketsConfig) {

	const stack = [];
	let arr = str.split('');
	let temp = 0;

	for(let i  = 0; i < arr.length; i++){
		if (arr[i - 1] === '|' && arr[i] === '|') {
			temp = stack.pop();
			return true;
		}
		if ( arr[i] === '(' || arr[i] === '{' 
			|| arr[i] === '['  || arr[i] === '|'){
			stack.push(arr[i]);
		continue;
	}

	if ( arr[i] === ')' || arr[i] === '}'
		|| arr[i] === ']'  || arr[i] === '|'){
		temp = stack.pop();

	if( (temp === '(' && arr[i] === ')') ||
		(temp === '[' && arr[i] === ']') ||
		(temp === '{' && arr[i] === '}') || 
		(temp === '|' && arr[i] === '|') 
		) continue;  	
		else return false;  
	}	
	}

	if( stack.length > 0 ) return false;

	return true;
}
