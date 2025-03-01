import { cn } from "@/lib/utils";
import React from "react";

const DashedSeparator = (props) => {
  const {
    className,
    color = "#d4d4d8",
    height = "2px",
    dashLength = "12px",
    gapSize = "6px",
    direction = "horizontal"
  } = props;
  
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className
      )}
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizontal ? "100%" : height,
          height: isHorizontal ? height : "100%",
          backgroundImage: isHorizontal
            ? `linear-gradient(to right, ${color} ${dashLength}, transparent ${dashLength})`
            : `linear-gradient(to bottom, ${color} ${dashLength}, transparent ${dashLength})`,
          backgroundSize: isHorizontal
            ? `${parseInt(dashLength) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dashLength) + parseInt(gapSize)}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default DashedSeparator;