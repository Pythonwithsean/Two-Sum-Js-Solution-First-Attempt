const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 5;

const map = new Map();

for (let i = 0; i < arr.length; i++) {
  const num1 = arr[i];
  const num2 = target - num1;

  if (map.has(num2)) {
    const index1 = map.get(num2);
    const index2 = i;
    console.log(`Indices for num1 (${num1}) and num2 (${num2}): ${index1}, ${index2}`);
  }

  map.set(num1, i);
  console.log(map.get(num2))
}
