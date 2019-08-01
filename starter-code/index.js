class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = 0;

  }

  add(item) {
    this.items.push(item);
    this.length++;
  }

  get(pos) {

    let searchedItem;

    // if index greater than array or negative , throw an error
    if (pos > this.items.length || pos < 0) {
      throw new Error("EmptySortedList");
    }
    else {
      searchedItem = this.items[pos];
    }

    return searchedItem;

  }
  max() { }
  min() { }
  average() { }
  sum() { }
};

module.exports = SortedList;