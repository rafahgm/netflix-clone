import React from "react";

import Icon from "@iconify/react";
import chevronLeft from "@iconify/react";
import chevronRight from "@iconify/react";

type SliderControlProps = {
  arrowDirection: string;
  onClick: React.MouseEventHandler;
};
const SliderControl: React.FC<SliderControlProps> = ({
  arrowDirection,
  onClick,
}: SliderControlProps) => {
  return (
    <div className={`slider-control ${arrowDirection}`}>
      <div className="slider-control-arrow" onClick={onClick}>
        <Icon icon={arrowDirection === "right" ? chevronRight : chevronLeft} />
      </div>
    </div>
  );
};

export default SliderControl;
