import { React, useEffect, useRef, useState } from "react";
import "../Css_applied/otherProjectsStyles.css";

const OtherProjects = () => {
  const [firstBoxGithubSvg, setFirstBoxGithubSvg] = useState(false);

  // Displaying content after show time

  // Title Appear when Displayed
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const refTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTitle) {
      setTimeout(() => {
        setTitleVisible(true);
      }, 200);
    }
  });

  // First Project Appear when Displayed
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [firstProjectVisible, setFirstProjectVisible] = useState(false);
  const refFirstProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleOne(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleOne) {
      setTimeout(() => {
        setFirstProjectVisible(true);
      }, 200);
    }
  });

  // Second Project Appear when Displayed
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [secondProjectVisible, setSecondProjectVisible] = useState(false);
  const refSecondProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTwo(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSecondProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTwo) {
      setTimeout(() => {
        setSecondProjectVisible(true);
      }, 200);
    }
  });

  return (
    <div className="ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]">
      {/* Title Head */}
      <div
        ref={refTitle}
        className={`contentContainer ${
          titleVisible ? "show" : ""
        } py-[6.12rem] flex flex-col justify-center items-center`}
      >
          <div className="text-[#ccd6f6] text-[32px] font-calibri antialiased leading-[1.1] font-semibold">
          Other Projects
        </div>
      </div>
      {/* Project Boxes */}
      <div className={`flex flex-wrap gap-[15px] cursor-default`}>
        {/* First Project Box */}
        <div
          ref={refFirstProject}
          className={`contentContainer otherProjectBox ${
            firstProjectVisible ? "show" : ""
          } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-all duration-250 ease-in-out top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`}
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setFirstBoxGithubSvg(true)}
              onMouseOut={() => setFirstBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Abdullah-9862873/Full_Stack_Ecommerce_Store"
                aria-label="GitHub Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={firstBoxGithubSvg ? "#64ffda" : "currentColor"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%] opScreen33:mt-[35px]">
            Full Stack Ecommerce Site
          </div>
          {/* Description */}
          <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[32%] opScreen6:h-[35%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen33:mt-[25px]">
            This ecommerce site provides a smooth UI/UX with inventory managment
            and payment processing.
          </div>
          {/* Footer */}
          <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
            HTML/CSS, JavaScript, React, Redux, REST_Api
          </div>
        </div>
        {/* Second Project Box */}
        <div
          ref={refSecondProject}
          className={`contentContainer otherProjectBox ${
            secondProjectVisible ? "show" : ""
          } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-all duration-250 ease-in-out top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`}
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]">
              <a
                href="https://github.com/Abdullah-9862873/comsats-internship-portal"
                aria-label="GitHub Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%] opScreen33:mt-[35px]">
            Comsats Internship Portal
          </div>
          {/* Description */}
          <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[32%] opScreen6:h-[35%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen33:mt-[25px]">
            A MERN stack scalable platform for internship applications and management.
          </div>
          {/* Footer */}
          <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
            Mongodb, Express.js, React.js, Node.js
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
