(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("A0AFwQhkAAAAhkIAAoXQAAhkBkAAMAoBAAAQBkAAAABkIAAIXQAABkhkAAg");
	this.shape.setTransform(138.1,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,0,276.2,73.7), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var total=0,i,units=0;
		
		this.calc_mc.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			total=0;
			units=document.getElementById("ip_txt").value;
		/////////////////////////////
		for(i=0;i<units;i++){
				if(i<200){
					total+=3;
				}else if(i>=200 && i<400){
					total+=4.5;
				}else if(i>=400 && i<600){
					total+=6;
				}else if(i>=600 && i<800){
					total+=7.5;
				}else if(i>=800){
					total+=9;
				}
			}
		/////////////////////////////
			this.op_txt.text = total;
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ip_txt = new lib.an_TextInput({'id': 'ip_txt', 'value':'1', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.ip_txt.setTransform(358.8,685.6,2.4,2.4,0,0,0,50,11.1);

	this.op_txt = new cjs.Text("op", "bold 93px 'Times New Roman'");
	this.op_txt.name = "op_txt";
	this.op_txt.textAlign = "center";
	this.op_txt.lineHeight = 105;
	this.op_txt.parent = this;
	this.op_txt.setTransform(360,965.5);

	this.calc_mc = new lib.btn();
	this.calc_mc.parent = this;
	this.calc_mc.setTransform(360.1,828.4,1,1,0,0,0,138.1,36.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhJDOQgOgFgFAAQgPAAgKAXIgPAAIgHiZIAPAAQAUA8AlAeQAjAeAfAAQAWAAAOgNQANgOAAgSQAAgWgNgRQgOgQgvggQhFgvgUgZQgeglAAgtQAAgyAignQAigoBAAAQAhAAAgARQAMAHAIAAQAIAAAGgDQAFgEAKgQIAPAAIAICRIgQAAQgchBgdgXQgegXgdgBQgSAAgNANQgNAMgBARQABAMAIALQAPATBCAtQBDAtAVAfQAVAfAAAoQAAAjgSAiQgRAighASQggASgnAAQgdAAgzgTg");
	this.shape.setTransform(561.3,525.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtEPQgcgXgIgcQgEgPgBhEIAAjlIg2AAIAAgPQA4gpApgtQAogsAdg3IAPAAIAACbIBkAAIAAAtIhkAAIAAEGQAAAkAEALQADAKAIAIQAJAFAHAAQAdABAbguIANALQgkBXhTAAQgnAAgcgWg");
	this.shape_1.setTransform(528,517.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyE7IAAgQQAcgBAOgPQAJgLAAgtIAAj3QAAgtgKgMQgLgNgegCIAAgQICxAAIAAFPQAAAtALANQAKAMAfACIAAAQgAgxjCQgUgVAAgdQAAgdAUgUQAVgVAcAAQAdAAAVAVQAUAUAAAdQAAAdgUAVQgVAUgdAAQgcAAgVgUg");
	this.shape_2.setTransform(499.6,514.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAODbIAAgRQAYgDALgRQAHgLAAgtIAAi8QAAg0gEgOQgEgNgJgIQgKgHgNAAQgmAAghA4IAADiQAAAwAJANQAIAMAZADIAAARIjXAAIAAgRQAagCAMgPQAHgKABgxIAAjvQAAgwgJgMQgJgLgcgEIAAgRICtAAIAAA3QAhgjAcgQQAegRAjAAQAqAAAbAYQAbAWAJAiQAHAaAABKIAACkQAAAxAJAMQAJAMAcADIAAARg");
	this.shape_3.setTransform(460.6,524.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiAEmQg7gdgZguQgYgtAAhNIAAksQAAg1gGgNQgGgNgOgIQgPgIgnABIAAgRIE9AAIAAARIgPAAQgkAAgNAIQgOAHgFANQgGANAAA1IAAEsQAABTANAbQAMAbAdARQAcASArAAQAyAAAjgWQAjgXASgnQARgoAAhiIAAj6QAAgqgJgRQgIgSgNgHQgVgKglAAIAAgRIDVAAIAAARIgNAAQgaAAgRAKQgRALgIAVQgGAOAAAmIAADpQAABsgOAwQgOAwg4ApQg3AohfAAQhQAAgsgVg");
	this.shape_4.setTransform(401.2,516.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhyE0IAAgQQAcgBAOgQQAJgKAAgtIAAm3QAAgsgKgMQgLgNgegCIAAgRICxAAIAAIPQAAAtALAMQAKANAfACIAAAQg");
	this.shape_5.setTransform(331.7,515.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAtDNQgVgRgEgjQhNBFg+AAQgkAAgYgYQgYgYAAgkQAAgwAqgnQAqgnCLhAIAAgqQAAgwgFgNQgGgMgNgKQgPgJgSAAQgdAAgTANQgMAIAAALQAAAKANAOQARATAAATQAAAWgRAQQgQAPgbAAQgdAAgTgRQgTgRAAgYQAAggAageQAZgeAvgQQAugQAyAAQA7AAAkAaQAjAaAKAeQAHATAABEIAACkQAAAdACAIQACAHAFAEQAEAEAGAAQAMAAAMgRIAOALQgXAhgYAQQgYAPgfAAQglAAgUgRgAg9AvQgSAYAAAZQAAAVAPAQQAMAMAUAAQAXAAAdgZIAAiNQg2AfgbAlg");
	this.shape_6.setTransform(296.3,524.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtEPQgcgXgIgcQgEgPgBhEIAAjlIg2AAIAAgPQA4gpApgtQAogsAdg3IAPAAIAACbIBkAAIAAAtIhkAAIAAEGQAAAkAEALQADAKAIAIQAJAFAHAAQAdABAbguIANALQgkBXhTAAQgnAAgcgWg");
	this.shape_7.setTransform(256.7,517.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiSCeQg0hDAAhYQAAhbA1hEQA1hEBcAAQA2AAAwAdQAwAcAZA1QAYA1AAA+QAABaguA8Qg3BKhiAAQhfAAgzhDgAgmiuQgRARgFA0QgFAzAABbQAAAxAGAqQAFAgARARQAQARAVAAQATAAAOgLQASgQAGgcQAJgqAAiDQAAhNgJgdQgJgdgQgNQgMgKgTAAQgXAAgQASg");
	this.shape_8.setTransform(217.6,525.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AihE0IAAgRIAVAAQAbAAAQgJQAMgHAHgPQAEgLAAguIAAnbIgsAAQg+ABgcAaQgnAlgLBEIgRAAIAAinIInAAIAACnIgQAAQgOg6gSgZQgRgZgggPQgRgJgrAAIgtAAIAAHbQAAAvAEALQAFAMAQAKQAPAIAaAAIAVAAIAAARg");
	this.shape_9.setTransform(171.8,515.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AheDKQg3gcgdg1Qgeg1AAg7QAAg/Ahg5QAhg4A4gfQA4gfA+gBQAvAAAzAVQAeAMAIAAQAKAAAIgIQAIgIACgRIANAAIAACZIgNAAQgOg7gnggQgngggxAAQgqAAgiAXQgiAYgPAnQgVAxAAA8QAAA6APAxQAPAwAfAZQAfAZAzAAQAqAAAjgSQAigTAngsIAAAmQgmAngoASQgoAQg1AAQhGAAg3gcg");
	this.shape_10.setTransform(515.7,127.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjLDcIAAgMIAPAAQASAAANgHQAIgEAEgLQAEgIAAghIAAkhQAAgigEgIQgDgJgLgGQgLgGgSAAIgPAAIAAgMIDqAAIAAAMIgTAAQgTAAgLAGQgJAFgFALQgDAIAAAhIAAEYQAAAiAEAJQADAJAMAFQAIADAeAAIAlAAQAjAAAYgNQAXgMARgbQARgaAQg0IANAAIgRCag");
	this.shape_11.setTransform(469.5,127.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVDhIAAgMIAJAAQAZAAALgHQAHgGAAgJQAAgGgCgGIgJgZIgYg2IibAAIgSArQgJAVAAAOQAAASAOAJQAKAGAiACIAAAMIiTAAIAAgMQAYgDAPgRQAPgQAXgyICdlfIAFAAICfFoQAYA0AOANQALALAUABIAAAMgAhpBLICEAAIhBiXg");
	this.shape_12.setTransform(423.7,126.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AheDKQg3gcgdg1Qgeg1AAg7QAAg/Ahg5QAhg4A4gfQA4gfA+gBQAvAAAzAVQAeAMAIAAQAKAAAIgIQAIgIACgRIANAAIAACZIgNAAQgOg7gnggQgngggxAAQgqAAgiAXQgiAYgPAnQgVAxAAA8QAAA6APAxQAPAwAfAZQAfAZAzAAQAqAAAjgSQAigTAngsIAAAmQgmAngoASQgoAQg1AAQhGAAg3gcg");
	this.shape_13.setTransform(375.3,127.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjLDcIAAgMIAPAAQASAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgigEgIQgDgJgLgGQgLgGgSAAIgPAAIAAgMIDqAAIAAAMIgTAAQgTAAgLAGQgJAFgFALQgDAIAAAhIAAEYQAAAiAEAJQADAJAMAFQAIADAeAAIAlAAQAjAAAYgNQAXgMARgbQARgaAQg0IANAAIgRCag");
	this.shape_14.setTransform(316,127.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjLDcIAAgMIAPAAQASAAAMgHQAJgEAFgLQADgIAAghIAAkhQAAgigDgIQgEgJgLgGQgLgGgSAAIgPAAIAAgMIDqAAIAAAMIgUAAQgRAAgMAGQgIAFgGALQgDAIAAAhIAAEYQAAAiAEAJQAEAJALAFQAIADAeAAIAlAAQAjAAAYgNQAXgMARgbQARgaAPg0IAOAAIgRCag");
	this.shape_15.setTransform(271.7,127.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhyDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgigEgIQgDgJgLgGQgLgGgTAAIgOAAIAAgMIDlAAIAAAMIgPAAQgTAAgLAGQgJAFgFALQgDAIAAAhIAAEhQAAAiAEAIQADAJALAGQALAGASAAIAPAAIAAAMg");
	this.shape_16.setTransform(237,127.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjKDcIAAgMQAeAAALgFQALgGAFgJQAEgJAAgkIAAkdQAAgkgEgJQgFgJgLgGQgLgFgeAAIAAgMIDSAAQBMAAAfANQAgANASAbQASAbAAAeQAAAggXAZQgXAZg6APQA/ANAZAVQAkAeAAAvQAAAxgoAhQgxAnhdAAgAgmADIAACOIgBAQQAAARAJAJQAJAJASAAQAZAAAWgLQAWgMALgWQAMgWAAgbQAAgfgOgYQgPgZgZgJQgYgKgtAAIgEAAgAgmjDIAACuQAtAAAWgLQAWgKALgTQAMgTAAgdQAAgdgLgTQgMgTgWgJQgUgKgrAAIgEAAg");
	this.shape_17.setTransform(201.5,127.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah6DcIAAgMIAXAAQATAAALgHQAJgEAFgLQADgIABghIAAhZIhpi7Qgeg4gNgKQgNgKgUAAIAAgMIDSAAIAAAMIgJAAQgTAAgIAFQgHAGgBAGQAAALAaAwIBPCRIBQiEQAdgxAAgQQAAgJgIgGQgLgIgegBIAAgMICHAAIAAAMQgWACgMAKQgQAOgjA9IhfCeIAABrQgBAiAEAIQADAJALAGQALAGARAAIAZAAIAAAMg");
	this.shape_18.setTransform(685.6,47.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhzDcIAAgMIAPAAQATAAAMgHQAIgEAFgLQADgIAAghIAAlTIgfAAQgtAAgUATQgcAagIAxIgMAAIAAh3IGLAAIAAB3IgMAAQgKgpgNgSQgMgTgXgKQgMgGgfAAIggAAIAAFTQgBAiAEAIQAEAJALAGQALAGASAAIAPAAIAAAMg");
	this.shape_19.setTransform(639.4,47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhyDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgigEgIQgDgJgLgGQgLgGgTAAIgOAAIAAgMIDlAAIAAAMIgPAAQgTAAgLAGQgJAFgFALQgDAIAAAhIAAEhQAAAiAEAIQADAJALAGQALAGASAAIAPAAIAAAMg");
	this.shape_20.setTransform(604.3,47.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AheDKQg2gcgfg1Qgdg1AAg7QAAg/Ahg4QAhg5A4gfQA4ggA+AAQAvABAzAUQAeAMAIAAQAKgBAIgHQAIgHACgSIANAAIAACZIgNAAQgOg7gnggQgngggyAAQgpAAghAXQgjAYgQAmQgUAyAAA8QAAA6APAxQAPAxAfAYQAfAZAzAAQAqAAAjgSQAigTAngsIAAAmQgmAngoASQgoARg1AAQhGAAg3gdg");
	this.shape_21.setTransform(566.9,47.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhyDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgigEgIQgDgJgLgGQgLgGgTAAIgOAAIAAgMIDlAAIAAAMIgPAAQgTAAgLAGQgJAFgFALQgDAIAAAhIAAEhQAAAiAEAIQADAJALAGQALAGASAAIAPAAIAAAMg");
	this.shape_22.setTransform(530.4,47.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABiDcIiNjJIgdAAIAAB8QAAAkAFAJQAEAJALAGQALAFAeAAIAAAMIjhAAIAAgMQAfAAALgFQAKgGAEgJQAFgJAAgkIAAkdQAAgkgFgJQgEgJgLgGQgLgFgeAAIAAgMIDNAAQBPAAAlALQAlALAXAeQAYAdgBAoQABAxgkAgQgWATgpAKIBqCVQAWAdAIAHQAOAKARABIAAAMgAhIgDIATAAQAtAAAWgIQAWgIANgWQAMgVAAgjQABgzgYgYQgYgYgzAAIgjAAg");
	this.shape_23.setTransform(494.5,47.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhyDcIAAgMIAOAAQATAAAMgHQAIgEAFgLQAEgIAAghIAAlTIggAAQgtAAgUATQgcAagHAxIgNAAIAAh3IGLAAIAAB3IgMAAQgKgpgNgSQgNgTgVgKQgNgGgfAAIghAAIAAFTQAAAiAEAIQAEAJALAGQAKAGAUAAIAOAAIAAAMg");
	this.shape_24.setTransform(447.3,47.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AheDKQg3gcgeg1Qgdg1AAg7QAAg/Ahg4QAhg5A4gfQA4ggA+AAQAvABAzAUQAeAMAIAAQAKgBAJgHQAHgHACgSIANAAIAACZIgNAAQgOg7gnggQgngggyAAQgpAAghAXQgjAYgQAmQgUAyAAA8QAAA6APAxQAOAxAhAYQAfAZAyAAQAqAAAigSQAjgTAngsIAAAmQglAngoASQgpARg1AAQhGAAg3gdg");
	this.shape_25.setTransform(400.7,47.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjHDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgegCgHQgDgLgJgGQgMgJgWAAIgOAAIAAgMIFvAAIAACCIgMAAQgJgwgRgVQgRgVgggJQgSgGgyAAIgsAAIAACzIAIAAQApAAATgaQATgaAFg0IANAAIAADmIgNAAQgEgmgMgYQgNgYgQgIQgQgIgfAAIAAB8QAAAkADAIQADAIAIAGQAJAFASAAIAaAAQA+AAAlgdQAlgcAQg7IAMAAIgTCMg");
	this.shape_26.setTransform(354.1,47.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjLDcIAAgMIAPAAQASAAAMgHQAJgEAFgLQADgIAAghIAAkhQAAgigDgIQgEgJgLgGQgLgGgSAAIgPAAIAAgMIDqAAIAAAMIgUAAQgRAAgMAGQgIAFgGALQgDAIAAAhIAAEYQAAAiAEAJQADAJAMAFQAIADAeAAIAlAAQAjAAAYgNQAXgMASgbQAQgaAPg0IAOAAIgRCag");
	this.shape_27.setTransform(310,47.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AjHDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgegCgHQgDgLgJgGQgMgJgWAAIgOAAIAAgMIFvAAIAACCIgMAAQgJgwgRgVQgRgVgggJQgSgGgyAAIgsAAIAACzIAIAAQApAAATgaQATgaAFg0IANAAIAADmIgNAAQgEgmgMgYQgNgYgQgIQgQgIgfAAIAAB8QAAAkADAIQADAIAIAGQAJAFASAAIAaAAQA+AAAlgdQAlgcAQg7IAMAAIgTCMg");
	this.shape_28.setTransform(265.3,47.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhyDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgigEgIQgDgJgLgGQgLgGgTAAIgOAAIAAgMIDlAAIAAAMIgPAAQgTAAgLAGQgJAFgFALQgDAIAAAhIAAEhQAAAiAEAIQADAJALAGQALAGASAAIAPAAIAAAMg");
	this.shape_29.setTransform(214.4,47.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQDcIAAgMIAOAAQAUAAALgHQAJgEAEgLQAEgIAAghIAAiJIibAAIAACJQAAAiAEAIQAEAJALAGQALAGASAAIAPAAIAAAMIjnAAIAAgMIAPAAQATAAAMgHQAIgEAFgLQADgIAAghIAAkhQAAgigDgIQgEgJgLgGQgLgGgSAAIgPAAIAAgMIDnAAIAAAMIgPAAQgTAAgMAGQgIAFgFALQgEAIAAAhIAAB9ICbAAIAAh9QAAgigEgIQgDgJgLgGQgLgGgTAAIgOAAIAAgMIDmAAIAAAMIgOAAQgUAAgLAGQgJAFgFALQgDAIAAAhIAAEhQAAAiADAIQAEAJALAGQALAGATAAIAOAAIAAAMg");
	this.shape_30.setTransform(175.6,47.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjLDcIAAgMIAPAAQATAAALgHQAJgEAFgLQADgIAAghIAAkhQAAgigDgIQgEgJgLgGQgLgGgSAAIgPAAIAAgMIDqAAIAAAMIgUAAQgRAAgMAGQgIAFgGALQgDAIAAAhIAAEYQAAAiAEAJQADAJAMAFQAIADAfAAIAkAAQAjAAAXgNQAYgMASgbQAQgaAPg0IAOAAIgRCag");
	this.shape_31.setTransform(127,47.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjHDcIAAgMIAOAAQATAAAMgHQAJgEAEgLQAEgIAAghIAAkhQAAgegCgHQgDgLgJgGQgMgJgWAAIgOAAIAAgMIFvAAIAACCIgMAAQgJgwgRgVQgRgVgggJQgSgGgyAAIgsAAIAACzIAIAAQApAAATgaQATgaAFg0IANAAIAADmIgNAAQgEgmgMgYQgNgYgQgIQgQgIgfAAIAAB8QAAAkADAIQADAIAIAGQAJAFASAAIAaAAQA+AAAlgdQAlgcAQg7IAMAAIgTCMg");
	this.shape_32.setTransform(82.3,47.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjdDcIAAgMIAOAAQATAAALgGQAKgGAFgKQADgHAAgiIAAkhQAAgigEgIQgDgJgLgGQgLgGgTAAIgOAAIAAgMIDFAAQBOAAAwAVQA7AaAfA2QAeA1AABCQAAAvgPAnQgPAngYAaQgYAZgfAQQgeAPgtAIQgVAEgpAAgAg1jCIAAFWQAAAcADAGQACAGAGADQAJAFARAAQA1AAAdglQAngygBhpQABhUgbgzQgVgngigPQgWgJgxAAIgFAAg");
	this.shape_33.setTransform(36,47.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066CC").s().p("Eg4PAPrIAA/VMBwfAAAIAAfVg");
	this.shape_34.setTransform(360,100.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.calc_mc},{t:this.op_txt},{t:this.ip_txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(358,640,724,1070.5);
// library properties:
lib.properties = {
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1545219690467", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1545219690467", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1545219690467", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;