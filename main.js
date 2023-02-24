// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")



//function to roll die 
var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

   //dice will roll twice a turn and make it loop 10 times,
  // and add up result each time
  //if first rool and second roll are the same
  //doubles should be added to end


  const yo = function() {
   for (let i = 0; i < 10; i++)
    {
        const die1 = dice.roll();
        const die2 = dice.roll();
    
        let message = die1 + " + " + die2 + " = " + (die1 + die2)
        if (die1 === die2)
        {
             message += " DOUBLES!";
        }
    
        console.log(message);
    }

    };

   yo();


