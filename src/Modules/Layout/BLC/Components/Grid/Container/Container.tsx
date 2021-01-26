import React, { PropsWithChildren } from "react";

import { ContainerProps } from "./interfaces";
import { concatClassNames } from "../../../_Helpers/concatClassNames";
import { createCommonComponentProps } from "../../../_Helpers/createCommonComponentProps";

export default function Container({
  children,
  fullWidth,
  classes,
  styles,
}: PropsWithChildren<ContainerProps>) {
  const className = concatClassNames("container", [
    { condition: !!fullWidth, className: "fullWidth" },
  ]);

  return (
    <div {...createCommonComponentProps(className, classes, styles)}>
      {children}
    </div>
  );
}
