import { CSSProperties } from "react";

export const createCommonComponentProps = (
  className: string,
  classes?: Record<string, string>,
  styles?: Record<string, CSSProperties>
): {
  className: string;
  style?: CSSProperties;
} => {
  const output: { className: string; style?: CSSProperties } = {
    className,
  };

  className.split(" ").forEach((ccn) => {
    const additionalClass = classes && classes[ccn];
    const style = styles && styles[ccn];

    if (additionalClass) {
      output.className += ` ${additionalClass}`;
    }

    if (style) {
      output.style = output.style ? { ...output.style, ...style } : style;
    }
  });

  return output;
};
