function complexFunction(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
          for (let k = 0; k < arr.length; k++) {
            if (arr[k] === 0) {
              result += 1;
            } else {
              result += 2;
            }
          }
        } else {
          result += 3;
        }
      }
    } else {
      result += 4;
    }
  }

  return result;
}
