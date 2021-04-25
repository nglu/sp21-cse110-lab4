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
    1.  A
    2.  B
    3.  C
    4.  D
    5.  E
    6.  F
    7.  G
    8.  H
14. Comparison
    1.  A
    2.  B
    3.  C
    4.  D
    5.  E
    6.  F
15. The == notation compares two variables, but ignores their datatypes. The === notation compares two values and checks datatype.