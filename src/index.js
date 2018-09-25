

module.exports = function check(str, bracketsConfig) {
// your solution

	var stack = [];
	var arr = str.split('');
	var temp;

	for(var i  = 0; i < arr.length; i++){

		if ( arr[i] === '(' || arr[i] === '{' 
		   || arr[i] === '['  || arr[i] === '|'){
			stack.push(arr[i]);
			continue;
		}
		if ( arr[i] == ')' || arr[i] == '}'
		    || arr[i] == ']'  || arr[i] == '|'){
			temp = stack.pop();

			if( (temp == '(' && arr[i] == ')') ||
				(temp == '[' && arr[i] == ']') ||
				(temp == '{' && arr[i] == '}') || 
				(temp == '|' && arr[i] == '|') 
				) continue;  	
			else return false;  
        }	
    }

    if( stack.length > 0 ) return false;

    return true;
}
