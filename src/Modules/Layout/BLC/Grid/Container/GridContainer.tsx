import React, { PropsWithChildren } from "react";

import { GridContainerProps } from "./interfaces";
import { concatClassNames } from "../../_Helpers/concatClassNames";
import { createCommonComponentProps } from "../../_Helpers/createCommonComponentProps";

export default function GridContainer({
  children,
  fullWidth,
  classes,
  styles,
}: PropsWithChildren<GridContainerProps>) {
  const className = concatClassNames("gridContainer", [
    { condition: !!fullWidth, className: "fullWidth" },
  ]);

  return (
    <div {...createCommonComponentProps(className, classes, styles)}>
      {children}
    </div>
  );
}
