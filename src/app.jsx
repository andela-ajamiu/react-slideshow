import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Coming from './components/coming.jsx';
import Slideshow from './components/slideshow.jsx';
import Footer from './components/footer.jsx';



export default class Content extends React.Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div>
				<Header />
				<Nav />
				<Coming />
				<Slideshow />
				<Footer />
			</div>
			)
	}
	}

const contentNode = document.getElementById('contents');

ReactDOM.render(<Content /> , contentNode);

