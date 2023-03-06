export function Lesson1(area: number) {
  let result = [];
  let square = Math.floor(Math.sqrt(area));
  while (square > 0) {
    let squareArea = square * square;
    result.push(squareArea);
    area -= squareArea;
    square = Math.floor(Math.sqrt(area));
  }
  return result;
}

export function Lesson2(n: number) {
  const p = "2357111317192329"; 
  const startNumber = n; 
  const endNumber = startNumber + 5; 
  return p.slice(startNumber, endNumber);
}

export function Lesson4(n: number) {
  let count = 0;
  if (n !== 0) {
    while (n !== 1) {
      console.log('lesson4', n)
      if (n % 2 === 0) {
        n /= 2;
      } else if (n === 3 || (n + 1) % 4 === 0) {
        n++;
      } else {
        n--;
      }    
      count++;
    }
  }
  console.log('-------')
  return count;
}