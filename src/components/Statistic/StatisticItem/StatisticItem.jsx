import PropTypes from "prop-types";
import { StyledItem } from "./StatisticItem.styled";
export const StatisticItem = ({ title, value }) => {
  return (
    <StyledItem>
      {title}:<span>{value}</span>
    </StyledItem>
  );
};

StatisticItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
