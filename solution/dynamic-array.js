class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize); // Initialise array with the given size
    this.length = 0; // start with empty array
    this.capacity = defaultSize; // set the initial capacity
  }

  read(index) {
    if (index >= this.length) {
      return undefined; // out of bounds
    }
    return this.data[index]; // return the value at the given index
  }

  unshift(val) {
    // if the array is at capacity, double its size
    if (this.length === this.capacity) {
      this.resize();
    }

    // shift all elements to the right
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    // insert the new value at the front
    this.data[0] = val;
    this.length++;
  }

  // helper method to resize the array
  resize() {
    this.capacity *= 2; // double the capacity
    let newData = new Array(this.capacity);

    // copy old data to new data array
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }
}


module.exports = DynamicArray;
