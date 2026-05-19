class MultiplicationTable {
  int number;

  MultiplicationTable(this.number);

  void printTable() {
    for (int i = 1; i <= 10; i++) {
      print("$number x $i = ${number * i}");
    }
  }
}

void main() {
  MultiplicationTable obj = MultiplicationTable(5);
  obj.printTable();
}