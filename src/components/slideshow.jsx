import React from 'react';
import RightArrow from './rightarrow.jsx';
import LeftArrow from './leftarrow.jsx';
import Image1 from '../img/DSC_0312.jpg';
import Image2 from '../img/IMG_0239.JPG';
import Image3 from '../img/IMG_0828.JPG';

export default class Slideshow extends React.Component {
	constructor() {
		super();
		this.state = {
			slideIndex: 1
		}

		this.slideIndex = 1;
		this.prevSlides = this.prevSlides.bind(this);
		this.nextSlides = this.nextSlides.bind(this);
		this.showSlides = this.showSlides.bind(this);
		this.showSlide1 = this.showSlide1.bind(this);
		this.showSlide2 = this.showSlide2.bind(this);
		this.showSlide3 = this.showSlide3.bind(this);
	}

	componentDidMount() {
		this.showSlides(this.slideIndex);
	}

	prevSlides() {
		this.showSlides(this.slideIndex -= 1);
	}

	nextSlides() {
		this.showSlides(this.slideIndex += 1);
	}

	showSlide1() {
		this.showSlides(this.slideIndex = 1);
	}

	showSlide2() {
		this.showSlides(this.slideIndex = 2);
	}

	showSlide3() {
		this.showSlides(this.slideIndex = 3);
	}

	showSlides(n) {
		console.log('the n', n);
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) { this.slideIndex = 1 }
		if (n < 1) { this.slideIndex = slides.length }
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.slideIndex - 1].style.display = "block";
		dots[this.slideIndex - 1].className += " active";
	}

	renderSlides() {
		return (
			<div>
				<div className="slideshow-container">
					<div className="mySlides fade">
						<div className="numbertext">1 / 3</div>
						<img src={Image1} style={{ width: 716, height: 250 }} />
						<div className="text">Caption Text</div>
					</div>

					<div className="mySlides fade">
						<div className="numbertext">2 / 3</div>
						<img src={Image2} style={{ width: 716, height: 250 }} />
						<div className="text">Caption Two</div>
					</div>

					<div className="mySlides fade">
						<div className="numbertext">3 / 3</div>
						<img src={Image3} style={{ width: 716, height: 250 }} />
						<div className="text">Caption Three</div>
					</div>

					<a className="prev" onClick={this.prevSlides} >&#10094;</a>
					<a className="next" onClick={this.nextSlides} >&#10095;</a>

				</div>
				<br />

				<div style={{ textAlign: "center" }}>
					<span className="dot" onClick={this.showSlide1} ></span>
					<span className="dot" onClick={this.showSlide2} ></span>
					<span className="dot" onClick={this.showSlide3} ></span>
				</div>
			</div>)
	}

	render() {
		return (
			<div>
				{this.renderSlides()}
			</div>
		)
	}
}
