import React from 'react';
import PropTypes from 'prop-types';
import './SlideListAddButton.less';

const SlideListAddButton = props => (
  <div className="slide-list-button" onClick={props.onAddSlide}>
    <i className="fa fa-plus">+</i>
  </div>
);

SlideListAddButton.propsTypes = {
  onAddSlide: PropTypes.func
};

export default SlideListAddButton;
