import React from 'react';

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

export default Statistics;