/**
 * Store the pin into a variable called userPin
 * Store the amount into a variable called currentBalance
 *
 * Return a object with 4 methods
 * 1: checkBalance(pin)
 *     Check if the pin matches userPin
 *         If it does return the currentBalance
 *         If not return invalid pin message
 * 2: deposit(pin, amount)
 *     Check if the pin matches userPin
 *         If it does increase the currentBalance by the amount
 *         Return success message
 *         If not return invalid pin message
 * 3: withdraw(pin, amount)
 *     Check if the pin matches userPin
 *         If it does check if amount is <= currentBalance
 *             If it is then subtract currentBalance by amount
 *             Return success message
 *         If not return failed message
 *     If not return invalid pin message
 *  4: changePin(oldPin, newPin)
 *     Check if the oldPin matches userPin
 *         If it does replace userPin value with newPin
 *         Return success message
 *         If not return invalid pin message
 * */

function createAccount(pin, amount = 0) {
  let userPin = pin;
  let currentBalance = amount;

  function isPinValid(pin) {
    return userPin === pin;
  }

  return {
    checkBalance: (pin) => {
      if (isPinValid(pin)) return `$${currentBalance}`;
      return 'Invalid PIN.';
    },
    deposit: (pin, amount) => {
      if (isPinValid(pin)) {
        currentBalance = currentBalance + amount;
        return `Successfully deposited $${amount}. Current balance: $${currentBalance}.`;
      }

      return 'Invalid PIN.';
    },
    withdraw: (pin, amount) => {
      if (isPinValid(pin)) {
        if (amount <= currentBalance) {
          currentBalance = currentBalance - amount;
          return `Successfully withdrew $${amount}. Current balance: $${currentBalance}.`;
        }

        return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
      }

      return 'Invalid PIN.';
    },
    changePin: (oldPin, newPin) => {
      if (isPinValid(oldPin)) {
        userPin = newPin;
        return 'PIN successfully changed!';
      }

      return 'Invalid PIN.';
    },
  };
}

module.exports = { createAccount };
