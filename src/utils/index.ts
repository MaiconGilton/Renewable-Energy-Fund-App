
export function getRandomNumber(min: number, max: number) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers');
  }

  // Swap min and max if min is greater than max
  if (min > max) {
    [min, max] = [max, min];
  }

  // Calculate a random number within the specified range
  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber
}
