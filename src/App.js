import { useState } from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistic";
import { Notification } from "./components/Notification/Notification";

export default function App() {
  const [feedbackCounters, setFeedbackCounters] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const { good, neutral, bad } = feedbackCounters;

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? "%" : Math.round((good * 100) / total) + "%";
  };

  const handleButton = (feedbackEntity) => {
    setFeedbackCounters((prev) => ({
      ...prev,
      [feedbackEntity]: prev[feedbackEntity] + 1,
    }));
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
