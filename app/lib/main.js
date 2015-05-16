'use strict';

var utils = require('./utils')
, domReady = utils.domReady;

var c = createjs;

console.log('Game started : Easel js version : '+c.EaselJS.version);

domReady(function() {
	var stage = new c.Stage('main');

	var group = new c.Container();
	group.x=200;
	group.y=175;
	group.regX=100;
	group.regY=100;
	stage.addChild(group);

	group.on('tick',function (event){
		
		this.rotation-=1;
	})

	//circle 
	var circle = new c.Shape();
	circle.graphics.beginFill('green').drawCircle(0,0,50);
	circle.x=100;
	circle.y=100;
	group.addChild(circle);

	//square
	var circle = new c.Shape();
	circle.graphics.beginFill('orange').drawCircle(0,0,20);
	circle.x=200;
	circle.y=100;
	group.addChild(circle);

	
	//square
	var circle = new c.Shape();
	circle.graphics.beginFill('blue').drawCircle(10,5,20);
	circle.x=250;
	circle.y=150;
	group.addChild(circle);


	c.Ticker.timingMode = c.Ticker.RAF;
	c.Ticker.setFPS(60);
	c.Ticker.addEventListener('tick',function(event) {
		stage.update({
			msg: 'hi',
			num: 20 
		});
	})
	stage.update();
});