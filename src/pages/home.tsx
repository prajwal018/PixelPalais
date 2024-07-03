import HelloPrompter from "../components/helloPrompter";
import HeroBoard from "../components/heroBoard";
import ServiceCard from "../components/serviceCard";

import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

const Home: React.FC = () => {
  return (
    <div id="body">
      {/* Define Section */}
      <div
        id="define"
        className="rounded-lg relative h-[300px] w-2/3 mb-[50px] mx-auto bg-emerald-900 back"
      >
        {/* <div className="absolute inset-0"><MapWithMarker /></div> */}
        <HeroBoard />
        <HelloPrompter />
      </div>

      <div id="services" className="m-4 grid gap-4 sm:grid-cols-3">
        <ServiceCard
          title="Web Development"
          text="Creating engaging and responsive websites tailored to your needs."
          link="#services"
        />
        <ServiceCard
          title="Software Development"
          text="Building scalable and efficient software solutions for various applications."
          link="#services"
        />
        <ServiceCard
          title="UX Design"
          text="Designing intuitive and user-friendly interfaces for enhanced user experience."
          link="#services"
        />
      </div>
      <div className="m-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="font-bold text-2xl ">Need a Creative Website?</h3>
          <h3 className="font-semibold text-xl mb-4">I Can Help You!</h3>
          <p className=" text-l mb-2">
            Proactive student eager to contribute to the coding community
            through hard work and dedication to quality. Seeking to use
            exceptional communication skills as a team member/software
            developer. Proficiency in Python, Java, Data Structures, and
            Algorithms. Passionate about web development and user experience
            design.
          </p>
          <p className=" text-l mb-2">You Can Follow Me Here:</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/prxjwxl.018/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <BsInstagram className="size-12 p-2" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/prajwal018",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <BsLinkedin className="size-12 p-2" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/prajwal018",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <BsGithub className="size-12 p-2" />
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-gray-100">
          <img
            alt="A beautiful sunset over the mountains"
            src={`./aboutme-pic.png`}
            width="100"
            height="100"
          />
          <h2>Hi There!</h2>
          <p>Learn more about me and my background.</p>
        </div>
      </div>

      <section id="skills">
        <div className="skills-pic text-center">
          <LiteYoutubeEmbed id="Y2jyjfcp1as" />
          <h2>The Best Tedtalk Ever!</h2>
          <p>Learn more about me and my background.</p>
        </div>
        <div className="skills-text text-end">
          <h3>Need a Creative Website?</h3>
          <h3>I Can Help You!</h3>
          <p>
            Proactive student eager to contribute to the coding community
            through hard work and dedication to quality. Seeking to use
            exceptional communication skills as a team member/software
            developer. Proficiency in Python, Java, Data Structures, and
            Algorithms. Passionate about web development and user experience
            design.
          </p>
          <h6>You Can Follow Me Here:</h6>
          <div className="d-flex gap-2 justify-content-center">
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/prxjwxl.018/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="btn btn-instagram"
            >
              <BsInstagram />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/prajwal018",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="btn btn-linkedin"
            >
              <BsLinkedin />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/prajwal018",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="btn btn-github"
            >
              <BsGithub />
            </button>
          </div>
        </div>
      </section>

      <section id="projects">
        <div id="carousel" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                style={{
                  backgroundColor: "#eee",
                  color: "#000",
                  width: "100%",
                  height: "30rem",
                }}
              ></div>
              <div className="carousel-caption">
                <h5>Project 1</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  backgroundColor: "#eee",
                  color: "#000",
                  width: "100%",
                  height: "30rem",
                }}
              ></div>
              <div className="carousel-caption">
                <h5>Project 2</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  backgroundColor: "#eee",
                  color: "#000",
                  width: "100%",
                  height: "30rem",
                }}
              ></div>
              <div className="carousel-caption">
                <h5>Project 3</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
