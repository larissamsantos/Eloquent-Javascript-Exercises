# Chapter 2 - Program Structure

## 1. Looping a triangle

Objective: Write a loop that makes seven calls to console.log to output the following triangle:<p>
    #<p>
    ##<p>
    ###<p>
    ####<p>
    #####<p>
    ######<p>
    #######
    
Solution: I used the concat() method so everytime the loop is executed the character "#" is added to the string called triangle, which is then printed using the console.log() method.

## 2. FizzBuzz

Objective: Write a program that for all numbers from 1 to 100 prints Fizz if the number is divisible by 3; Buzz if the number is divisible by 5; Fizzbuzz if the number is divisible by both; and prints the number itself if it is divisible by neither. 

Solution: I created a for loop starting at 1 and ending at 100 in which the conditions above are represented by if conditions. To check if a number is divisible by other number, I used the arithmetic operator %.

## 3. Chessboard

Objective: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Solution: I used a nested for loop to insert characters in which the outer loop controls the number of lines and the inner loop controls the number of columns. At the end of each inner loop iteration a "\n" character is added to separate lines. For each grid position, if the line and column are both even or both odd, the space character is added to the string. Otherwise, the "#" character is added.
