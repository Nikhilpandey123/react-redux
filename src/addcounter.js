import React from 'react';
import Counter from './counter';
import {connect} from 'react-redux';
import Api from './component/'


function Addcounter(props){
	console.log("props-addcounter",props.counters);
	return(
		<div>
			<div>{props.counters.map((value,idx)=><Counter store={props.store} id = {idx}/>)}</div>
			<button onClick={props.addCounter}>Add Counter</button>
			<button onClick={props.removeCounter}>Remove Counter</button>
			<Api />
		</div>

		)
}

function mapStateToProps(state){
	console.log('addCounter',state.counters)
	return {
		counters:state.counters
	}
}
function mapDispatchToProps(dispatch){
	return {
		addCounter:()=>{
			const action={type :"ADD_COUNTER"};
			dispatch(action);
		},
		removeCounter:()=>{
			const action = {type:"REMOVE_COUNTER"};
			dispatch(action);
		}

	}
}
//connect is a currying function which takes first 2 arguments for the function which returns another function which takes component as another argument
export default connect(mapStateToProps,mapDispatchToProps)(Addcounter)