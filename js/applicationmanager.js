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
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);

	this.zoomGraphIn(graphA,2);
	this.renderGraph(graphA);
	*/
	/*
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
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	
	
	this.zoomGraphIn(graphC,1);
	this.renderGraph(graphC);
	*/
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
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	var graphF = graphE.genETN();
	console.log(graphF.edges.length);
	var graphG = graphF.genETN();
	console.log(graphG.edges.length);
	
	
	this.zoomGraphIn(graphB,2);
	this.renderGraph(graphB);
	*/
	
	/*
	// these are graphs which form outer cycles and have connections between longest diagonals
	graphA.addNNodesAsCircle(250,250,200,6);
	
	for(var i = 0; i < graphA.nodes.length/2; i++){
			graphA.addEdge(graphA.nodes[i],graphA.nodes[i+graphA.nodes.length/2]);
	}	
	
	for(var i = 0; i < graphA.nodes.length; i++){
		
			graphA.addEdge(graphA.nodes[i],graphA.nodes[(i+1) % graphA.nodes.length]);
		
	}
	
	console.log(graphA.edges.length);
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);

	
	this.zoomGraphIn(graphB,1);
	this.renderGraph(graphB);
	*/
	
	/*
	// this is the utilities graph of size 6, this graph is isomorphic to the outer cycle and longest
	// diagonals graph
	graphA.addNNodesAsCircle(250,250,200,6);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[5],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[5],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[5],graphA.nodes[3]);


	
	console.log(graphA.edges.length);
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);
	
	this.zoomGraphIn(graphA,1);
	this.renderGraph(graphA);
	*/
	/*
	graphA.addNNodesAsCircle(250,250,200,5);
	graphA.addNNodesAsCircle(250,250,100,5);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[0]);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[6]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[7]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[8]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[9]);
	
	graphA.addEdge(graphA.nodes[5],graphA.nodes[7]);
	graphA.addEdge(graphA.nodes[6],graphA.nodes[8]);
	graphA.addEdge(graphA.nodes[7],graphA.nodes[9]);
	graphA.addEdge(graphA.nodes[8],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[9],graphA.nodes[6]);


	
	console.log(graphA.edges.length);
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);
	
	this.zoomGraphIn(graphB,1);
	this.renderGraph(graphB);
	*/
	/*
	// this is a regular graph that is not the petersen graph or a complete graph
	graphA.addNNodesAsCircle(250,250,200,6);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[5],graphA.nodes[0]);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[5]);

	console.log(graphA.edges.length);
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	console.log("EDGES IN E: " + graphD.calcEdgesInETN());
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);
	
	this.zoomGraphIn(graphC,2);
	this.renderGraph(graphC);
	*/
	
	/*
	graphA.addNNodesAsCircle(250,250,200,8);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[2]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[5],graphA.nodes[6]);
	graphA.addEdge(graphA.nodes[6],graphA.nodes[7]);
	graphA.addEdge(graphA.nodes[7],graphA.nodes[0]);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[6]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[4]);


	console.log(graphA.edges.length);
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	var graphD = graphC.genETN();
	console.log(graphD.edges.length);
	var graphE = graphD.genETN();
	console.log(graphE.edges.length);
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);
	
	this.zoomGraphIn(graphB,1);
	this.renderGraph(graphB);
	*/
	/*
	graphA.addNNodesAsCircle(250,250,200,6);
	
	graphA.addEdge(graphA.nodes[0],graphA.nodes[1]);
	graphA.addEdge(graphA.nodes[3],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[4],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[3]);
	graphA.addEdge(graphA.nodes[0],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[4]);
	graphA.addEdge(graphA.nodes[1],graphA.nodes[5]);
	graphA.addEdge(graphA.nodes[2],graphA.nodes[4]);




	console.log("EDGES: " + graphA.edges.length);
	console.log("DEGREE N*N+1/2 SUM: " + graphA.calcEdgesInETN());
	console.log("--------------------");
	var graphB = graphA.genETN();
	console.log("EDGES: " + graphB.edges.length);
	console.log("DEGREE N*N+1/2 SUM: " + graphB.calcEdgesInETN());
	console.log("--------------------");
	var graphC = graphB.genETN();
	console.log("EDGES: " + graphC.edges.length);
	console.log("DEGREES IN C 2: " + graphC.nodes[4].degree);
	console.log("DEGREE N*N+1/2 SUM: " + graphC.calcEdgesInETN());
	console.log("--------------------");
	var graphD = graphC.genETN();
	console.log("EDGES: " + graphD.edges.length);
	console.log("DEGREE N*N+1/2 SUM: " + graphD.calcEdgesInETN());
	console.log("--------------------");
	var graphE = graphD.genETN();
	console.log("EDGES: " + graphE.edges.length);
	console.log("DEGREE N*N+1/2 SUM: " + graphE.calcEdgesInETN());
	console.log("--------------------");
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);
	//console.log("--------------------");
	
	this.zoomGraphIn(graphA,1);
	this.renderGraph(graphA);
	*/
	
	// the first ETN of this is a complete graph with 5 nodes
	graphA.addNNodesAsCircle(250,250,200,8);
	graphA.addNode(new Node(250,250));

	
	for(var i = 0; i < 8; i++){
		graphA.addEdge(graphA.nodes[8],graphA.nodes[i]);
	}

	

	console.log(graphA.edges.length);
	var graphB = graphA.genETN();
	console.log(graphB.edges.length);
	var graphC = graphB.genETN();
	console.log(graphC.edges.length);
	
	//var graphD = graphC.genETN();
	//console.log(graphD.edges.length);
	//var graphE = graphD.genETN();
	//console.log(graphE.edges.length);
	//var graphF = graphE.genETN();
	//console.log(graphF.edges.length);
	
	this.zoomGraphIn(graphC,2);
	this.renderGraph(graphC);
	
	
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
