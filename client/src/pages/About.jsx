import React from "react";
// import me from '../assets/personal/abundance_transparent_bg.png'

export default function About() {

  const skills = [
    "Java", "HTML", "CSS", "JavaScript", "React", "Angular", "Bootstrap", "Node.js",
    "Docker", "Express", "MongoDB", "Python", "SQL", "Linux", "PHP"
  ]

  return (
    <>
      <div className="container about-page">
        <div className="about-row row gap-3">
          <div className=" col-3 about-card">
            <div className="about-txt about-txt-primary">
              <h4 className="about-heading">Who Am I?</h4>
              Hi, I'm Abundance Esim, a software developer and recent Computer
              Programming graduate. I have experience building web applications,
              particularly using JavaScript, Node.js, Angular and React. Asides
              from these, I'm also proficient in a number of programming
              languages including Java and Python.
            </div>
          </div>
          <div className="col-3 about-card p-4">
            <div className="about-txt about-txt-secondary">
              <h4 className="about-heading">Skills</h4>
              <div className="row gap-1">
                {skills.map((skill) => (
                  <div
                    className="col btn btn-primary github-source-btn mb-1"
                    style={{ width: "35%" }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" col-3 about-card">
            <div className="about-txt about-txt-secondary">
              <h4 className="about-heading">Extra Curricular</h4>
              When I'm not immersed in lines of code, you'll likely find me
              exploring new art mediums, either digitally or traditionally. I
              also really enjoy playing online multiplayer games like Apex
              Legends. I firmly believe in the power of work-life balance, and
              these pursuits keep me energized and inspired.
            </div>
          </div>
          <div className="col-3 about-card mb-2">
            <div className="about-txt about-txt-secondary">
              <h4 className="about-heading">Connect</h4>
              <div>
                If my profile matches the description of someone you'd like to
                join your team, feel free to{" "}
                <span className="about-links">
                  <a href="/contact">connect</a>
                </span>
                , otherwise, you can check out my{" "}
                <span className="about-links">
                  <a href="/projects">projects</a>
                </span>{" "}
                or{" "}
                <span className="about-links">
                  <a href="/artworks">art</a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react'
// import me from '../assets/personal/me.png'

// export default function About() {
//   return (
//     <>
//       <div>
//         <img className="profile-picture" src={me} alt="abundance-esim" />
//       </div>
//       <div className="container">
//         Hi, I'm Abundance Esim, a software developer and recent Computer
//         Programming graduate. I'm Nigerian but currently reside in Canada. I
//         have experience building web applications, particularly using
//         JavaScript, Angular and React. Asides from these, I'm proficient in
//         Java.
//       </div>
//       When I'm not immersed in lines of code, you'll likely find me exploring
//       new art mediums, either digitally or traditionally. I also really enjoy
//       playing online multiplayer games like Apex Legends. I firmly believe in
//       the power of work-life balance, and these pursuits keep me energized and
//       inspired.
//       <div>
//         If my profile matches the description of someone you'd like to join your
//         team, feel free to{" "}
//         <span>
//           <a href="/contact">connect</a>
//         </span>
//         , otherwise, you can check out my{" "}
//         <span>
//           <a href="/projects">projects</a>
//         </span>{" "}
//         or{" "}
//         <span>
//           <a href="/artworks">art.</a>
//         </span>
//       </div>

//       <div class="image-container">
//         <img src={me} alt="Your Image" />
//         <p>Your text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//       </div>

//     </>
//   );
// }
