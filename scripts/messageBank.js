// TODO fill this up 
const startEmail = `Welcome to COMPANY_NAME!  The debugging team and I are excited to have you here.  
As a debugger, you will be squashing any bugs you can find in the code.  I am positive that your years 
of academy training will not be wasted here.  Good luck!`

let goodMap = new Map();
var goodEndRound = ["email:Test good end round"];
var goodBeginRound = [];
var goodRandom = [];
var goodEndGame = [];
goodMap.set("endround", goodEndRound);
goodMap.set("beginround", goodBeginRound);
goodMap.set("random", goodRandom);
goodMap.set("endgame", goodEndGame);

let averageMap = new Map();
var averageEndRound = ["test average endround"];
var averageBeginRound = [];
var averageRandom = [];
var averageEndGame = [];
averageMap.set("endround", averageEndRound);
averageMap.set("beginround", averageBeginRound);
averageMap.set("random", averageRandom);
averageMap.set("endgame", averageEndGame);


let badMap = new Map();
var badEndRound = ["email:“Please come into my office for a performance review.”",
"email:“The team has expressed concerns about your performance.  Please come into my office.”"];
var badBeginRound = ["email:“I’m starting to get concerned about your performance.  Please don’t make me reconsider your employment.”"];
var badRandom = ["teams:“Someone just pushed the buggiest code I’ve ever seen.”",
"teams:“Can someone revoke the new hire’s permissions to push code?”"];
var badEndGame = ["email:“Three weeks in and you’ve shown unfathomable levels of incompetence.  Please pack your things immediately.”"];

badMap.set("endround", badEndRound);
badMap.set("beginround", badBeginRound);
badMap.set("random", badRandom);
badMap.set("endgame", badEndGame);

