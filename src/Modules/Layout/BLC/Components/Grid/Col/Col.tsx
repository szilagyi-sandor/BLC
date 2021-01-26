import React, { PropsWithChildren } from "react";

import { concatClassNames } from "../../../_Helpers/concatClassNames";
import { createCommonComponentProps } from "../../../_Helpers/createCommonComponentProps";
import { ColProps } from "./interfaces";
import { capitalizeProp } from "./_Helpers/capitalizeProp";

export default function Col({
  children,
  df,
  sm,
  md,
  lg,
  xl,
  dfOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  classes,
  styles,
}: PropsWithChildren<ColProps>) {
  const _df = df ? df : "equal";
  const className = concatClassNames("col", [
    { className: `dfCol${capitalizeProp(_df)}` },
    { condition: !!sm, className: `smCol${capitalizeProp(sm)}` },
    { condition: !!md, className: `mdCol${capitalizeProp(md)}` },
    { condition: !!lg, className: `lgCol${capitalizeProp(lg)}` },
    { condition: !!xl, className: `xlCol${capitalizeProp(xl)}` },

    { condition: !!dfOffset, className: `dfOffset${dfOffset}` },
    { condition: !!smOffset, className: `smOffset${smOffset}` },
    { condition: !!mdOffset, className: `mdOffset${mdOffset}` },
    { condition: !!lgOffset, className: `lgOffset${lgOffset}` },
    { condition: !!xlOffset, className: `xlOffset${xlOffset}` },
  ]);

  return (
    <div {...createCommonComponentProps(className, classes, styles)}>
      {children}
    </div>
  );
}
