import React from "react";
import Flip, { FlipProps } from "../components/flip.tsx";
import PageTitle from "../components/page_title.tsx";
// import AgileModel from "../components/agileModel.tsx";
import MediumPosts from "../components/mediumPost.tsx";
import AgileModel from "../components/agileModel.tsx";

const Feedback: FlipProps[] = [
  {
    title: "Client",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the caard's conte",
    name: "Ronald Red",
    profession: "UX Designer",
  },
  {
    title: "Friends",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the caard's conte",
    name: "Ronald Yellow",
    profession: "UX Designer",
  },
  {
    title: "Co-worker",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the caard's conte",
    name: "Ronald Green",
    profession: "UX Designer",
  },
];

const About: React.FC = () => {
  return (
    <div>
      <PageTitle title="About" />
      <div className="grid m-4 sm:grid-col-2">
        <div id="my-process" className="grid gap-8 mx-auto my-16 sm:grid-col-1">
          <div className="mx-auto text-2xl font-bold text-center">
            I Complete
            <br />
            Every Step Carefully
          </div>
          <div className="text-xl font-thin text-center">
            These are the words we live by in everything we do. Every story we
            tell, every brand we <br />
            build, and every interaction we create must not only look beautiful.
          </div>
          <br />
        </div>
        <div id="procedure" className="grid gap-16 mx-auto mb-20 sm:grid-cols-3">
          <AgileModel />
        </div>

        <div id="breif" className="grid gap-8 mx-auto my-16 sm:grid-col-1">
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
        <div id="feedback" className="grid gap-8 mx-auto my-16 sm:grid-cols-3">
          {Feedback.map((item,index) => (
            <Flip
            key={index+1}
              title={item.title}
              description={item.description}
              name={item.name}
              profession={item.profession}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
