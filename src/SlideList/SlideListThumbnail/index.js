import React from 'react';
import PropTypes from 'prop-types';
import './SlideListThumbnail.less';

const SlideListThumbnail = props => {
  const { slide, onSlideSelect } = props;
  return (
    <div
      className="slide-thumbnail"
      value={slide.id}
      onClick={e => onSlideSelect(e, slide.id)}>
      <h2>{slide.name}</h2>
    </div>
  );
};

const SlideListThumbnailEmpty = () => <div className="slide-thumbnail-empty" />;

SlideListThumbnail.propTypes = {
  slides: PropTypes.array
};

export { SlideListThumbnail, SlideListThumbnailEmpty };
