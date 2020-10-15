module.exports = function toReadable (number) {			
		if (number === 0) return 'zero';		
		let result = String(number);		
		if (result.length === 1){
			result = '00'+ result;			
		}
		if (result.length === 2){
			result = '0'+ result;			
		}		
		result = result.split('');		
			
			if (result[0] === '0') {
				result[0] = '';
			}
			switch (result[0]) { // first block - hundred
				case '1':
					result[0] = 'one hundred ';					
				break;
				case '2':
					result[0] =  'two hundred ';
				break;
				case '3':
					result[0] =  'three hundred ';
				break;	
				case '4':
					result[0] = 'four hundred ';					
				break;
				case '5':
					result[0] =  'five hundred ';
				break;
				case '6':
					result[0] =  'six hundred ';
				break;
				case '7':
					result[0] = 'seven hundred ';					
				break;
				case '8':
					result[0] =  'eight hundred ';
				break;
				case '9':
					result[0] =  'nine hundred ';
				break;								
			}
			if (result[1] === '1') {			
				result[1] = '';
				switch (result[2]) { // block - 10, 11, 12 - 19
										
					case '0': 
						result[2] = 'ten';					
					break;
					case '1':
						result[2] = 'eleven';					
					break;
					case '2':
						result[2] =  'twelve';
					break;
					case '3':
						result[2] =  'thirteen';
					break;	
					case '4':
						result[2] = 'fourteen';					
					break;
					case '5':
						result[2] =  'fifteen';
					break;
					case '6':
						result[2] =  'sixteen';
					break;
					case '7':
						result[2] = 'seventeen';					
					break;
					case '8':
						result[2] =  'eighteen';
					break;
					case '9':
						result[2] =  'nineteen';
					break;								
				}
				return result.join('');
			}
			if (result[1] === '0') {
				result[1] = '';
			}
			
			switch (result[1]) { // second block for tens
				
				case '2':
					result[1] =  'twenty ';
				break;
				case '3':
					result[1] =  'thirty ';
				break;	
				case '4':
					result[1] = 'forty ';					
				break;
				case '5':
					result[1] =  'fifty ';
				break;
				case '6':
					result[1] =  'sixty ';
				break;
				case '7':
					result[1] = 'seventy ';					
				break;
				case '8':
					result[1] =  'eighty ';
				break;
				case '9':
					result[1] =  'ninety ';
				break;							
			}
			if (result[2] === '0'){
				result[2] = '';
			}
			
			switch (result[2]) { // block - one, two
				case '1':
					result[2] = 'one';					
				break;
				case '2':
					result[2] =  'two';
				break;
				case '3':
					result[2] =  'three';
				break;	
				case '4':
					result[2] = 'four';					
				break;
				case '5':
					result[2] =  'five';
				break;
				case '6':
					result[2] =  'six';
				break;
				case '7':
					result[2] = 'seven';					
				break;
				case '8':
					result[2] =  'eight';
				break;
				case '9':
					result[2] =  'nine';
				break;								
			}
			let k = result.join('');
			
			if (k[k.length - 1] === ' ') {
				
				k = k.slice(0, -1);
			}			
			return k;							
}
