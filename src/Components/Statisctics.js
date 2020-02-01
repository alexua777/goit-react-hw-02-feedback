import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good,neutral, bad, total, positivePercentage}) => (
    <>
    <h3>Statistics</h3>
    {total > 0 && (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive Feedback:{good && positivePercentage}</li>
    </ul>
    )}
    </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  
    
};

export default Statistics;