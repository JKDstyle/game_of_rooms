var read = require("read")
//read(options, callback)

var Room = function(doors, description){
	this.doors = doors;
	this.description = description;
};

var Game = function(){
	this.currentPosition = 0
	this.rooms = [];
};

Game.prototype.addRoom = function(room){
	this.rooms.push(room)
}

Game.prototype.printDescription = function() {
	console.log(this.rooms[this.currentPosition].description);
	this.userChoise();
}


Game.prototype.userChoise = function(){
	options = {
	    prompt: ">"
	};
	// Our options object, the prompt is simply what will appear in the command line when read is called
	read(options, this.process.bind(this));
}

Game.prototype.process = function(err, input){

	if (err) {
		throw err;
	} else {
		this.directionPath(input);
	}
};

Game.prototype.directionPath = function(input){

	if(input === this.rooms[this.currentPosition].doors){ //<----- its the same as [1, {name: "alex", edad: 45} , 3] -> arr[1].name
		console.log("You are outside the building, freak, go inside and take the S way")
		this.userChoise()

	} else if (input === "S") {
		console.log("You are in the attic, take a gun and kill yourself, or chose to go on E or N")
		this.userChoise()
		if(input === "E"){
			console.log(this.rooms[this.currentPosition].doors)

		}

	} else if (input === "E") {
		console.log("You are in the final room")
		this.userChoise()	

	} else{
		console.log("exit")
		this.userChoise	
	}
};
var game = new Game()
var room1 = new Room("N", "Esta es una habitación mu bonita i solo tienes 2 puerta, N o S, decide payaso ")
var room2 = new Room("S", "You are in a dark room. There is a door to the north ")
var room3 = new Room("E", " You are Da BOS")


game.addRoom(room1)
game.addRoom(room2)
game.addRoom(room3)

game.printDescription()
//console.log(room1.description)
//console.log(game.rooms)





