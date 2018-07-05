import React  from 'react';
import { connect } from 'react-redux';
function Counter(props){
	console.log('props_count',props.count)
	return(
		<div>
			<h2>Counter</h2>
			<p>count: {props.count[props.id].count}</p>
			<p>
				<button onClick = {()=>props.onDecrementClick(props.id)}> - </button>
				<button onClick = {()=>props.onIncrementClick(props.id)}> + </button>
			</p>
		</div>
		)
}
function mapStateToProps(state){
	console.log('Counter state',state.counters);
	return {
		count:state.counters
	}
}
function mapDispatchToProps(dispatch){
	console.log('Counter dispatch',dispatch);
	return{
		onIncrementClick:(id)=>{
			const action={type:"add",id:id};
			dispatch(action);
		},
		onDecrementClick:(id)=>{
			const action = {type:"minus",id:id};
			dispatch(action);
		}
	}
}
//console.log('connect',connect(mapStateToProps,mapDispatchToProps));
export default connect(mapStateToProps,mapDispatchToProps)(Counter) ;