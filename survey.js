const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let name = "";
let activity = "";
let music = "";
let meal = "";
let food = "";
let sport = "";
let superPower = "";



rl.question("What's your name? ", (answer) => {
  name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              superPower = answer;
            console.log(`Thank you for your feedback, ${name}, you like doing ${activity} while listening to ${music}, your favourite meal and food are ${meal} and ${food}, and ${sport} is your sport, you're amazing at ${superPower}. `);
              rl.close();
            });
          });    
        });  
      });
    });
  }); 
}); 