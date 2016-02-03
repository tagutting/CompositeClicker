
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

function Player()
{
    this.Name = 'Trent';
    this.HeightFeet = 6;
    this.HeightInches = 6;
    this.Weight = 290;
    this.Position = 'OL';
    this.MinEnergy = 0;
    this.Energy = 75;
    this.MaxEnergy = 100;
    
}
var _player = new Player();

_player.Skills = _skills;