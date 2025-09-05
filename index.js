const challenges = [
  "Separate odd and even numbers into two arrays",
  "Merge two arrays without using inbuilt methods",
  "Find sum of even numbers and replace odd numbers with -1",
  "Find the smallest and largest value in an array",
  "Insert an element at a specific index in an array",
  "Delete an element at the 5th index of an array",
  "Reverse an array",
  "Swap the first and last element of an array",
  "Replace all odd numbers with 1 and even numbers with 0",
  "Find the second largest and second smallest element in an array",
  "Find duplicate numbers in an array and count their occurrences",
  "Swap every pair of adjacent numbers in an array",
  "Find unique elements from an array",
  "Find frequency of a specific number in an array",
  "Arrange even numbers in front of an array",
  "Delete all duplicate elements in an array",
  "Find prime numbers in an array",
  "Replace prime numbers with 1 and non-prime with 0",
  "Find the most repeated element in an array",
  "Find elements that occur exactly two times",
  "Count occurrences of every element in an array",
  "Move all 0’s to the front and 1’s to the end",
  "Delete two elements after each even number",
  "Find the third largest element in an array",
  "Print elements not common in both arrays",
  "Merge two unsorted arrays into a sorted array",
  "Find average of even numbers and sum of odd numbers in an array",
  "Remove all odd numbers in an array",
  "Replace prime numbers with their index positions",
  "Remove all prime numbers greater than 50 and remove all non-prime numbers",
  "Find unique non-prime numbers in an array",
  "Find non-prime numbers in an array and insert their double after them",
  "Delete two elements after the occurrence of a prime number",
  "Find average of prime and non-prime numbers in an array",
  "Find factorial of the largest number in an array",
  "If array sum is greater than 100 delete odd numbers, else delete even numbers",
  "Find the majority element in an array",
  "Count vowels in a string",
  "Print largest string in an array",
  "Filter out only strings from an array",
  "Reverse a string",
  "Find the most frequent character in a string",
  "Remove duplicates from a string"
];


function getChallenge(){
    return challenges[Math.floor( Math.random()*challenges.length)]

}

export default getChallenge();

