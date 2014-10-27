function Requirement(action, threshold)
{
    this.action = action;
    this.threshold = threshold;
    this.satisfied = false;
};

Requirement.prototype.evaluate = function()
{
    if (!this.satisfied)
    {
        this.satisfied = this.action.count >= this.threshold;
    }
};

function Achievement(name)
{
    this.name = name;
    this.requirements = [];
    this.achieved = false;
};

Achievement.prototype.evaluate = function ()
{
    if (!this.achieved)
    {
        var satisfied = true;
        for (var req in this.requirements)
        {
            this.requirements[req].evaluate();
            satisfied = satisfied && this.requirements[req].satisfied;
            if (!satisfied)
            {
                break;
            }
        }

        this.achieved = satisfied;
    }
};

function Progression(addition, threshold)
{
    this.addition = addition;
    this.threshold = threshold;

    this.evaluate = function ()
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

    this.trigger = function ()
    {
        this.count += this.amountToEarn;
    };

    this.updateProgress = function ()
    {
        for (pro in this.progressions)
        {
            this.progressions[pro].evaluate();
        }
    };

    this.updateAchievements = function ()
    {
        for (ach in this.achievements)
        {
            this.achievements[ach].evaluate();
        }
    };
}
;

function ActionStateMachine(action)
{
    var sm = this;
    
    this.action = action;

    var _gameState = [];

    this.canTrigger = function ()
    {
        //TODO: Update this to change based on some criteria
        return true;
    };

    this.consumeEvent = function(eventName)
    {
        var hasEvent = false;
        var event = null;
        for (var i in this.currentState.events)
        {
            event = this.currentState.events[i];
            if (event.name === eventName)
            {
                hasEvent = true;
                break;
            }
        }
        if (hasEvent && event !== null)
        {
            //change the state
            this.currentState = event.nextState;
            //execute the function for changing state
            event.func.call();
            //this.currentState = this.states[this.indexes[this.currentState.events[e]]];
        }
        else
        {
            console.warn("Tried consuming " + eventName + " in " + this.currentState);
        }
    };

    this.inState = function(stateName)
    {
        return this.currentState.name === stateName;
    };

    //function called when the action is triggered
    this.triggered = function ()
    {
        console.log("Default trigger function called.");
        action.trigger();
        sm.consumeEvent("stats");
    };

    var updateStats = function ()
    {
        console.log("Default update stats function called.");
        sm.consumeEvent("progress");
    };

    var updateProgress = function ()
    {
        console.log("Default update progress function called.");
        action.updateProgress();
        sm.consumeEvent("achievements");
    };

    var updateAchievements = function ()
    {
        console.log("Default update achievements function called.");
        action.updateAchievements();
        sm.consumeEvent("returnToWaiting");
    };

    var returnToWaiting = function ()
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
    var triggerEvent = new Event('trigger', triggeredState, this.triggered);
    var updateStatsEvent = new Event('stats', updatingStatsState, updateStats);
    var updateProgressEvent = new Event('progress', updatingProgressState, updateProgress);
    var updateAchievementsEvent = new Event('achievements', updatingAchievementsState, updateAchievements);
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

    this.states = _gameState;
    
    for (var i = 0; i < this.states.length; i++)
    {
        //set the current state
        if (this.states[i].initial)
        {
            this.currentState = this.states[i];
        }
    }  
};