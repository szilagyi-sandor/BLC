export const concatClassNames = (
  base?: string,
  additionals?: Array<{
    condition?: boolean;
    className: string;
  }>
) => {
  let output = base ? base : "";

  if (additionals) {
    additionals.forEach((a) => {
      if (a.condition !== false) {
        output += ` ${a.className}`;
      }
    });
  }

  return output;
};
