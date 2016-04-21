class Zipper {
	constructor(arr, loop = false){
		this.array = arr
		this.currentIndex = 0
		this.loop = loop
	}

	get current(){
		return this.array[this.currentIndex]
	}

	next(){
		this.currentIndex += 1
		this.check()
		return this
	}

	prev(){
		this.currentIndex -= 1
		this.check()
		return this
	}

	check(){
		if(this.loop){
			if(this.currentIndex < 0) this.currentIndex = this.currentIndex = this.array.length-1
			if(this.currentIndex > this.array.length-1) this.currentIndex = 0
		}else{
			if(this.currentIndex < 0) this.currentIndex = 0
			if(this.currentIndex > this.array.length-1) this.currentIndex = this.array.length-1
		}
	}

	get map(){
		return this.array.map.bind(this.array)
	}

	get filter(){
		return this.array.filter.bind(this.array)
	}

}

window.Zipper = Zipper
export default Zipper