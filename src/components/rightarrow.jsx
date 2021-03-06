import React from 'react';

const RightArrow = (props) => {
	return (
		<a className="next" onClick={() => props.nextSlide(props.slideCount)}>&#10095;</a>
	);
}

export default RightArrow;