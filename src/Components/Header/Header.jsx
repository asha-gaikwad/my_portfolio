import React from "react";
import headerCss from "../Header/Header.module.css";
import heroImg from "../../assets/hero.png";
import cvFile from "../../assets/Asha_Gaikwad_CV.pdf"; 

function Header() {
  return (
    <>
      <div className={headerCss.headerWrapper} id="home">
        <div className={headerCss.headerContainer}>
          <img src={heroImg} alt="Hero-img" />
          <h1>
            Hello 👋 I M <span>Asha Gaikwad</span>
          </h1>
          <p>
            Welcome to my portfolio I m <strong>Sr.Front End Developer</strong>{" "}
            Based in India.
            Over 3 Years of Professional Experience
          </p>
          <div className={headerCss.social}>
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/asha-gaikwad-a71522222" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/_asha_gaikwad_/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>
            {/* GitHub */}
            <a 
              href="https://github.com/asha-gaikwad" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>

          {/* Download CV button with link */}
          <a href={cvFile} download="Asha_Gaikwad_CV.pdf">
            <button>
              Download CV
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;


// import React from "react";
// import headerCss from "../Header/Header.module.css";
// import heroImg from "../../assets/hero.png";
// import cvFile from "../../assets/Asha_Gaikwad_CV.pdf"; 

// function Header() {
//   return (
//     <div className={headerCss.headerWrapper} id="home">
//       <div className={headerCss.headerContainer}>
//         <div className={headerCss.infoColumn}>
//           <h1>
//             Hello 👋 I M <span>Asha Gaikwad</span>
//           </h1>
//           <p>
//             Welcome to my portfolio I m <strong>Sr. Front End Developer</strong> <br/>Based in India. Over 3 Years of Professional Experience
//           </p>
//           <div className={headerCss.social}>
//             <a href="https://www.linkedin.com/in/asha-gaikwad-a71522222" target="_blank" rel="noopener noreferrer">
//               <i className="ri-linkedin-line"></i>
//             </a>
//             <a href="https://www.instagram.com/_asha_gaikwad_/" target="_blank" rel="noopener noreferrer">
//               <i className="ri-instagram-line"></i>
//             </a>
//             <a href="https://github.com/asha-gaikwad" target="_blank" rel="noopener noreferrer">
//               <i className="ri-github-line"></i>
//             </a>
//           </div>

//           <a href={cvFile} download="Asha_Gaikwad_CV.pdf">
//             <button>
//               Download CV
//               <span></span><span></span><span></span><span></span>
//             </button>
//           </a>
//         </div>

//         <div className={headerCss.imageColumn}>
//           <img src={heroImg} alt="Hero-img" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

