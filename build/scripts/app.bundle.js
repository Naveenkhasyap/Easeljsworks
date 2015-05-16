(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./utils":3}],2:[function(require,module,exports){
'use strict'

module.exports = domReady;

function domReady(func) {
	var self = this 
	, args = Array.prototype.slice.call(arguments,1);
	if(isReady.call(this))
		return callFunc();
	else 
		document.addEventListener('readystatechange',callFunc);

	function callFunc () {
		// body...
		document.removeEventListener('readystatechange',callFunc);
		return func.apply(self, args);
	}
}

domReady.isReady = isReady;


function isReady(){
	var readyState = document.readyState;
	return readyState = 'loading'  ? false :readyState;
} 
},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
	domReady: require('./dom_ready')
	
};
},{"./dom_ready":2}]},{},[1]);