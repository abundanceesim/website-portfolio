import React from 'react'
import me from '../assets/personal/me.png'

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="row">
          <div className=" col profile-img">
            <img className="profile-picture" src={me} alt="abundance-esim" />
          </div>
          <div className="col">
            Hi, I'm Abundance Esim, a software developer and recent Computer
            Programming graduate. I'm Nigerian but reside in Canada. I
            have experience building web applications, particularly using
            JavaScript, Angular and React. Asides from these, I'm proficient in
            Java.
          </div>
        </div>
        When I'm not immersed in lines of code, you'll likely find me exploring
        new art mediums, either digitally or traditionally. I also really enjoy
        playing online multiplayer games like Apex Legends. I firmly believe in
        the power of work-life balance, and these pursuits keep me energized and
        inspired.
        <div>
          If my profile matches the description of someone you'd like to join
          your team, feel free to{" "}
          <span>
            <a href="/contact">connect</a>
          </span>
          , otherwise, you can check out my{" "}
          <span>
            <a href="/projects">projects</a>
          </span>{" "}
          or{" "}
          <span>
            <a href="/artworks">art.</a>
          </span>
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
