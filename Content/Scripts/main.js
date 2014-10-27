$(document).ready(function () {
    $(document)
    
    .on();
    
        
});
(function(){
//Get your angular on down here

var app = angular.module('compositeClicker', []);

app.controller('GameController', function()
{	
	var defaultFunction = function()
	{
            console.log("Unimplemented function");
	};

	var _gameState = [];
	
	//Set up states
	var titleState = new State('title', true);
	var aboutState = new State('aboutState', false);
	var createPlayerState = new State('createPlayer', false);
	var playState = new State('play', false);
	var pausedState = new State('paused', false);
	
	//Define the events
	var start = new Event('start', createPlayerState, defaultFunction);
	var about = new Event('about', aboutState, defaultFunction);
	var returnToTitle = new Event('returnToTitle', titleState, defaultFunction);
	var create = new Event('create', playState, defaultFunction);
	var pauseGame = new Event('pauseGame', pausedState, defaultFunction);
	var resume = new Event('resume', playState, defaultFunction);
	
	//Add the events to each state
	titleState.events.push(start);
	titleState.events.push(about);
	aboutState.events.push(returnToTitle);
	createPlayerState.events.push(create);
	playState.events.push(pauseGame);
	pausedState.events.push(resume);
	
	//Add the states
	_gameState.push(titleState);
	_gameState.push(aboutState);
	_gameState.push(createPlayerState);
	_gameState.push(playState);
	_gameState.push(pausedState);

        this.sm = new StateMachine(_gameState);
});

app.controller('PlayerCreationController', function()
{
	this.feet = [4,5,6];
	this.inches = [0,1,2,3,4,5,6,7,8,9,10,11];
	this.positions = ['QB','RB','WR','TE','OL','DL','LB','CB','S'];
	this.weights = [];
	for(var i = 125; i <= 350; i++)
	{
            this.weights.push(i);
	}
	
	this.player = _player;
});

app.controller('PlayerStatController', function()
{
	this.player = _player;
});

app.controller('RepsController', function()
{
	//TODO: Pick up here
	//This controller will have an array of actionStateMachines
	//to manage each of the actions. ng-repeat will handle iteration
	
	//Actions
	this.actions = [];
	var pushupAction = new Action("Do Pushups");
	var situpAction = new Action("Do Situps");
	
	//Requirements
	var pushupRequirements = [];
	for(var i = 1; i < 100; ++i)
	{
            pushupRequirements.push(new Requirement(pushupAction, i));
	}
	
	//Achievements
	var pushupAchievements = [];
	for(i in pushupRequirements)
	{
		var achievement = new Achievement("Did " + pushupRequirements[i].threshold + " pushups.");
		achievement.requirements.push(pushupRequirements[i]);
		pushupAchievements.push(achievement);
	}
	
	pushupAction.achievements = pushupAchievements;
	var actionSM = new ActionStateMachine(pushupAction);
	this.actions.push(actionSM);
});

})();