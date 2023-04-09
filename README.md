# recursion_merge-sort

The merge-sort algorithm is a recursive algorithm that like any recursive function, seeks to divide and conquer.
It is used to sort a numerical array by value.
The algorithm essenially boils down to 3 simple steps.

Step 1: Sort the left side of the array.
Step 2: Sort the right side of the array.
Step 3: Merge the left and right side of the array.

The benefits of this algorithm is that it's time complexity can be measured as n(Log(n)); It will always be faster than any n(n) algorithm due to log(n) always being smaller than itself, therefore n(log(n)) < n(n);

Added some simple jest testing.
