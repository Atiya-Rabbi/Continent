import Continent from './continents';
import ApolloClient from 'apollo-boost';
import {ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
	uri: "https://countries.trevorblades.com/"
});
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
    		<a className="navbar-brand" href="#">List of Continents</a>
    	</nav>
    	<div>
    		<Continent/>
    	</div>
    </div>
    </ApolloProvider>
  );
}

export default App;
