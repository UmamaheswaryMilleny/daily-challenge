const challenges= [
  "1. Separate odd and even numbers into two arrays",
  "2. Merge two arrays without using inbuilt methods",
  "3. Find sum of even numbers and replace odd numbers with -1",
  "4. Find the smallest and largest value in an array",
  "5. Insert an element at a specific index in an array",
  "6. Delete an element at the 5th index of an array",
  "7. Reverse an array",
  "8. Swap the first and last element of an array",
  "9. Replace all odd numbers with 1 and even numbers with 0",
  "10. Find the second largest and second smallest element in an array",
  "11. Find duplicate numbers in an array and count their occurrences",
  "12. Swap every pair of adjacent numbers in an array",
  "13. Find unique elements from an array",
  "14. Find frequency of a specific number in an array",
  "15. Arrange even numbers in front of an array",
  "16. Delete all duplicate elements in an array",
  "17. Find prime numbers in an array",
  "18. Replace prime numbers with 1 and non-prime with 0",
  "19. Find the most repeated element in an array",
  "20. Find elements that occur exactly two times",
  "21. Count occurrences of every element in an array",
  "22. Move all 0’s to the front and 1’s to the end",
  "23. Delete two elements after each even number",
  "24. Find the third largest element in an array",
  "25. Print elements not common in both arrays",
  "26. Merge two unsorted arrays into a sorted array",
  "27. Find average of even numbers and sum of odd numbers in an array",
  "28. Remove all odd numbers in an array",
  "29. Replace prime numbers with their index positions",
  "30. Remove all prime numbers greater than 50 and remove all non-prime numbers",
  "31. Find unique non-prime numbers in an array",
  "32. Find non-prime numbers in an array and insert their double after them",
  "33. Delete two elements after the occurrence of a prime number",
  "34. Find average of prime and non-prime numbers in an array",
  "35. Find factorial of the largest number in an array",
  "36. If array sum is greater than 100 delete odd numbers, else delete even numbers",
  "37. Find the majority element in an array",
  "38. Count vowels in a string",
  "39. Print largest string in an array",
  "40. Filter out only strings from an array",
  "41. Reverse a string",
  "42. Find the most frequent character in a string",
  "43. Remove duplicates from a string"
];

function getRandom(){
    return Math.floor( Math.random()*challenges.length)

}

export default getRandom;
