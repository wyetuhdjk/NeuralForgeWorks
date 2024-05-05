function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  backtrack([], 0, 0);
  return result;
  function backtrack(combination, start, sum) {
    if (sum === target) {
      result.push([...combination]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      combination.push(candidates[i]);
      backtrack(combination, i + 1, sum + candidates[i]);
      combination.pop();
    }
  }
}
