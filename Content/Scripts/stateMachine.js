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
	
	this.indexes = {};
	
	for( var i = 0; i < this.states.length; i++)
	{
		//index the state names
		this.indexes[this.states[i].name] = i;
		//set the current state
		if (this.states[i].initial)
		{
			this.currentState = this.states[i];
		}
	}
	
	this.consumeEvent = function(e)
	{
		var hasEvent = false;
		var event = null;
		for(var i in this.currentState.events)
		{
			event = this.currentState.events[i];
			if(event.name == e)
			{
				hasEvent = true;
				break;
			}
		}
		if(hasEvent && event != null)
		{
			//change the state
			this.currentState = event.nextState;			
			//execute the function for changing state
			event.func.call();
			//this.currentState = this.states[this.indexes[this.currentState.events[e]]];
		}
		else
		{
			console.warn("Tried consuming " + e + " in " + this.currentState);
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
};