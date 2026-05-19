import 'dart:io';

class SumCalculator {
  int n;

  SumCalculator(this.n);

  void calculateSum() {
    int sum = 0;

    for (int i = 1; i <= n; i++) {
      sum += i;
    }

    print("Sum from 1 to $n = $sum");
  }
}

void main() {
  // Get input from user
  print("Enter a number:");

  int number = int.parse(stdin.readLineSync()!);

  // Create object
  SumCalculator obj = SumCalculator(number);

  // Call method
  obj.calculateSum();
}