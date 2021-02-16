
import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


function Dogresponse({ response }) {
  return (
    <div data-testid="response">
      <ReactJson src={response} />
    </div>
  );
}
Dogresponse.propTypes = {
  response: PropTypes.oneOfType([
    PropTypes.arrayOf,
    PropTypes.object
  ])
};

export default Dogresponse;

