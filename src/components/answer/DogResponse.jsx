
import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './DogResponse.css';

function Dogresponse({ response }) {
  return (
    <div data-testid="response" className={styles.DogResponse}>
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

