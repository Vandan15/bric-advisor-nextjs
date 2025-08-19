"use client";
import { useEffect } from "react";
import { version } from "../../package.json";

export const AppVersion = () => {
  useEffect(() => {
    console.log("APP_VERSION", version);
  }, []);
  return null;
};
