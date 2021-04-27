# Lab 4
## Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. Error: result is not defined anywhere in the scope
5. Error: assignment to constant variable
6. Error: assignment to constant variable
## Part 1b
### 
1. Output to console is 3, which is the length of 'prices' list. Since we use 'var', the scope of i exists outside of the for-loop.
2. Output to console is 150. Since we use 'var', the scope of 'discountedPrice' exists outside of the for-loop. The last value in the 'prices' list is 300, with a 'discount' of 0.5, so the latest 'discountedPrice' is 300 * 0.5 = 150.
3. Output to console is 150. We declare 'finalPrice' in the same scope as console.log so it should work fine. The latest value of 'finalPrice' depends on the latest 'discountedPrice', which is 150 after being rounded.
4. Given a price list and a discount percentage, the function will return a new list with all the discounted prices.
5. Error. Since we declare i using 'let', i only exists within the for-loop.
6. Error. Same reason as #5, since we declare 'discountedPrice' using 'let', 'discountedPrice' only exists within the for-loop.
7. Same as #3. Output to console is 150. We declare 'finalPrice' in the same scope as console.log so it should work fine. The latest value of 'finalPrice' depends on the latest 'discountedPrice', which is 150 after being rounded.
8. Similar to #4: Given a price list and a discount percentage, the function will return a new list with all the discounted prices.
9. Error. Again, since we declare i using 'let', i only exists within the for-loop.
10. 'length' should give the number of prices in the given list, which is 3. Nothing really happen here besides 'length' is a const.
11. According to [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), you can push into a const array. Everything else works fine within its scope so the function still return a new list with all the discounted prices.
12. Data Type
    1.  A: student.name
    2.  B: student['Grad Year']
    3.  C: student.greeting()
    4.  D: student['Favorite Teacher'].name
    5.  E: student.courseLoad[0]
13. Arithmetic
    1.  A: 32 - 2 is interpreted as string type
    2.  B: 1 - 2 cannot be interpreted as string type since there is no '-' operation on string
    3.  C: 3 - null is converted to 0
    4.  D: 3null - null is interpreted as string type
    5.  E: 4 - 'true' is interpreted as number 1
    6.  F: 0 - both 'false' and 'null' are converted to number 0
    7.  G: 3undefined - 'undefined' is interpreted as string type
    8.  H: NaN - 'undefined' is NaN as number
14. Comparison
    1.  A True, string '2' becomes a number 2 > 1.
    2.  B True, strings become numbers: 2 < 12.
    3.  C True, string '2' becomes a number 2 == 2.
    4.  D False, they are not the same type, the left 2 is number, and the right '2' is a string.
    5.  E False, boolean "true" is converted to 1 != 2.
    6.  F True, both are type boolean and both are true.
15. The == notation compares two variables, but ignores their datatypes. The === notation compares two values and checks datatype.
16. js file
17. The result a new array [2,4,6]. The function modifyArray takes in an array [1,2,3] and a function doSomthing. Inside modifyArray, we create a newArr. For every value inside the input array, we will perform doSomething on that value, and then push the output of doSomthing into newArr. doSomething takes a value and double it, so we end up with an array with all the values inside doubled.
18. js file
19. 1432 - 1 and 4 are printed first, next is 3 with setTimeout after 0s, and then 2 is printed last after setTimeout at 1s.