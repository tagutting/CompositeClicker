function Event(name, nextState, func)
{
    this.name = name;
    this.nextState = nextState;
    this.func = func;
};

function State(name, initial)
{
    this.name = name;
    this.initial = initial;
    this.events = [];
};

function StateMachine(states)
{
    this.states = states;
    
    for (var i = 0; i < this.states.length; i++)
    {
        //set the current state
        if (this.states[i].initial)
        {
            this.currentState = this.states[i];
        }
    }    
};

StateMachine.prototype.consumeEvent = function(eventName)
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

StateMachine.prototype.inState = function(stateName)
{
    return this.currentState.name === stateName;
};