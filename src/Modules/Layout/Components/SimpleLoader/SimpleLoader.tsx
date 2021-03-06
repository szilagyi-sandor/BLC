import React from "react";

import "./SimpleLoader.scss";

import { SimpleLoaderProps } from "./interfaces";

export default function SimpleLoader({ loading }: SimpleLoaderProps) {
  return loading !== false ? (
    <div className="simpleLoader">
      <div className="indicator">
        <span className="srOnly">loading</span>
      </div>
    </div>
  ) : null;
}
