import React from "react";
import LandingSection from "./LandingSection";
import RecentBlogSection from "./RecentBlogSection";

const Home = () => {
  return (
    <main className="p-5">
      <LandingSection />
      <div className="mt-10">
        <RecentBlogSection />
      </div>
    </main>
  );
};

export default Home;
