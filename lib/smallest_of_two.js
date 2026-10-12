export function smallestOfTwo(num1, num2) {
    let smallest = 0;
    if (num1 < num2) {
        smallest = num1;
    }
    else {
        smallest = num2;
    }
    return smallest;
}
