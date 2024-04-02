"use client";

import "./style.css";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";
import { notFound } from "next/navigation";

export default function Studio() {
  if (process.env.SANITY_STUDIO_DATASET === "production") {
    // Disabling Sanity studio on produciton website
    return notFound();
  } else {
    return <NextStudio config={config} />;
  }
}
