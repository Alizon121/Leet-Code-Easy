class RandomizedSet {
    constructor() {
        this.list = []
        this.map = new Map ()
    }

    insert(val) {
        if (this.map.has(val)) return false

        this.map.set(val, this.list.length) //How to set a (key, value) pair
        this.list.push(val)
        return true
    }

    remove(val) {
        if (!this.map.has(val)) return false
        const idx = this.map.get(val) // returns a specified idx from the array
        this._swap(idx, this.list.length - 1) // invoke swap helper method (always swap with the last element)
        this.list.pop(); // remove the last element
        this.map.set(this.list[idx], idx) // create key-value pair
        console.log("POPOPOPOPO", this.map.get(val))
        this.map.delete(val)
        return true
    }

    getRandom() {
        return this.list[Math.floor(Math.random() * this.list.length)]
    }

    _swap(a,b) {
        const tmp = this.list[a]
        this.list[a] = this.list[b];
        this.list[b] = tmp
    }
}