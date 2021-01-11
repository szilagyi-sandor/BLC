import React, { PropsWithChildren } from "react";

import { concatClassNames } from "../../_Helpers/concatClassNames";
import { createCommonComponentProps } from "../../_Helpers/createCommonComponentProps";
import { GridColProps } from "./interfaces";
import { capitalizeProp } from "./_Helpers/capitalizeProp";

export default function GridCol({
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
}: PropsWithChildren<GridColProps>) {
  const _df = df ? df : "equal";
  const className = concatClassNames("gridCol", [
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
