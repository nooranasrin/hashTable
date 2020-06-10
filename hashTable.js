const hashFunction = function (key, length) {
  return key % length;
};

class HashTable {
  constructor(hashFunction, arrayLength) {
    this.hashFunction = hashFunction;
    this.table = new Array(arrayLength);
  }

  insert(key, value) {
    const index = this.hashFunction(key, this.table.length);
    const node = { key, value, next: null };
    let currentNode = this.table[index];
    while (true) {
      if (!currentNode) {
        this.table[index] = node;
        return;
      }
      if (currentNode.next === null) {
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  get(key) {
    const index = this.hashFunction(key, this.table.length);
    let currentNode = this.table[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
  }
}

const main = function () {
  const hashTable = new HashTable(hashFunction, 10);
  hashTable.insert(10, 10);
  hashTable.insert(11, 11);
  hashTable.insert(12, 12);
  hashTable.insert(20, 20);
  hashTable.insert(30, 30);
  hashTable.insert(40, 'node');
  console.log(hashTable.get(40));
};

main();
