function Requirement(action, threshold)
{
	this.action = action;
	this.threshold = threshold;
	this.satisfied = false;

	this.evaluate = function()
	{
		if(!this.satisfied)
		{
			this.satisfied = this.action.count >= this.threshold;
		}
	};
};

function Achievement(name)
{
	this.name = name;
	this.requirements = [];
	this.achieved = false;
	
	this.evaluate = function()
	{
		if(!this.achieved)
		{
			var satisfied = true;
			for(req in this.requirements)
			{
				this.requirements[req].evaluate();
				this.satisfied &= this.requirements[req].satisfied;
				if(!this.satisfied)
				{
					break;
				}
			}
			
			this.achieved = satisfied;
		}
	}
}

function Progression(addition, threshold)
{
	this.addition = addition;
	this.threshold = threshold;
	
	this.evaluate = function()
	{
		
	};
};

function Action(name)
{
	this.name = name;
	this.progressions = [];
	this.achievements = [];
	this.count = 0;
	this.amountToEarn = 1;
	
	this.trigger = function()
	{
		this.count += this.amountToEarn;
	};
	
	this.updateProgress = function()
	{
		for(pro in this.progressions)
		{
			this.progressions[pro].evaluate();
		}
	};
	
	this.updateAchievements = function()
	{
		for(ach in this.achievements)
		{
			this.achievements[ach].evaluate();
		}
	};
};

function ActionStateMachine(action)
{
	//this.__proto__ = StateMachine;
	this.action = action;
	
	var _gameState = [];
	
	this.canTrigger = function()
	{
		//TODO: Update this to change based on some criteria
		return true;
	}
	
	//function called when the action is triggered
	var triggered = function()
	{
		console.log("Default trigger function called.");
		this.action.trigger();
		this.consumeEvent("stats");
	};
	
	var updateStats = function()
	{
		console.log("Default update stats function called.");
		this.consumeEvent("progress");
	};
	
	var updateProgress = function()
	{
		console.log("Default update progress function called.");
		this.action.updateProgress();
		this.consumeEvent("achievements");
	};
	
	var updateAchievements = function()
	{
		console.log("Default update achievements function called.");
		this.action.updateAchievements();
		this.consumeEvent("returnToWaiting");
	};
	
	var returnToWaiting =  function()
	{
		console.log("Default returning to waiting function called");
	};
	
	//Set up states
	var waitingState = new State('waiting', true);
	var triggeredState = new State('triggered', false);
	var updatingStatsState = new State('updatingStats', false);
	var updatingProgressState = new State('updatingProgress', false);
	var updatingAchievementsState = new State('updatingAchievements', false);
	
	//Define the events
	var triggerEvent = new Event('trigger', triggeredState, triggered);
	var updateStatsEvent = new Event('stats', updatingStatsState, updateStats);
	var updateProgressEvent = new Event('progress', updatingProgressState, updateProgress);
	var updateAchievementsEvent = new Event('achievements', updateAchievementsEvent, updateAchievements);
	var returnToWaitingEvent = new Event('returnToWaiting', waitingState, returnToWaiting);
	
	//Add the events to each state
	waitingState.events.push(triggerEvent);
	triggeredState.events.push(updateStatsEvent);
	updatingStatsState.events.push(updateProgressEvent);
	updatingProgressState.events.push(updateAchievementsEvent);
	updatingAchievementsState.events.push(returnToWaitingEvent);
	
	//Add the states
	_gameState.push(waitingState);
	_gameState.push(triggeredState);
	_gameState.push(updatingStatsState);
	_gameState.push(updatingProgressState);
	_gameState.push(updatingAchievementsState);

	StateMachine.call(this, _gameState);
};