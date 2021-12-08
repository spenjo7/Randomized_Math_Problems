	const flip = () => { 
		let r = Math.random() > 0.5? 1 : -1
		return r
	}

	const spawn = (length,tag,parent) => {
		let arr = Array.from({length}, ()=> {
			let child = document.createElement(tag)
			parent.appendChild(child)
			return child
		}) 
		return arr
	}


	const equation = (n1,n2, type) => {
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

	const rows = spawn(10,'tr', tbl)

	rows.forEach(tr => {
	 	spawn(4, 'td', tr)
	})

	const cells = [...document.querySelectorAll('td')]


	let genRandomNumberArray = (length, max, min) => {
		let numbers = Array.from({length}, ()=> {
			let r = max-min
			let n = Math.floor( Math.random() * r ) + min
			return n
		})
		return numbers
	}

	let numArr = genRandomNumberArray(cells.length * 2,15,3)