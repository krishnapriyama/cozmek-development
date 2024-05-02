/* eslint-disable react/prop-types */
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterCards = ({ number, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      {({ isVisible: counterVisible }) => (
        <div className="number">
          <CountUp
            start={isVisible ? 0 : null}
            end={counterVisible ? number : null}
            duration={4}
            useEasing={true}
          />
          <span>{title}</span>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default CounterCards;
