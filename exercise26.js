function sum(...nums) {
  let result=0;
  for(let i=0;i<nums.length;i++){
     result+=nums[i];
  }
  console.log(result);
  return result;
}

sum(1, 2, 3, 4, 5);