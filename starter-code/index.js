class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = 0;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a-b;
    })

    this.length++;
  }

  get(pos) {

    return this.items[pos];

  }
  max() { }
  min() { }
  average() { }
  sum() { }
};

module.exports = SortedList;