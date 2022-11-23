const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let info = {
  name: '',
  music: '',
  brunch: '',
  sport: '',
  skill: ''
};


rl.question('What is your name? ', (nameA) => {
  info.name = nameA;
  rl.question(`What is your favorite music?`, (musicA) => {
    info.music = musicA;
    rl.question(`What's your favourite thing to eat for brunch?`, (brunchA) => {
      info.brunch = brunchA;
      rl.question(`Which sport is your absolute favourite?`, (sportA) => {
        info.sport = sportA;
        rl.question(`In a few words, tell us what you are amazing at!`, (skillA) => {
          console.log(`${info.name} loves listening to ${info.music} while coding, devouring ${info.brunch} for brunch, prefers ${info.sport} over any other sport, and is amazing at ${skillA}.`);
          rl.close();
        });
      });
    });
  });
});
//

//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.