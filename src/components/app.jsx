import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Coming from './components/coming.jsx';
import Footer from './components/footer.jsx';

class Content extends React.Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div>
				<Header />``
				<Nav />
				<Coming />
				<Footer />
			</div>
			)
	}
	}

const contentNode = document.getElementById('content');

ReactDOM.render(<Content /> , contentNode);

