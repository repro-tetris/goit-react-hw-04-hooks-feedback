import PropTypes from "prop-types";

import { StatisticButton } from "../Statistic";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <div>
      {buttons.map((button) => {
        return (
          <StatisticButton
            key={button}
            title={button}
            onClick={() => {
              onLeaveFeedback(button);
            }}
          />
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
