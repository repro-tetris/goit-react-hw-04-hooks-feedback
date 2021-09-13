import { useState } from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistic";
import { Notification } from "./components/Notification/Notification";

const STATE = {
  VALUE: 0,
  FUNC: 1,
};

export default function App() {
  const feedbackCnt = {
    good: useState(0),
    neutral: useState(0),
    bad: useState(0),
  };

  const [good, neutral, bad] = Object.values(feedbackCnt).map(
    (cnt) => cnt[STATE.VALUE]
  );

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? "%" : Math.round((good * 100) / total) + "%";
  };

  const handleButton = (feedbackEntity) => {
    feedbackCnt[feedbackEntity][STATE.FUNC]((prev) => prev + 1);
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
