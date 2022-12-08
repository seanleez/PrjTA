import React from "react";

export interface IRoute {
  path: string;
  component: React.FC;
  layout?: "form";
}

export type TDialog = "error" | "warning" | "success";
