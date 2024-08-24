import React from "react";
import PageTitle from "../components/page_title.tsx";
import MediumPosts from "../components/mediumPost.tsx";


const Blog: React.FC = () => {
  return (
    <div>
      <PageTitle title="Blog" />
      <div className="grid m-4 sm:grid-col-2">
        <div id="breif" className="grid gap-8 mx-auto sm:grid-col-1">
          <div className="mx-auto text-2xl font-bold text-center">
            Blogs <br/>
           x <br/>
 Knowledge Leaks
          </div>
          <div className="text-xl font-thin text-center">
            Since 2015 I have been a visionary and a reliable software engineer
            artner
            <br /> for world-class brands. These are the words we live by in
            everything we do.
          </div>
        </div>
        
        <div id="posts"  className="grid grid-flow-col auto-cols-[500px] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth p-4 no-scrollbar">
        <MediumPosts />
        </div>
        <div id="posts"  className="grid grid-flow-col auto-cols-[500px] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth p-4 no-scrollbar">
        <MediumPosts />
        </div>
        <div id="breif" className="grid gap-8 mx-auto my-16 sm:grid-col-1">
          <div className="mx-auto text-2xl font-bold text-center">
            Digital Web Products for
            <br /> Amazing Clients
          </div>
          <div className="text-xl font-thin text-center">
            Since 2015 I have been a visionary and a reliable software engineer
            artner
            <br /> for world-class brands. These are the words we live by in
            everything we do.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
