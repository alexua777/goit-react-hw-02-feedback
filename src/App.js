import React, { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions";
import Statistics from "./Components/Statisctics";
import Section from "./Components/Section";


export default class clientFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  static defaultProps = { step: 1 };
  static propTypes = {};

  handleFeedback = feedback => {
    this.setState((prevState, props) => {
      return {
        [feedback]: prevState[feedback] + props.step
      };
    });
  };

  TotalFeedback = () =>  this.state["good"] + this.state["neutral"] + this.state["bad"];


  countPositiveFeedbackPercentage = (positive, totalV) => {
    return (
      Math.round((positive / totalV) * 100) + " %");
    
  };
  
  render() {
    const total = this.TotalFeedback();
    const totalPrec = this.countPositiveFeedbackPercentage(this.state["good"], total);
    console.log(total);
    
    
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options= {Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
          <Statistics
            good={this.state["good"]}
            neutral={this.state["neutral"]}
            bad={this.state["bad"]}
            total={total}
            positivePercentage={totalPrec}
          />
        </Section>
      </div>
    );
  }
}
