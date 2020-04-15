class Terrain {
	name = '';
	imageUrl = '';

	constructor(name, imageUrl) {
		this.name = name;
		this.imageUrl = imageUrl;
	}
}

var mountains = new Terrain('Mountains', '/images/mountains.png');
var grasslands = new Terrain('Grasslands', '/images/grasslands.jpg');
var plains = new Terrain('Plains', '/images/plains.jpg');
var forest = new Terrain('Forest', '/images/forest.jpeg');
var desert = new Terrain('Desert', '/images/desert.jpg');

exports.Mountains = mountains;
exports.Grasslands = grasslands;
exports.Plains = plains;
exports.Forest = forest;
exports.Desert = desert;