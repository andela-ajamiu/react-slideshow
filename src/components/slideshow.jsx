import React from 'react';
import RightArrow from './rightarrow.jsx'
import LeftArrow from './leftarrow.jsx'

export default class Slideshow extends React.Component {
	constructor() {
		super();
		// this.state = {slideCount: 0}
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		this.showSlides = this.showSlides.bind(this);
}

 

 nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
  }
  

showSlides(n) {
	let slideCount = 0;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
	this.setState({ slideCount: 0 })
  }
  if (n < slides.length) {
  	this.setState({ slideCount: 0 })
    slideCount = slides.length - 1
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideCount].style.display = "block";
  dots[slideCount].className = "active";
}



		render() {
			
		return (
		
<div>
	<div className="slideshow-container">
		  <div className="mySlides fade">
		    <div className="numbertext">1 / 3</div>
		    <img src="./img/DSC_0312.jpg" className="slide-img" />
		    <div className="text">Caption Text</div>
		  </div>

		  <div className="mySlides fade">
		    <div className="numbertext">2 / 3</div>
		    <img src="./img/IMG_0239.JPG" className="slide-img" />
		    <div className="text">Caption Two</div>
		  </div>

		  <div className="mySlides fade">
		    <div className="numbertext">3 / 3</div>
		    <img src="./img/IMG_0828.JPG" className="slide-img" />
		    <div className="text">Caption Three</div>
		  </div>

		  <LeftArrow />
		  <RightArrow />
	</div>
	<br />

	<div className="slideshow-dot">

	  <span className="dot" onClick='currentSlide(1)'></span> 
	  <span className="dot" onClick='currentSlide(2)'></span> 
	  <span className="dot" onClick='currentSlide(3)'></span>

	</div>
	
</div>

			);
		

	}
}
