import React from "react";
import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { BsChevronRight } from "react-icons/bs";
import Flip from "../components/flip";
import PageTitle from "../components/page_title";

const About: React.FC = () => {
  return (
    <div>
      <PageTitle title="About" />
      <div className="content-wrap">
        <section id="my-process">
          <h3>
            I Complete
            <br />
            Every Step Carefully
          </h3>
          <p>
            These are the words we live by in everything we do. Every story we
            tell, every brand we <br />
            build, and every interaction we create must not only look beautiful.
          </p>
          <br />
          <CRow style={{ marginLeft: "10%" }}>
            <CCol sm={4}>
              <CCard id="process-card" role="process-card">
                <CCardBody id="process-card">
                  <CCardTitle id="process-card">Web Development</CCardTitle>
                  <CCardText id="process-card">this is step 1</CCardText>
                  <a id="process-card" href="# ">
                    <BsChevronRight />
                  </a>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm={4}>
              <CCard id="process-card" role="process-card">
                <CCardBody id="process-card">
                  <CCardTitle id="process-card">Web Development</CCardTitle>
                  <CCardText id="process-card">this is step 4</CCardText>
                  <a id="process-card" href="# ">
                    <BsChevronRight />
                  </a>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow className="bottom" style={{ marginLeft: "10%" }}>
            <CCol sm={4}>
              <CCard id="process-card" role="process-card">
                <CCardBody id="process-card">
                  <CCardTitle id="process-card">Web Development</CCardTitle>
                  <CCardText id="process-card">this is step 3</CCardText>
                  <a id="process-card" href="# ">
                    <BsChevronRight />
                  </a>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm={4}>
              <CCard id="process-card" role="process-card">
                <CCardBody id="process-card">
                  <CCardTitle id="process-card">Web Development</CCardTitle>
                  <CCardText id="process-card">this is step 4</CCardText>
                  <a id="process-card" href="# ">
                    <BsChevronRight />
                  </a>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </section>
        <section id="breif">
          <h3>
            Digital Web Products for
            <br /> Amazing Clients
          </h3>
          <p>
            Since 2015 I have been a visionary and a reliable software engineer
            partner
            <br /> for world-class brands. These are the words we live by in
            everything we do.
          </p>
        </section>
        <section id="feedback">
          <Flip />
          <Flip />
          <Flip />
        </section>
      </div>
    </div>
  );
};

export default About;
