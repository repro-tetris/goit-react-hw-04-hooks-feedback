import { useState } from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistic";
import { Notification } from "./components/Notification/Notification";

export default function App() {
  const feedbackCnt = {
    good: useState(0),
    neutral: useState(0),
    bad: useState(0),
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? "%" : Math.round((good * 100) / total) + "%";
  };

  const handleButton = (feedbackEntity) => {
    switch (feedbackEntity) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      default:
        break;
    }
  };

  const total = countTotalFeedback();
  const positiveFeedBackCnt = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={handleButton}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedBackCnt}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
