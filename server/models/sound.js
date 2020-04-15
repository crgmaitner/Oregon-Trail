class Sound {
	paused = false;
	time = 0.0;
}

exports.Sound = function() {
	return new Sound();
};