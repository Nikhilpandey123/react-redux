import React ,{Component} from 'react';

class Api extends Component{
	constructor(){
		super();
		this.state = {
			pictures:[]
		}
	}

	componentDidMount(){
		console.log('Api');
		fetch('https://randomuser.me/api/').then((response)=> response.json()).then((data)=>{
			let pictures = data.results.map((obj)=>{
				return (
					<div>
						<img src = {obj.picture.medium} alt="img can't be displayed"/>
					</div>
					)
			})
			this.setState({pictures:pictures});
		});
	}

	render(){
		return(
			<div>
				{this.state.pictures}
			</div>
			)
	}
}

export default Api ;