
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