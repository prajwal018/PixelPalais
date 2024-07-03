/* eslint-disable react/style-prop-object */

import React, { ChangeEvent, FormEvent, useState } from "react";
// import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../components/page_title";

import { BsEnvelopeFill, BsLinkedin, BsTelephoneFill } from "react-icons/bs";

const Contact: React.FC = () => {
  // const history = useHistory();
  const [user, setUser] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const PostData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = user;

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        toast.error("Invalid Inputs");
      } else {
        toast.info("Message Sent");
        setUser({ name: "", email: "", message: "" });
        // history.push("/contact");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div id="contact">
        <PageTitle title="Contact" />
        <div className="content-wrap">
          <section id="quick-support">
            <h2>Quick Support</h2>
            <p style={{ marginBottom: 0 }}>
              These are the words we live by in everything we do. Every story we
              tell, every brand <br />
              we build, and every interaction we create
            </p>
            <div className="myinfo">
              <h5>
                <BsTelephoneFill />
                Phone Me 24/7: <br />
                <div className="small">+918 766 813 856</div>
              </h5>
              <h5>
                <BsEnvelopeFill />
                Email Me 24/7: <br />
                <div className="small">prajwalkuchewar3@gmail.com</div>
              </h5>
              <h5>
                <BsLinkedin />
                Follow Me: <br />
                <div className="small">linkedin.com/in/prajwal018</div>
              </h5>
            </div>
          </section>
          <section id="comment">
            <h2>Get in Touch</h2>
            <form method="POST" onSubmit={PostData}>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                value={user.name}
                onChange={handleInputs}
              />
              <br />
              <br />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                value={user.email}
                onChange={handleInputs}
              />
              <br />
              <br />
              <textarea
                id="message"
                name="message"
                required
                placeholder="Message"
                value={user.message}
                onChange={handleInputs}
              ></textarea>
              <br />
              <br />
              <input type="submit" value="Leave a comment" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
