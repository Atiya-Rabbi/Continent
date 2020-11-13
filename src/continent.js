import React, { useState } from 'react';

function Continent(props){
	const items = []
	const [state, setState] = useState(false);
	for (const c of props.continent.countries){
		const lan = []
		items.push(<ul key={c.code}>
				<li>Country- {c.name}</li>
				<li>Capital- {c.capital}</li>
				<li>Currency- {c.currency}</li>
				<li> Languages {lan}</li>
			</ul>)
		for(const l of c.languages){
			lan.push(" - " + l.name)
		}
		
		
	}

	return(
		<center>
			<div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
				<div className="card-body">
					{state ? (
					<button className="card-title" key={props.continent.code} onClick={()=>setState(false)}
					>
					{props.continent.name}</button>
					):(
					<button className="card-title" key={props.continent.code} onClick={()=>setState(true)}
					>
					{props.continent.name}</button>
					)}
					{state ? <h6 className="card-subtitle mb-2 text-muted">{items}</h6>: null}
				</div>
			</div>
		</center>
	);
	
}

export default Continent;