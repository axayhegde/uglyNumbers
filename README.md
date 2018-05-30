# Ugly Numbers
  Ugly Numbers are numbers whose only prime factors are 2,3 or 5. The first 10 Ugly Numbers are 1,2,3,4,5,6,7,8,9,10,12...
  One is included by convention.
  ```
  Example 1
  Input: 6
  Output: true
  Explanation: 6 = 2 × 3```
  ```
  ```
  Example 2
  
  Input: 14
  Output: false 
  Explanation: 14 is not ugly since it includes another prime factor 7.
  ```
  
  This program is to find out if a given number is an Ugly number or not. 
  
  Solution - 
  If the number is 0 then false. If the number is 1 then it is considered a ugly number by convention. Otherwise you check with 2,3 and 5 if 
  they are prime factors then it is an ugly number. Else it is not.
  
