import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import contacts from '../../../contacts.json';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import Contact from '../Contact/Contact';
import NewContact from '../NewContact/NewContact';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: props.contacts
		};
	}

	render() {
		return (
			<div>
				<div className="App">
					<p>app</p>
					<Header />
				</div>
				<div className="main">
					<Switch>
						<Route path="/" component={ContactList} />
						<Route exact path="/new-contact" component={NewContact} />
						<Route exact path="/:name" component={Contact} />

						<Route path="/*" render={() => <Redirect to="/" />} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
