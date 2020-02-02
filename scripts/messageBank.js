// TODO fill this up 
const startEmail = `Welcome to COMPANY_NAME!  The debugging team and I are excited to have you here.  
As a debugger, you will be squashing any bugs you can find in the code.  I am positive that your years 
of academy training will not be wasted here.  Good luck!`

let goodMap = new Map();
var goodEndRound = ["email:I am hearing wonderful things about you're progress!", 
"email:Uh may zing! I can't wait to see what you continue to do for the company!"];
var goodBeginRound = ["email:Keep it up and we may start paying you!"];
var goodRandom = ["group:RACHEL - “How did the new hire pick things up so quickly?“",
"group:SOPHIA - “@NIKHIL BETTER STOP PUTTING BUGS ON ME, I HAVE ENOUGH WORK ON MY HANDS“"];
var goodEndGame = ["email:You've been an absolutely phenomenal addition to the team! Here's a promotion for all your effort, we'd love to keep you around to keep squashing bugs! ENCLOSED CHECK - $10"];

goodMap.set("endround", goodEndRound);
goodMap.set("beginround", goodBeginRound);
goodMap.set("random", goodRandom);
goodMap.set("endgame", goodEndGame);

let averageMap = new Map();
var averageEndRound = ["email:A little effort goes a long way. I know you can do better.",
"email:You're doing alright I suppose. I'd like to see more passion in your squashing."];
var averageBeginRound = ["email:Try focusing more this time. I believe in you!",
"email:Maybe throw on some chill lofi beats to study/relax to? I know they help me get in the zone."];
var averageRandom = ["group:TOM - “What's the new hire's name again? They're so forgettable",
"group:SOPHIA - “WHO TOOK MY BAGEL BITES FROM THE FRIDGE?? COUNT YOUR DAYS“"];
var averageEndGame = ["email:You've been here for so long, but I feel like nothing's changed. You can stick around for now, I guess."];

averageMap.set("endround", averageEndRound);
averageMap.set("beginround", averageBeginRound);
averageMap.set("random", averageRandom);
averageMap.set("endgame", averageEndGame);


let badMap = new Map();
var badEndRound = ["email:Please come into my office for a performance review.",
"email:The team has expressed concerns about your performance.  Please come into my office.",
"email:Just because you're in a cubicle doesn't mean you can fool around. Please stay on task."];
var badBeginRound = ["email:I’m starting to get concerned about your performance.  Please don’t make me reconsider your employment."];
var badRandom = ["group:TOM - “Someone just pushed the buggiest code I’ve ever seen.”",
"group:ANNA - “Can someone revoke the new hire’s permissions to push code?”",
"group:SOPHIA - “I JUST SAW THE BIGGEST COCKROACH IN MY CUBICLE WTH“"];
var badEndGame = ["email:Three weeks in and you’ve shown unfathomable levels of incompetence.  Please pack your things immediately."];

badMap.set("endround", badEndRound);
badMap.set("beginround", badBeginRound);
badMap.set("random", badRandom);
badMap.set("endgame", badEndGame);

