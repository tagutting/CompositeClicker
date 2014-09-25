$(document).ready(function () {
    $(document)
    
    .on();
    
        
});
(function(){
//Get your angular on down here

var app = angular.module('compositeClicker', []);

app.controller('GameController', function()
{	
	/*var _gameState = [
	{
		name:'createPlayer',
		events:{
			create:'play'
		}
	},
	{
		name:'play',
		events:{
			pauseGame:'paused'
		}
	},
	{
		name:'paused',
		events:{
			resume:'play'
		}
	}];*/
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

	StateMachine.call(this, _gameState);	
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
	
	this.createPlayer = function(){
		_player.Created = true;
	};
});

app.controller('PlayerStatController', function()
{
	this.player = _player;
});

app.controller('RepsController', function()
{
	this.reps = _reps;
	
	this.checkPushups = function()
	{
		for(i in _achievements)
		{
			var achievement = _achievements[i];
			if(!achievement.Achieved && achievement.Name.indexOf('Pushup') > -1 && achievement.RepsNeeded <= _reps.Pushups)
			{
				achievement.Achieved = true;
			}
		}
	};
	
	this.checkSitups = function()
	{
		for(i in _achievements)
		{
			var achievement = _achievements[i];
			if(!achievement.Achieved && achievement.Name.indexOf('Situp') > -1 && achievement.RepsNeeded <= _reps.Situps)
			{
				achievement.Achieved = true;
			}
		}
	};
	
	this.checkSprints = function()
	{
		for(i in _achievements)
		{
			var achievement = _achievements[i];
			if(!achievement.Achieved && achievement.Name.indexOf('Sprint') > -1 && achievement.RepsNeeded <= _reps.Sprints)
			{
				achievement.Achieved = true;
			}
		}
	};

	this.doPushup =  function()
	{
		_reps.Pushups += 1;
		this.checkPushups();
	};
	
	this.doSitup =  function()
	{
		_reps.Situps += 1;
		this.checkSitups();
	};
	
	this.doSprint =  function()
	{
		_reps.Sprints += 1;
		this.checkSprints();
	};
});

app.controller('AchievementsController', function()
{
	this.achievements = _achievements;
});

})();