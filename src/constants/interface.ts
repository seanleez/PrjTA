import React from "react";

export interface IRoute {
  path: string;
  component: React.FC;
}

export type TDialog = "error" | "warning" | "success";
