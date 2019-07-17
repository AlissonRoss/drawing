var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


let lastUpdate = 0;
var grd = context.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, getRandomColor());
grd.addColorStop(1, getRandomColor()); 

function resize_canvas() {	
	//Changes resolution of the canvas
	//makes sure that you are rendering at the full size and resolution of your screen (within the browser window)
	canvas.width = window.innerWidth * window.devicePixelRatio;
	canvas.height = window.innerHeight * window.devicePixelRatio;
	centerX = canvas.width / 2.0;
	centerY = canvas.height / 2.0;
	
	
	context.clearRect(0,0,100,100);
	context.font = "20px Arial";
	context.fillText("" + canvas.width + "x" + canvas.height,100,100);
	
	context.lineWidth = canvas.width / 100.0;
}
resize_canvas();

function draw(timestamp) {
	if (timestamp - lastUpdate > 1000) {
		grd = context.createRadialGradient(75, 50, 5, 90, 60, 100);
		grd.addColorStop(0, getRandomColor());
		grd.addColorStop(1, getRandomColor());

		lastUpdate = timestamp;
	}

	context.fillStyle = grd;
	context.fillRect(100,100,100,100); 

	requestAnimationFrame(draw);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

requestAnimationFrame(draw);