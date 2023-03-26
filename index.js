function writeCards(names, event) {
    const messages = [];
    names.forEach(name => {
      const message = `Thank you, ${name}, for the wonderful ${event} gift!`;
      messages.push(message);
    });
    return messages;
  }
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  const event = "surprise gift";
  const messages = writeCards(names, event);
  
  console.log(messages);


  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  


  