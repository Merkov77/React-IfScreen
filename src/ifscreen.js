import React from 'react';

class IfScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = ({
			playFunction: () => false,
			scwidth : window.screen.availWidth
		})
	}

	Component(scwidth, f, scSpecified){
		this.fn = f; this.scS = scSpecified

		if (eval(this.scS)){ //If screenInit === screenSpecified
			this.setState({
				playFunction: (typeof this.fn === "function") ? this.fn() : this.fn
			})
		}
	}

	componentDidMount(){
		this.Component(this.state.scwidth,this.props.fn, this.props.screen)
		this.state.playFunction()
	}

	componentWillUnmount(){
		this.setState({
			playFunction : ""
		})
	}

	render(){
		return(
			<div>{this.fn}</div>
		)
	}
}

export default IfScreen;

