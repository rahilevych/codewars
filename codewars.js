// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
// function permutations(string) {
//   let result = new Set();
//   let arr = string.split('');
//   if (string.length === 1) {
//     return [string];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let head = arr[i];
//     let tail = arr
//       .slice(0, i)
//       .concat(arr.slice(i + 1))
//       .join('');
//     let tailPerm = permutations(tail);
//     for (let p of tailPerm) {
//       result.add(head + p);
//     }
//   }
//   return Array.from(result);
// }

function permitation(string) {
  let result = new Set();
  let arr = string.split('');
  if (string.length === 1) {
    return [string];
  }
  arr.map((head, index) => {
    let tail = arr
      .slice(0, index)
      .concat(arr.slice(index + 1))
      .join('');
    let tailPerm = permitation(tail);
    tailPerm.map((t) => {
      result.add(head + t);
    });
  });
  return Array.from(result);
}
