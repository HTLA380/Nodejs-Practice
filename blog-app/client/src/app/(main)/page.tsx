import React from "react";
import LandingSection from "@/containers/home-page/landing-section";
import RecentBlogSection from "@/containers/home-page/recent-blog-section";
import AllBlogsSection from "@/containers/home-page/all-blogs-section";

const Home = () => {
  return (
    <main className="px-5">
      <LandingSection />
      <RecentBlogSection />
      <AllBlogsSection />
    </main>
  );
};

export default Home;
