function ApplicationManager(HTMLActuator,Renderer){
	this.htmlActuator = new HTMLActuator();
	this.renderer = new Renderer(this.htmlActuator.canvas,500,500);
	
	var graphA = new Graph();

	/*
	var graphX = 250;
	var graphY = 250;
	var c1 = 100*Math.cos(2*Math.PI/5);
	var c2 = 100*Math.cos(Math.PI/5);
	var s1 = 100*Math.sin(2*Math.PI/5);
	var s2 = 100*Math.sin(4*Math.PI/5);
	
	console.log(graphX + c1);
	
	graphA.addNode(new Node(graphX+100,graphY));
	graphA.addNode(new Node(graphX + c1,graphY + s1));
	graphA.addNode(new Node(graphX - c1,graphY + s1));
	graphA.addNode(new Node(graphX + c1,graphY - s1));
	graphA.addNode(new Node(graphX - c1,graphY - s1));
	graphA.addNode(new Node(graphX-100,graphY));
	
	

	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[5],graphA.nodes[0]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[4]);
	
	

	console.log(graphA.edges.length);
	var graphB = graphA.generateEdgesAsNodesGraph();
	console.log(graphB.edges.length);
	var graphC = graphB.generateEdgesAsNodesGraph();
	console.log(graphC.edges.length);
	var graphD = graphC.generateEdgesAsNodesGraph();
	console.log(graphD.edges.length);
	var graphE = graphD.generateEdgesAsNodesGraph();
	console.log(graphE.edges.length);

	this.zoomGraphIn(graphA,2);
	this.renderGraph(graphA);
	*/
	
	var graphX = 150;
	var graphY = 150;
	
	graphA.addNode(new Node(graphX+200,graphY+200));
	graphA.addNode(new Node(graphX+200,graphY));
	graphA.addNode(new Node(graphX,graphY));
	graphA.addNode(new Node(graphX,graphY + 200));
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[0]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[2]);
	
	
	console.log(graphA.edges.length);
	var graphB = graphA.generateEdgesAsNodesGraph();
	console.log(graphB.edges.length);
	var graphC = graphB.generateEdgesAsNodesGraph();
	console.log(graphC.edges.length);
	var graphD = graphC.generateEdgesAsNodesGraph();
	console.log(graphD.edges.length);
	var graphE = graphD.generateEdgesAsNodesGraph();
	console.log(graphE.edges.length);
	
	
	this.zoomGraphIn(graphA,2);
	this.renderGraph(graphA);
	
	/*
	var graphX = 200;
	var graphY = 150;
	
	graphA.addNode(new Node(graphX,graphY));
	graphA.addNode(new Node(graphX-100,graphY+100));
	graphA.addNode(new Node(graphX+100,graphY+100));
	graphA.addNode(new Node(graphX+150,graphY+200));
	graphA.addNode(new Node(graphX+50,graphY+200));
	graphA.addNode(new Node(graphX-50,graphY+200));
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[5]);

	
	
	console.log(graphA.edges.length);
	var graphB = graphA.generateEdgesAsNodesGraph();
	console.log(graphB.edges.length);
	var graphC = graphB.generateEdgesAsNodesGraph();
	console.log(graphC.edges.length);
	var graphD = graphC.generateEdgesAsNodesGraph();
	console.log(graphD.edges.length);
	var graphE = graphD.generateEdgesAsNodesGraph();
	console.log(graphE.edges.length);
	var graphF = graphE.generateEdgesAsNodesGraph();
	console.log(graphF.edges.length);
	var graphG = graphF.generateEdgesAsNodesGraph();
	console.log(graphG.edges.length);
	
	
	this.zoomGraphIn(graphB,2);
	this.renderGraph(graphB);
	*/
}

ApplicationManager.prototype.renderGraph = function(graph){
	console.log("YE");
	for(var i = 0; i < graph.nodes.length; i++){
		this.renderer.drawPoint(graph.nodes[i].x,graph.nodes[i].y,5);
	}
	
	for(var i = 0; i < graph.edges.length; i++){
		var edge = graph.edges[i];
		this.renderer.drawLine(edge.nodeA.x,edge.nodeA.y,edge.nodeB.x,edge.nodeB.y);
	}
}

ApplicationManager.prototype.zoomGraphIn = function(graph,coefficient){
	// can later make it the centroid or whichever center is best
	var centerX = 250;
	var centerY = 250;
	
	for(var i = 0; i < graph.nodes.length; i++){
			graph.nodes[i].x -= centerX;
			graph.nodes[i].x *= coefficient;
			graph.nodes[i].x += centerX;
			
			graph.nodes[i].y -= centerY;
			graph.nodes[i].y *= coefficient;
			graph.nodes[i].y += centerY;
	}
};