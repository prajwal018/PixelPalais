import React from "react";
import PageTitle from "../components/page_title.tsx";
import Skillset from "../components/skillset.tsx";



const Skills: React.FC = () => {
  return (
    <div>
      <PageTitle title="Skills" />
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
        <div id="procedure" className="grid grid-cols-2 gap-2 mx-auto mb-20 lg:grid-cols-3">
          <Skillset />
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
        
        
      </div>
    </div>
  );
};

export default Skills;
