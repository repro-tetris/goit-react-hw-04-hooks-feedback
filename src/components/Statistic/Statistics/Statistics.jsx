import PropTypes from "prop-types";

import { StatisticItem } from "../../Statistic";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticItem title="Good" value={good} />
      <StatisticItem title="Neutral" value={neutral} />
      <StatisticItem title="Bad" value={bad} />
      <StatisticItem title="Total" value={total} />
      <StatisticItem title="Positive feedback" value={positivePercentage} />
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
