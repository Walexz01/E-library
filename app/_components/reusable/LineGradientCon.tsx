import React, { PropsWithChildren } from "react";

const LineGradientCon = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="line">
        <div className="shade"></div>
      </div>
      {children}
      <div className="line">
        <div className="shade"></div>
      </div>
    </>
  );
};

export default LineGradientCon;
