import React from "react";

import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-mdi/chevron-left";
import chevronRight from "@iconify/icons-mdi/chevron-right";

import "../style/Slider/SliderControl.scss";

type SliderControlProps = {
  arrowDirection: string;
  onClick: React.MouseEventHandler;
};
const SliderControl: React.FC<SliderControlProps> = ({
  arrowDirection,
  onClick,
}: SliderControlProps) => {
  return (
    <div className={`slider-control ${arrowDirection}`} onClick={onClick}>
      <div className="slider-control-arrow">
        <Icon icon={arrowDirection === "right" ? chevronRight : chevronLeft} />
      </div>
    </div>
  );
};

export default SliderControl;
