import React, { PropsWithChildren } from "react";

import { concatClassNames } from "../../_Helpers/concatClassNames";
import { createCommonComponentProps } from "../../_Helpers/createCommonComponentProps";

import { GridRowProps } from "./interfaces";

export default function GridRow({
  children,
  noGutters,
  classes,
  styles,
}: PropsWithChildren<GridRowProps>) {
  const className = concatClassNames("gridRow", [
    { condition: !!noGutters, className: "noGutters" },
  ]);

  return (
    <div {...createCommonComponentProps(className, classes, styles)}>
      {children}
    </div>
  );
}
