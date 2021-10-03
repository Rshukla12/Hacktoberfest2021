// Bubble Sort

// In bubble sort we compare to pairs and shift the greater to right if we are sorting in ascending order;
// After each pass we are bubbling out one element or the larget element is set to the last avilable index

// Iterative approach to implement bubble sort

// Time Complexity => O(N^2);
// Space Complexity => O(1);

function iterativeBubbleSort(arr){
  // first loop for making n - 1 passes
  for(let i = 0; i < arr.length - 1; i++){
    // second loop for bubbling out the largest element
    for(let j = 0; j < ( arr.length - i -1 ); j++){
      // If larger element is on samller index then we swap
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}


// Recursive approach to implement bubble sort
// In recursive approach the first for loop is replaced by recursive calls to the function

// Time Complexity => O(N^2)
// Space Complecity => O(N)

function recursiveBubbleSort(arr, i=0){
  // base case
  if ( i == arr.length - 1 ){
    return arr;
  }
  // loop for bubbling out the largest element
  for ( j = 0; j < arr.length - i - 1; j++ ){
    // If larger element is on samller index then we swap
    if ( arr[j] > arr[j+1] ){
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j+1] = temp;
    }
  }
  return recursiveBubbleSort(arr, ++i);
}

// tests
const arr = [95, 34, 65, 89, 2, 78, 12, 8, 57];

console.log(iterativeBubbleSort(arr));
console.log(recursiveBubbleSort(arr));
