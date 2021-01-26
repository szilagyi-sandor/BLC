import React, { PropsWithChildren } from "react";

import { concatClassNames } from "../../../_Helpers/concatClassNames";
import { createCommonComponentProps } from "../../../_Helpers/createCommonComponentProps";

import { RowProps } from "./interfaces";

export default function Row({
  children,
  noGutters,
  classes,
  styles,
}: PropsWithChildren<RowProps>) {
  const className = concatClassNames("row", [
    { condition: !!noGutters, className: "noGutters" },
  ]);

  return (
    <div {...createCommonComponentProps(className, classes, styles)}>
      {children}
    </div>
  );
}
