var Counter = React.createClass({
	getInitialState: function(){
		return{"totalTime":60000,"elapsed":0,"interval":1000,"timeLeft":1};
	},
	_startCounter: function(op){
		var context = this;
		if(this.state.timeLeft){
			this.setState({"elapsed":this.state.elapsed+this.state.interval});
			this.setState({"timeLeft":this.state.totalTime-this.state.elapsed});
			setTimeout(this._startCounter,this.state.interval);
		}else{
			this.setState({"timeLeft":1});
			this.setState({"elapsed":0});
		}
	},
	render: function(){
		return(<div>
			<span className="glyphicon glyphicon-play btn-circle" onClick={this._startCounter}></span>
			<div>Total Time: {this.state.totalTime/1000} seconds</div>
			<div>Remaing Time: {this.state.timeLeft ==1 ? 0: (this.state.timeLeft/1000) } seconds</div>
		</div>);
	}
});

export default Counter;