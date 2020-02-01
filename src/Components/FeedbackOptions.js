import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    <section>
      <button type="button" onClick={() => onLeaveFeedback(options[0])}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[1])}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[2])}>
        Bad
      </button>
    </section>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
