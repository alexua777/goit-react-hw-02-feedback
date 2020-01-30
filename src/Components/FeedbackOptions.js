import React from "react";

const FeedbackOptions = ({
  onAddFeedback,
 
}) => (
  <>
   
    <section>
      <button type="button" onClick={() => onAddFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onAddFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onAddFeedback("bad")}>
        Bad
      </button>
    </section>
   
  </>
);

export default FeedbackOptions;
