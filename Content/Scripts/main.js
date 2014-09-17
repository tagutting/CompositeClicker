$(document).ready(function () {
    $(document)
    
    .on();
    
        
});
(function(){
//Get your angular on down here
var app = angular.module('compositeClicker', []);


app.controller('GameController', function()
{	
	//Keep the variables encapsulated like this
	var _game = {displayTitle: true};	
	this.showTitle = function()
	{
		return _game.displayTitle;
	};
	this.startGame = function()
	{	
		_game.displayTitle ^= true;
	};
});

app.controller('PlayerController', function()
{
	var _player = {
		Name: 'Trent',
		HeightFeet: 6,
		HeightInches: 6,
		Weight: 290
	};
	this.player = _player;
});

})();