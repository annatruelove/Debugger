// TODO fill this up 
const startEmail = "Welcome to Macrosoft! As a debugger, you'll be squashing any bugs you find in the code. Good luck!"

let goodMap = new Map();
var goodEndRound = ["email:I am hearing wonderful things about your progress!",
    "email:Uh may zing! I can not wait to see what you continue to do for the company!"
];
var goodBeginRound = ["email:Keep it up and we may start paying you!"];
var goodRandom = ["group:RACHEL - How did the new hire pick things up so quickly?",
    "group:SOPHIA - @NIKHIL BETTER STOP PUTTING BUGS ON ME, I HAVE ENOUGH WORK ON MY HANDS",
    "group:ANNA - @NEWBIE Welcome to the team! :)"
];
var goodEndGame = ["email:You have been an absolutely phenomenal addition to the team! Here is a promotion for all your effort, we would love to keep you around to keep squashing bugs! ENCLOSED CHECK - $10"];

goodMap.set("endround", goodEndRound);
goodMap.set("beginround", goodBeginRound);
goodMap.set("random", goodRandom);
goodMap.set("endgame", goodEndGame);

let averageMap = new Map();
var averageEndRound = ["email:A little effort goes a long way. I know you can do better.",
    "email:You aer doing alright, I suppose. I would like to see more passion in your squashing."
];
var averageBeginRound = ["email:Try focusing more this time. I believe in you!",
    "email:Maybe throw on some chill lofi beats to study/relax to? I know they help me get in the zone."
];
var averageRandom = ["group:TOM - “What is the new hire's name again? They are so forgettable",
    "group:SOPHIA - WHO TOOK MY BAGEL BITES FROM THE FRIDGE?? COUNT YOUR DAYS",
    "group:NIKHIL - Anyone wanna hear a dad joke?"
];
var averageEndGame = ["email:You have been here for so long, but I feel like nothing's changed. You can stick around for now, I guess."];

averageMap.set("endround", averageEndRound);
averageMap.set("beginround", averageBeginRound);
averageMap.set("random", averageRandom);
averageMap.set("endgame", averageEndGame);


let badMap = new Map();
var badEndRound = ["email:Please come into my office for a performance review.",
    "email:The team has expressed concerns about your performance.  Please come into my office.",
    "email:Just because you are in a cubicle does not mean you can fool around. Please stay on task."
];
var badBeginRound = ["email:I am starting to get concerned about your performance.  Please do not make me reconsider your employment.",
    "I know you are not getting paid but that is not an excuse for this behavior."
];
var badRandom = ["group:TOM - Someone just pushed the buggiest code I have ever seen.",
    "group:ANNA - Can someone revoke the new hire’s permissions to push code?",
    "group:SOPHIA - I JUST SAW THE BIGGEST COCKROACH IN MY CUBICLE WTH"
];
var badEndGame = ["email:Three weeks in and you have shown unfathomable levels of incompetence.  Please pack your things immediately."];

badMap.set("endround", badEndRound);
badMap.set("beginround", badBeginRound);
badMap.set("random", badRandom);
badMap.set("endgame", badEndGame);