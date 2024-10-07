import React from "react";
import { Link } from "react-router-dom";

export default function About() {

  const skills = [
    "Drupal", "PHP", "SQL", "Java", "HTML", "CSS", "JavaScript", "React", "Angular", "Typescript", "Bootstrap", "Node.js",
    "Docker", "Express", "MongoDB", "Python",  "Linux", "ViM", "Bash","MySQL", "Dart", "Flutter", "Firebase",
    "Apollo"
  ]

  return (
    <>
      <div className="wrapper">
        <div className="container about-page">
          <div className="about-row row gap-3">
            <div className=" col-3 about-card p-4" id="first">
              <div className="about-txt about-txt-primary">
                <h4 className="about-heading">Who Am I?</h4>
                {/* Hi, I'm Abundance Esim, a software developer and Computer
                Programming graduate. I have experience building web
                applications, particularly using JavaScript, Node.js, Angular
                and React. Asides from these, I'm also proficient in a number of
                programming languages including Java, Typescript and Python.  */}
                Hi, I'm Abundance Esim, a full-stack software developer with a strong foundation in
                Computer Programming. I specialize in building dynamic, scalable
                web applications using a range of web technologies such as PHP,
                JavaScript, Node.js, Angular, React and CMS platforms like Drupal. In addition to my
                expertise in web development, I am proficient in multiple
                programming languages, including Python, Java, and TypeScript,
                enabling me to tackle complex software challenges across
                different environments and platforms.
              </div>
            </div>
            <div className="col-3 about-card p-4" id="second">
              <div className="about-txt about-txt-secondary">
                <h4 className="about-heading">Skills</h4>
                <div className="row gap-1">
                  {skills.map((skill) => (
                    <div
                      className="col btn btn-primary github-source-btn mb-1"
                      style={{ width: "35%" }}
                      key={skill.id}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" col-3 about-card p-4" id="third">
              <div className="about-txt about-txt-secondary">
                <h4 className="about-heading">Extracurricular</h4>
                When I'm not immersed in lines of code, you'll likely find me
                exploring new art mediums, either digitally or traditionally. I
                also really enjoy playing online multiplayer games like Apex
                Legends and Call of Duty. I firmly believe in the power of
                work-life balance, and these pursuits keep me energized and
                inspired.
              </div>
            </div>
            <div className="col-3 about-card mb-20 p-4" id="fourth">
              <div className="about-txt about-txt-secondary">
                <h4 className="about-heading">Connect</h4>
                <div>
                  If my profile matches the description of someone you'd like to
                  work with, feel free to connect via{" "}
                  <span className="about-links">
                    <a href="http://www.linkedin.com/in/abundance-esim">
                      LinkedIn
                    </a>
                  </span>{" "}
                  or by{" "}
                  <span className="about-links">
                    <a href="mailto:esimabundance@gmail.com">email</a>
                  </span>
                  , otherwise, you can check out my{" "}
                  <span
                    className="about-links"
                    style={{ display: "inline-block" }}
                  >
                    <Link
                      exact
                      to="/projects"
                      style={{ display: "inline !important" }}
                    >
                      <p>projects</p>
                    </Link>
                  </span>{" "}
                  or{" "}
                  <span
                    className="about-links"
                    style={{ display: "inline-block" }}
                  >
                    <Link
                      exact
                      to="/artworks"
                      style={{ display: "inline !important" }}
                    >
                      <p>art.</p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}