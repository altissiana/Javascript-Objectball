var assert = require('assert');
var objectBall = require('../objectBall')
describe ('objectball' , function(){
    describe ('#numPointsScored()', function(){
        it('should return zero if players is not found', function() {
            assert.equal(objectBall.numPointsScored(''), 0);
        });
        it('should return player score when found', function(){
            assert.equal(objectBall.numPointsScored('Jeff Adrien'), 10);
        });
        it("should throw an exception if you don't pass a string", function(){
            assert.throws(() => {
                objectBall.numPointsScored(null);
            });
        });    
    });
    describe ('#shoeSize()', function(){
        it("should throw an exception if you don't pass a string", function(){
            assert.throws(() => {
                objectBall.shoeSize(null);
            },
            {
                message: "Name must be a string"
            });
        });
        it("should return 0 if the player is not found", function(){
            assert.equal(objectBall.shoeSize(""), 0);
        });
        it("should return the player's shoe size when found", function(){
            assert.equal(objectBall.shoeSize("Ben Gordon"), 15);
        });
    });
    describe ('#teamColors', function(){
        it("should throw an error if team name is not a string", function(){
            assert.throws(() => {
                objectBall.teamColors(null);
            },
            {
                message: "Team name must be a string"
            });
        });
        it("should return an empty list if team name not found", function(){
            assert.equal(objectBall.teamColors("").length, 0);
        });
        it("should return Black and White if passed Brooklyn Nets", function(){
            let teamColors = objectBall.teamColors("Brooklyn Nets");
            assert.equal(teamColors.length, 2);
            assert.ok(teamColors.includes("White"));
            assert.ok(teamColors.includes("Black"));
        });
        it("should return Turquoise and Purple when passed Charlotte Hornets", function(){
            let teamColors = objectBall.teamColors("Charlotte Hornets");
            assert.equal(teamColors.length, 2);
            assert.ok(teamColors.includes("Turquoise"));
            assert.ok(teamColors.includes("Purple"));
        });
    });
    describe ('#teamNames', function() {
        it("should return an array with both team names", function (){
            let teamNames = objectBall.teamNames();
            assert.equal(teamNames.length, 2);
            assert.ok(teamNames.includes("Brooklyn Nets"));
            assert.ok(teamNames.includes("Charlotte Hornets"));
        });
    });
    describe('#playerNumbers', function() {
        it("should throw an error if team name is not a string", function(){
            assert.throws(() => {
                objectBall.playerNumbers(null);
            },
            {
                message: "Team name must be a string"
            });
        });
        it("should return an empty list if team name not found", function(){
            assert.equal(objectBall.playerNumbers("").length, 0);
        });
        it("return a list of jersey numbers if team is found", function(){
            let expectedPlayerNumbers = [4, 0, 2, 8, 33];
            let actualPlayerNumbers = objectBall.playerNumbers("Charlotte Hornets");

            assert.deepStrictEqual(actualPlayerNumbers, expectedPlayerNumbers); 
        });
    });
    describe ('#playerStats', function() {
        it("should throw an error if player name is not a string", function(){
            assert.throws(() => {
                objectBall.playerStats(null);
            },
            {
                message: "Player name must be a string"
            });
        });
        
    })
});