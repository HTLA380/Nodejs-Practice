import React from "react";
import LandingSection from "./LandingSection";
import RecentBlogSection from "./RecentBlogSection";
import AllBlogsSection from "./AllBlogsSection";

const Home = () => {
  return (
    <main className="p-5">
      <LandingSection />
      <RecentBlogSection />
      <AllBlogsSection />
    </main>
  );
};

export default Home;
