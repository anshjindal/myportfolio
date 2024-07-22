import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Welcome to my portfolio! I am <strong>Ansh Jindal</strong>, a passionate and highly motivated Full Stack Web Developer with a strong foundation in the MERN stack and extensive experience in creating cutting-edge web applications. My journey in web development has been marked by a relentless pursuit of excellence, driven by a passion for crafting seamless user experiences, optimizing cross-platform performance, and ensuring fast load times. My professional experience includes key roles at Reknowledging Inc. and Jhajharia Nirman Ltd., where I developed reusable React components, led website development initiatives, and collaborated closely with UI/UX designers to refine user journeys.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            In addition to my professional achievements, I am currently pursuing a Master of Science in Project Management with a minor in IT at Northeastern University, Toronto. My academic background has further enhanced my technical expertise and project management skills, enabling me to excel in both individual and collaborative environments. As the Executive Director of the Northeastern University Coding Society (NUCS), I lead a dynamic team of developers, organize coding events, and foster a community of tech enthusiasts. My leadership role in NUCS has honed my abilities in team management, communication, and event coordination, all of which are integral to my success as a developer. RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Beyond my academic and professional pursuits, I am dedicated to making a positive impact in the community. As a volunteer at Biosphere Eco City Canada, I contribute to initiatives focused on sustainable development and environmental conservation. This experience has deepened my understanding of the importance of technology in addressing global challenges and has inspired me to integrate sustainable practices into my work. I invite you to explore my portfolio to learn more about my projects, skills, and contributions to the field of web development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
