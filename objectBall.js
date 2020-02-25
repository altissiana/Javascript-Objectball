    const gameObject = {
        "home" : {
        "teamName" : "Brooklyn Nets",
        "colors" : ["Black", "White"],
        "players" : {

            "Alan Anderson":  {
            "number" : 0,
            "shoe" : 16,
            "points" : 22,
            "rebounds" : 12,
            "assists" : 12,
            "steals" : 3,
            "blocks" : 1,
            "slamDunks" : 1,

            },

            "Reggie Evans":  {
            "number" : 30,
            "shoe" : 14,
            "points" : 12,
            "rebounds" : 12,
            "assists" : 12,
            "steals" : 12,
            "blocks" : 12,
            "slamDunks" : 7,
            },

            "Brook Lopez": {
            "number" : 11,
            "shoe" : 17,
            "points" : 17,
            "rebounds" : 19,
            "assists" : 10,
            "steals" : 3,
            "blocks" : 1,
            "slamDunks" : 15,
            },

            "Mason Plumlee":  {
            "number" : 1,
            "shoe" : 19,
            "points" : 26,
            "rebounds" : 12,
            "assists" : 6,
            "steals" : 3,
            "blocks" : 8,
            "slamDunks" : 5,
            },

            "Jason Terry":  {
            "number" : 31,
            "shoe" : 15,
            "points" : 19,
            "rebounds" : 2,
            "assists" : 2,
            "steals" : 4,
            "blocks" : 11,
            "slamDunks" : 1,
            },
        },
        },

        "away" : {
        "teamName" : "Charlotte Hornets",
        "colors" : ["Turquoise", "Purple"],
        "players" : {

            "Jeff Adrien" : {
            "number" : 4,
            "shoe" : 18,
            "points" : 10,
            "rebounds" : 1,
            "assists" : 1,
            "steals" : 2,
            "blocks" : 7,
            "slamDunks" : 2 
            },

            "Bismak Biyombo" : {
            "number" : 0,
            "shoe" : 16,
            "points" : 12,
            "rebounds" : 4,
            "assists" : 7,
            "steals" : 7,
            "blocks" : 15,
            "slamDunks" : 10
            },

            "DeSagna Diop": {
            "number" : 2,
            "shoe" : 14,
            "points" : 24,
            "rebounds" : 12,
            "assists" : 12,
            "steals" : 4,
            "blocks" : 5,
            "slamDunks" : 5
            },

            "Ben Gordon" : {
            "number" : 8,
            "shoe" : 15,
            "points" : 33,
            "rebounds" : 3,
            "assists" : 2,
            "steals" : 1,
            "blocks" : 1,
            "slamDunks" : 0
            },

            "Brendan Haywood": {
            "number" : 33,
            "shoe" : 15,
            "points" : 6,
            "rebounds" : 12,
            "assists" : 12,
            "steals" : 22,
            "blocks" : 5,
            "slamDunks" : 12   
            },
        },
    },         
}


function players(){
    const homePlayers = gameObject["away"]["players"]
    const awayPlayers = gameObject["home"]["players"]
    return {...homePlayers, ...awayPlayers}
};


function numPointsScored(name){
    if (name === undefined || name === null) {
        throw Error("Name must be a string");
    };

   let player = players()[name];
    if (player){
        return player.points; 
    }else{
       return 0;
   };  
};
  
function shoeSize(name){
    if (name === undefined || name === null) {
        throw Error("Name must be a string");
    };
    
    let player = players()[name];
    if (player) {
        return player.shoe 
    }else{
        return 0;
    };
};

function teamColors(name){
    if (name === undefined || name === null) {
        throw Error("Team name must be a string");
    };
    
    let teamColors;
    if (gameObject["home"]["teamName"] === name) {
        teamColors = gameObject["home"]["colors"];
    }
    else if (gameObject["away"]["teamName"] === name) {
        teamColors = gameObject["away"]["colors"];
    }
    else {
        teamColors = [];
    }

    return teamColors;
}

function teamNames(){
    let teamNames = [];
    teamNames.push(gameObject["home"]["teamName"]);
    teamNames.push(gameObject["away"]["teamName"]);
    return teamNames;
}

function playerNumbers(name){
    if (name === undefined || name === null) {
        throw Error("Team name must be a string");
    };
    let playerNumbers = [];
    let players;

    if (gameObject["home"]["teamName"] === name) {
       players = gameObject["home"]["players"];
    }
    else if (gameObject["away"]["teamName"] === name) {
        players = gameObject["away"]["players"];
    }

    if (players) {
        for (let [key, value] of Object.entries(players)) {
            playerNumbers.push(value.number)
        };
    }
    return playerNumbers;
};

function playerStats(name) {
    if (name === undefined || name === null) {
        throw Error("Player name must be a string");
    };

    let player = players()[name];
    if (player) {
        return player
    }else{
        return 0;
    };
}

exports.numPointsScored = numPointsScored;
exports.shoeSize = shoeSize;
exports.teamColors = teamColors;
exports.teamNames = teamNames;
exports.playerNumbers = playerNumbers;
exports.playerStats = playerStats;

    

