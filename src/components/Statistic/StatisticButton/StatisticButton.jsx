import PropTypes from "prop-types";
import { Button } from "./StatisticButton.styled";

export const StatisticButton = ({ title, onClick }) => {
  return <Button onClick={() => onClick()}>{title}</Button>;
};

StatisticButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
