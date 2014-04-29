function Renderer(canvas,width,height){
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	
	this.canvas.width = width;
	this.canvas.height = height;
	
	console.log(this.canvas);
}

Renderer.prototype.cls = function(x,y,w,h){
	this.context.clearRect(x,y,w,h);
};

Renderer.prototype.drawPoint = function(x,y,r){
	this.context.fillRect(x,y,r,r);
};

Renderer.prototype.drawLine = function(x1,y1,x2,y2){
	//this.context.strokeLine(x1,y1,x2,y2);
	this.context.moveTo(x1,y1);
	this.context.lineTo(x2,y2);
	this.context.stroke();
};