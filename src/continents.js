import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Continent from './continent';

function Continents(){
	return(
		<Query query = {gql`
			{
				continents{
					code
					name
					countries{
						code
						name
						capital
						languages{
							name
						}
						currency
					}
				}
			}
		`}
		>
			{({loading, error, data})=>{
				if(loading) return <p>Loading...</p>;
				if(error) return <p>Error :(</p>;
				return data.continents.map((currentContinent)=>(
					<Continent continent={currentContinent}/>
				));
			}}
		</Query>
	);
}

export default Continents;