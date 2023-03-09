// Code your solutions in this file

function writeCards(namesArray, occasion) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`);
    }
  
    return thankYouMessages;
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }