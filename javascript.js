var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool!"
    }
];

function isUserValid(username, password){
    for(var i=0;i<database.length;i++){
        if (database[i].username===username &&
            database[i].password===password ) {
                return true;
        }
    }
    return false;
}

var userNamePrompt = prompt("What's your username?");
var paswordPrompt = prompt("What's your password?");

function signIn(username, password){
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password.");
        alert("Check the database out to see available accounts");
    }
}

signIn(userNamePrompt, paswordPrompt);
