function canPartitionKSubsets(nums, k) {
  const sum = nums.reduce((acc, val) => acc + val, 0);
  if (sum % k !== 0) return false;
  const target = sum / k;
  nums.sort((a, b) => b - a);
  if (nums[0] > target) return false;
  const visited = new Array(nums.length).fill(false);
  return backtrack(0, 0, k);
  function backtrack(start, currentSum, groups) {
    if (groups === 1) return true;
    if (currentSum === target) return backtrack(0, 0, groups - 1);
    for (let i = start; i < nums.length; i++) {
      if (!visited[i] && currentSum + nums[i] <= target) {
        visited[i] = true;
        if (backtrack(i + 1, currentSum + nums[i], groups)) return true;
        visited[i] = false;
      }
    }
    return false;
  }
}
