import { CSSProperties } from "react";

export interface CommonComponentProps {
  classes?: Record<string, string>;
  styles?: Record<string, CSSProperties>;
}
