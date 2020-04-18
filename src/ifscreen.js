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

let config = {
	case1 : "scwidth >= 1000", //scwidth init  >= 1000px
	case2 : "scwidth >= 801 && scwidth <= 999", //scwidth init  >= 801px && <= 999px
	case3 : "scwidth >= 650 && scwidth <= 800", //scwidth init  >= 650px && <= 800px
	case4 : "scwidth <= 649" //scwidth init  <= 649px
}


//When your use the IfScreen component, you don't have define "()" in functions only if the functions to execute are not a component JSX. Example: logic functions. Yet, if you want to define a JSX component, you have to write "()"
