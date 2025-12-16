function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  }
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
