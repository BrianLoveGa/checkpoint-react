import React, { Component } from 'react';
import loonies from '../../../contacts.json';
import { Link } from 'react-router-dom';

export default class ContactList extends Component {
	render() {
		let toons = loonies.map((toon, i) => {
			return (
				<div className="contact-list">
					<div key={i}>
						{toon.name}
						{toon.email}
						<Link to={`/{toon.name}`}>
							<img
								src={toon.image}
								alt={toon.name}
								style={{ width: 200, height: 200 }}
							></img>
						</Link>
					</div>
				</div>
			);
		});
	}
}
