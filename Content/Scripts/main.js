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
	var MAX_REPS = 100;
	//Actions
	this.actions = [];
	var pushupAction = new Action("Do Pushups");
	var situpAction = new Action("Do Situps");
	var sprintAction = new Action("Run Sprints");
        var benchpressAction = new Action("Do Benchpresses");
        var squatAction = new Action("Do Squats");
        var deadliftAction = new Action("Do Deadlifts");
        var cleanAction = new Action("Do Cleans");
        
	//Requirements
	var pushupRequirements = [];
        var situpRequirements = [];
        var sprintRequirements = [];
        var benchpressRequirements = [];
        var squatRequirements = [];
        var deadliftRequirements = [];
        var cleanRequirements = [];
        
	for(var i = 1; i <= MAX_REPS; ++i)
	{
            pushupRequirements.push(new Requirement(pushupAction, i));
            situpRequirements.push(new Requirement(situpAction, i));
            sprintRequirements.push(new Requirement(sprintAction, i));
            benchpressRequirements.push(new Requirement(benchpressAction, i));
            squatRequirements.push(new Requirement(squatAction, i));
            deadliftRequirements.push(new Requirement(deadliftAction, i));
            cleanRequirements.push(new Requirement(cleanAction, i));
	}
	
	//Achievements
	var pushupAchievements = [];
        var situpAchievements = [];
        var sprintAchievements = [];
        var benchpressAchievements = [];
        var squatAchievements = [];
        var deadliftAchievements = [];
        var cleanAchievements = [];
	for(var i = 0; i < MAX_REPS; ++i)
	{
		var achievement = new Achievement("Did " + pushupRequirements[i].threshold + " pushups.");
		achievement.requirements.push(pushupRequirements[i]);
		pushupAchievements.push(achievement);
                
                achievement = new Achievement("Did " + situpRequirements[i].threshold + " situps.");
		achievement.requirements.push(situpRequirements[i]);
		situpAchievements.push(achievement);
                
                achievement = new Achievement("Did " + sprintRequirements[i].threshold + " sprints.");
		achievement.requirements.push(sprintRequirements[i]);
		sprintAchievements.push(achievement);
                
                achievement = new Achievement("Did " + benchpressRequirements[i].threshold + " benchpresses.");
		achievement.requirements.push(benchpressRequirements[i]);
		benchpressAchievements.push(achievement);
                
                achievement = new Achievement("Did " + squatRequirements[i].threshold + " squats.");
		achievement.requirements.push(squatRequirements[i]);
		squatAchievements.push(achievement);
                
                achievement = new Achievement("Did " + deadliftRequirements[i].threshold + " deadlifts.");
		achievement.requirements.push(deadliftRequirements[i]);
		deadliftAchievements.push(achievement);
                
                achievement = new Achievement("Did " + cleanRequirements[i].threshold + " cleans.");
		achievement.requirements.push(cleanRequirements[i]);
		cleanAchievements.push(achievement);
	}
	
	pushupAction.achievements = pushupAchievements;
	this.actions.push(new ActionStateMachine(pushupAction));
        situpAction.achievements = situpAchievements;
	this.actions.push(new ActionStateMachine(situpAction));
        sprintAction.achievements = sprintAchievements;
	this.actions.push(new ActionStateMachine(sprintAction));
        benchpressAction.achievements = benchpressAchievements;
	this.actions.push(new ActionStateMachine(benchpressAction));
        squatAction.achievements = squatAchievements;
	this.actions.push(new ActionStateMachine(squatAction));
        deadliftAction.achievements = deadliftAchievements;
	this.actions.push(new ActionStateMachine(deadliftAction));
        cleanAction.achievements = cleanAchievements;
	this.actions.push(new ActionStateMachine(cleanAction));
});

})();