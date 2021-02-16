
import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


function DogAnswer({ answer }) {
  return (
    <div data-testid="answer">
      <ReactJson src={answer} />
    </div>
  );
}
DogAnswer.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.arrayOf,
    PropTypes.object
  ])
};

export default DogAnswer;

