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

  TotalFeedback = () => {
    return this.state["good"] + this.state["neutral"] + this.state["bad"];
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round(
        (this.state["good"] /
          (this.state["good"] + this.state["neutral"] + this.state["bad"])) *
          100
      ) + " %"
    );
  };

  render() {
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onAddFeedback={this.handleFeedback} />
          <Statistics
            good={this.state["good"]}
            neutral={this.state["neutral"]}
            bad={this.state["bad"]}
            total={this.TotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
