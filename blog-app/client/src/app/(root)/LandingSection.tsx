import { Separator } from "@/components/ui/separator";
import React from "react";

const LandingSection = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
      <Separator className="landing_separator" />
      <h1 className="landing_title w-fit font-bold uppercase">Wisdom</h1>
      <Separator className="landing_separator" />
    </div>
  );
};

export default LandingSection;
