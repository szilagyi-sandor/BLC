import React, { PropsWithChildren } from "react";

import "./ElementDisplay.scss";

import { ElementDisplayProps } from "./interfaces";
import { createCommonComponentProps } from "Modules/Layout/BLC/_Helpers/createCommonComponentProps";

export default function ElementDisplay({
  element,
  children,
  classes,
  styles,
}: PropsWithChildren<ElementDisplayProps>) {
  return (
    <div {...createCommonComponentProps("elementDisplay", classes, styles)}>
      <code>{element}</code>

      <div {...createCommonComponentProps("elementWrapper", classes, styles)}>
        {children}
      </div>
    </div>
  );
}
