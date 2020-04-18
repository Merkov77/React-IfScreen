import React from 'react';
import IfScreen from './ifscreen';

const greeting = (a, b) => { // Logic Functions, no return JSX
	alert("I have been executed")
}

const divNew = () => { // JSX component, return JSX
	return <div className="bg-dark text-light p-3">Hi world</div>
}

const config = {
	case1 : "scwidth >= 1000", //scwidth init  >= 1000px
	case2 : "scwidth >= 801 && scwidth <= 999", //scwidth init  >= 801px && <= 999px
	case3 : "scwidth >= 650 && scwidth <= 800", //scwidth init  >= 650px && <= 800px
	case4 : "scwidth <= 649" //scwidth init  <= 649px
}

const MainApp = (props) => {
	return(
		<div className="container p-4 bg-light">
    
			<IfScreen fn={divNew()} screen={config.case1} />
      
			<IfScreen fn={greeting} screen={config.case1} />
      
			<IfScreen fn={()=>alert("Hi world 2")} screen={config.case2}/>
      
			{console.log((<IfScreen fn={divNew()} screen={config.case1} />).props.fn)}
      
		</div>
	)
}

export default MainApp;
