	// get and use specific querystring values if provided // 
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const manual_N = urlParams.get('n') && /\d/.test(urlParams.get('n'))? parseInt(urlParams.get('n')) : null // no overide value if not specifically set
const minVal = urlParams.get('min') && /\d/.test(urlParams.get('min'))? parseInt(urlParams.get('min')) : 3
const maxVal = urlParams.get('max') && /\d/.test(urlParams.get('max'))? parseInt(urlParams.get('max')) : 15
const questionQty = urlParams.get('qty') && /\d/.test(urlParams.get('qty'))? parseInt(urlParams.get('qty')) : null	// The Number of questions; defaults to 10 rows x 4 cols if not set

	// constants and variables //
const _colCount = 4 // this is based on the physical print space
const _rowCount = questionQty? Math.ceil(questionQty/_colCount) : 10 // allow manual question quantity to auto adjust the number of rows based on the number of columns


	// raw data functions //
const flip = () => { 
	let r = Math.random() > 0.5? 1 : -1
	return r
}

const genRandomNumberArray = (length, max, min = 0) => { // min is zero if not set
	let numbers = Array.from({length}, ()=> {
		let r = (max+1)-min
		let n = Math.floor( Math.random() * r ) + min
		return n
	})
	return numbers
}

	//	element and text creation features //
const spawn = (length,tag,parent) => { // create html elements for output
	let arr = Array.from({length}, ()=> {
		let child = document.createElement(tag)
		parent.appendChild(child)
		return child
	}) 
	return arr
}


const equation = (n1 = null, n2 = null, type, manualVal = null) => {
	if( n1 == null || n2 == null ){ // in case we have an odd number of questions
		return ''
	}

	if(manual_N !== null ){  // manually overide one of the values for all questions
		if( flip() > 0){ // heads or tails to replace one of the values
			n1 = manual_N
		} else{
			n2 = manual_N
		}
	}

	let txt;
	switch(type){
		case "A":
			txt = `${n1} + ${n2}`
		break;

		case "D":
			txt = `${n1 * n2} ÷ ${n1}`
		break;

		case "M":
			txt = `${n1} x ${n2}`
		break;

		case "S":
			let max = Math.max(n1, n2)
			let min = Math.min(n1,n2)
			txt = `${max} - ${min}`
		break;

		default:
			console.error(`${type} is not a valid equation() "type"`)
	}

	return `${txt} = ______`
}


const init = ( opsArr, target) => {

	const rows = spawn( _rowCount,'tr', target) // create the table rows 
	const genLength = (questionQty?? _rowCount*_colCount) *2 
	const numArr = genRandomNumberArray( genLength, maxVal,minVal) // length * 2 so that we can have two random numbers per equation.


	const cells = rows.map(tr => { // populate with table cells // 4 columns seems like it spaces well for sheet of paper
	 	return spawn( _colCount, 'td', tr)
	})
	.flat()
	.forEach((el,ind) => {
		let x = numArr.pop()
		let y = numArr.pop()
		let opType = ops[ind%_colCount]?? ops[0] ?? "A"

		el.innerText = equation( x,y, opType )
		if(el.innerText != ""){
			el.classList.add('bordered')
		}
	})
}

// Init // 



