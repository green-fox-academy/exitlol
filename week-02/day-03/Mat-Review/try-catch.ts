function division(a: number, b:number) {
  if (b === 0) {
    throw new Error(`Can't divide by 0`);
  }
  return a/b;
}

try {
  console.log(division(3,0));
  
} catch (error) {
  console.log(error.message)
} finally {
  console.log('This is finally block');
}