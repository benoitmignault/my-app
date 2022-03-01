import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';

// objet
const user = {
	firstName: 'Kylian',
	lastName: 'Mbappé'
};

function sum(a, b) {
	return a + b;
}

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

// On passe comme premier paramètre dans le ReactDOM
// Second paramètre l'endroit où l'on veut le faire afficher das le fichier HTLM
function getGreeting(user) {
	if (user) {
		return <h1>Bonjour, {formatName(user)} & avec la somme de deux nombre : <p>{sum(3,5)}</p> !</h1>;
	}

	return <h1>Bonjour, Belle Inconnue.</h1>;
}



// doit contenir un seul élément qui sera utiliser dans ReactDOM
// Affichage la somme de deux nombres
const element = (
	<h1>
		Bonjour, {formatName(user)} ! <p>{sum(3,5)}</p>
	</h1>
);

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root2')
);


ReactDOM.render(
	element,
	document.getElementById('root')
);

/*
ReactDOM.render(
	getGreeting(user),
	document.getElementById('root')
);*/

/*
function tick() {
	const element = (
		<div>
			<h1>Bonjour, monde !</h1>
			<h2>Il est {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById('clock'));
}
setInterval(tick, 1000);
*/

//Le moyen le plus simple de définir un composant consiste à écrire une fonction JavaScript :
function Welcome(props) {
  return <h1>Bonjour, {props.name} : {props.surname}</h1>;
}

const element_2 = <Welcome name="Sara" surname="Dolorese" />;
ReactDOM.render(
  element_2,
  document.getElementById('name_div')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
