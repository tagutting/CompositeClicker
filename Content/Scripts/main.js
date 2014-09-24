$(document).ready(function () {
    $(document)
    
    .on();
    
        
});
(function(){
//Get your angular on down here

var _gameState = [
	{
		name:'title',
		initial:true,
		events:{
			'start':'createPlayer'
		}
	},
	{
		name:'createPlayer',
		events:{
			'create':'play'
		}
	},
	{
		name:'play',
		events:{
			'pauseGame':'paused'
		}
	},
	{
		name:'paused',
		events:{
			'resume':'play'
		}
	},
];

var _skills = [
{
	Name: 'Size',
	Min: 0,
	Value: 5,
	Max: 10
},
{
	Name: 'Frame',
	Min: 0,
	Value: 5,
	Max: 10
},
{
	Name: 'Athleticism',
	Min: 0,
	Value: 5,
	Max: 10
},
{
	Name: 'First Step',
	Min: 0,
	Value: 5,
	Max: 10
},
{
	Name: 'Point of Attack',
	Min: 0,
	Value: 5,
	Max: 10
},
{
	Name: 'Hand Quickness',
	Min: 0,
	Value: 5,
	Max: 10
},
{
	Name: 'Closing Speed',
	Min: 0,
	Value: 5,
	Max: 10
}
];

var _reps = {
	Pushups: 0,
	Situps: 0,
	Sprints: 0,
	Benchpresses: 0,
	Squats: 0,
	Deadlifts: 0,
	Cleans: 0
};

var _achievements = [
{
	Name: 'Pushup1',
	RepsNeeded: 1,
	Achieved: false
},
{
	Name: 'Pushup10',
	RepsNeeded: 10,
	Achieved: false
},
{
	Name: 'Pushup100',
	RepsNeeded: 100,
	Achieved: false
},
{
	Name: 'Situp1',
	RepsNeeded: 1,
	Achieved: false
},
{
	Name: 'Situp10',
	RepsNeeded: 10,
	Achieved: false
},
{
	Name: 'Situp100',
	RepsNeeded: 100,
	Achieved: false
},
{
	Name: 'Sprint1',
	RepsNeeded: 1,
	Achieved: false
},
{
	Name: 'Sprint10',
	RepsNeeded: 10,
	Achieved: false
},
{
	Name: 'Sprint100',
	RepsNeeded: 100,
	Achieved: false
}];

var _player = {
		Created: false,
		Name: 'Trent',
		HeightFeet: 6,
		HeightInches: 6,
		Weight: 290,
		Position: 'OL',
		Energy: 50,
		MaxEnergy: 100
	};

_player.Skills = _skills;
_player.Reps = _reps;

var app = angular.module('compositeClicker', []);

app.controller('GameController', function()
{	
	this.states = _gameState;
	this.indexes = {};
	for( var i = 0; i < this.states.length; i++)
	{
		this.indexes[this.states[i].name] = i;
		if (this.states[i].initial)
		{
			this.currentState = this.states[i];
		}
	}
	
	this.consumeEvent = function(e)
	{
		if(this.currentState.events[e])
		{
			this.currentState = this.states[this.indexes[this.currentState.events[e]]];
		}
	}
	
	this.getStatus = function()
	{
		return this.currentState.name;
	}
	
	//Keep the variables encapsulated like this
	this.inState = function(stateName)
	{
		return this.currentState.name == stateName;
	};	
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