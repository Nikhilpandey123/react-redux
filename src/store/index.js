import {createStore} from 'redux';

const initialState = {
	counters:[{id:0,count:0}]
}

const reducer = (store = initialState,action)=>{
	console.log('reducer',action,store);
	switch(action.type){
		case 'add' :{
			let id = action.id;
			let temp_obj = {id:id,count:store.counters[id].count+1};
			return {...store,counters:[...store.counters.slice(0,action.id),temp_obj,...store.counters.slice(action.id+1)]}}
		case "minus":{
			let id = action.id;
			let temp_obj = {id:id,count:store.counters[id].count-1};
			return {...store,counters:[...store.counters.slice(0,action.id),temp_obj,...store.counters.slice(action.id+1)]}}
		case 'ADD_COUNTER':{
			let idx = store.counters.length;
			let temp_obj = {id:idx,count:0}
			return {...store,counters:[...store.counters,temp_obj]}
		}
		case 'REMOVE_COUNTER':{
			let idx = store.counters.length;
			if(idx<=0)return store;
			return {...store,counters:[...store.counters.slice(0,idx-1)]}
		}
		default:return store
	}
}

const store  = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;