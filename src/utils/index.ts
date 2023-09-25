export function validateEmail(email: string) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return String(email).toLowerCase().match(emailPattern)
}

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

export function formatToCurrency(value: number) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return USDollar.format(value)
}
