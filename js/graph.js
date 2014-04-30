function Graph(){
	this.edges = [];
	this.nodes = [];
	
}

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.addNNodesAsCircle = function(centerX,centerY,radius,n){
	/*
	Adds n nodes who's x,y coordinates form a circle
	*/
	this.shiftNodes(-centerX,-centerY);
	for(var i = 0; i < n; i++){
		this.nodes.push(new Node(radius*Math.cos(2*i*Math.PI/n),radius*Math.sin(2*i*Math.PI/n)));
	}
	
	this.shiftNodes(centerX,centerY);
	
};

Graph.prototype.shiftNodes = function(x,y){
	// shifts all nodes the given amount in x and y
	for(var i = 0; i < this.nodes.length; i++){
		this.nodes[i].x += x;
		this.nodes[i].y += y;
	}
};

Graph.prototype.addEdge = function(nodeA, nodeB){
	var newEdge;
	if(nodeA== nodeB){
		throw("EDGE NODES CANNOT BE THE SAME");
	}
	
	newEdge = new Edge(nodeA, nodeB);
	
	if(!this.containsEdge(newEdge)){
		this.edges.push(newEdge);
		nodeA.degree++;
		nodeB.degree++;
	} else {
		throw("EDGE ALREADY EXISTED IN GRAPH");
	}
};

Graph.prototype.containsEdge = function(newEdge){
	/*
	Checks if any of the edges in the graph equals the newEdge
	*/
	for(var i = 0; i < this.edges.length; i++){
		if(this.edges[i].equals(newEdge)){
			return true;
		}
	}
	
	return false;
};

Graph.prototype.isomorphic = function(graph){
	/*
	isomorphic means the graphs have the same structure (the same connections between nodes) but it does not mean that the nodes
	of the graphs are equal (for example, two triangles with vertices as nodes are isomorphic but not necessarily equal)
	
	*/

	/* 
	there may be a better algorithm but this initial and naive algorithm 
	computes all permutations of the order of nodes in this.nodes
	and tests, for each permutation, the equality of every edge in "this" - this graph
	 - against "graph" - the other graph
	 
	 has some preliminary tests as optimizations
	*/
	//throw("THIS METHOD IS NOT IMPLEMENTED");
	if(this.nodes.length != graph.nodes.length){
		// both graphs need the same number of nodes
		console.log("NODES DIFFER IN NUMBER");
		return false;
	} else if(this.edges.length != graph.edges.length){
		// both graphs need the same number of edges
		console.log("EDGES DIFFER IN NUMBER");
		return false;
	} else if(!this.bothHaveNodesOfSameDegree(graph)){
		console.log("NODE DEGREES DIFFER");
		return false;
	} else {
		// do o(n!) algorithm
		console.log("EQUALS NOT IMPLEMENTED FULLY")
		
	}
	return true;
};

Graph.prototype.bothHaveNodesOfSameDegree = function(otherGraph){
	/*
	stores local arrays of the nodes for each graphs then sorts them based
	on degree, lowest degree to highest degree, and then runs through both
	arrays comparing each value, returns false if one differs
	
	this is o(n*logn + n)
	*/
	this._sortNodesByDegree(this.nodes); // if don't want to change the order of the original array will have to 
										 // do this.nodes.split and then return from _sortNodesByDegree and store that in a temp
										 // - probably stupid
	this._sortNodesByDegree(otherGraph.nodes);
	
	console.log(this.nodes);
	console.log(otherGraph.nodes);
	
	for(var i = 0; i < this.nodes.length; i++){
		if(this.nodes[i].degree != otherGraph.nodes[i].degree){
			return false;
		}
	}
	
	return true;
};

Graph.prototype._sortNodesByDegree = function(nodes,l,r){
	// quicksort, did this for educational purposes could easily (probably more efficiently 
	// use the javascript sort function with my own comparator

	var length = r - l + 1;
	var starting = isNaN(length);
	var startingIndex = l;
	var left = startingIndex;
	var right = r;
	
	if(starting){
		length = nodes.length;
		startingIndex = 0;
		left = startingIndex;
		right = length - 1;
	}
	
	if(length < 2){
		return
	}
	
	var pivot = nodes[left + Math.floor(length/2)].degree;
	
	while(left <= right){
		while(nodes[left].degree < pivot){
			left++;
		}
		while(nodes[right].degree > pivot){
			right--;
		}
		if(left <= right){
			var temp = nodes[left];
			nodes[left] = nodes[right];
			nodes[right] = temp;
			
			left++;
			right--;
		}
	}
	
	this._sortNodesByDegree(nodes, startingIndex, right);
	this._sortNodesByDegree(nodes, left, startingIndex + length - 1);
};

Graph.prototype.genETN = function(){
	/*
	stands for generate Edge To Nodes graph
	
	returns a graph whose nodes represent the edges of this graph. Nodes have edges between them in the new graph
	if the edges which those nodes represented were adjacent in the old graph
	*/
	
	var newGraph = new Graph();
	
	for(var i = 0; i < this.edges.length; i++){
		var edge = this.edges[i];
		var nodeA = edge.nodeA;
		var nodeB = edge.nodeB;
		
		var avgX = (nodeA.x + nodeB.x)/2;
		var avgY = (nodeA.y + nodeB.y)/2;
				
		newGraph.addNode(new Node(avgX, avgY));
	}
	
	
	/*
	This following segment adds the edges for the new graph. If in the original graph edges are adjacent to the given
	edge, then the given edge and adjacent edges will be represented as nodes in the new graph with edges connecting the nodes for the
	adjacent edges to the node for the given edge.
	*/
	
	/* probably a slow algorithm and could do better
	I think it's o(n^3)
	*/
	for(var i = 0; i < this.edges.length; i++){
		var adjacentEdgeIndices = this._getAdjacentEdgeIndicesToEdge(this.edges[i]);
		for(var j = 0; j < adjacentEdgeIndices.length; j++){
			var newEdge = new Edge(newGraph.nodes[i], newGraph.nodes[adjacentEdgeIndices[j]]);
			if(!newGraph.containsEdge(newEdge)){
				newGraph.edges.push(newEdge);
				newGraph.nodes[i].degree++;
				newGraph.nodes[adjacentEdgeIndices[j]].degree++;
			}
		}
	}
	
	
	
	return newGraph;
};

Graph.prototype.calcEdgesInETN = function(){
	var sum = 0;
	for(var i = 0; i < this.nodes.length; i++){
		sum += this.nodes[i].degree*(this.nodes[i].degree-1)/2;
	}
	return sum;
};

Graph.prototype._getAdjacentEdgeIndicesToEdge = function(baseEdge){
	// returns an array of the indices in the original edge array of the adjacent edges

	var adjacentEdgeIndices = [];
	
	for(var i = 0; i < this.edges.length; i++){
		if(baseEdge.isAdjacentEdge(this.edges[i])){
			adjacentEdgeIndices.push(i);
		}
	}
	
	return adjacentEdgeIndices;
};
Graph.prototype._getAdjacentEdgesToEdge = function(baseEdge){
	var adjacentEdges = [];
	
	for(var i = 0; i < this.edges.length; i++){
		if(baseEdge.isAdjacentEdge(this.edges[i])){
			adjacentEdges.push(this.edges[i]);
		}
	}
	
	return adjacentEdges;
};