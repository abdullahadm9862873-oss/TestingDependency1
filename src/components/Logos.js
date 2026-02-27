import React, { useState, useEffect } from "react";
import "../Css_applied/logoStyles.css";

const Logos = () => {
  // Hover
  const [githubSvgHover, setGithubSvgHover] = useState(false);
  const [linkedInSvgHover, setLinkedInSvgHover] = useState(false);
  const [leetcodeSvgHover, setLeetcodeSvgHover] = useState(false);
  // Clicked
  const [githubSvgClicked, setGithubSvgClicked] = useState(false);
  const [linkedInSvgClicked, setLinkedInSvgClicked] = useState(false);
  const [leetcodeSvgClicked, setLeetcodeSvgClicked] = useState(false);
  const [mailHover, setMailHover] = useState(false);
  const [mailClicked, setMailClicked] = useState(false);

  // Showing Content in transition
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);

  useEffect(() => {
    // For First
    setTimeout(() => {
      setShowFirstContent(true);
    }, 2300);
    // For Second
    setTimeout(() => {
      setShowSecondContent(true);
    }, 2400);
  }, []);

  return (
    <div className="logoScreen1:relative">
      {/*  Logos to show when Screen <= 768 */}
      <div className="ml-12 mr-12 logoScreen1:hidden">
        <div className="pt-7 flex justify-center items-center">
          <div className="w-[38%] flex justify-between mt-0 ml-auto mr-auto mb-[40px] logoScreen2:min-w-[155px]">
            {/* Github SVG */}
            <div className="w-[20px] h-[20px]">
              <a href="https://github.com/Abdullah-9862873" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            {/* LinkedIn SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://www.linkedin.com/in/abdullah-sultan-923883254/"
                aria-label="Linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            {/* LeetCode SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://leetcode.com/u/Abdullah9862873/"
                aria-label="LeetCode"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#a8b2d1"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Logos to show when Screen > 768 */}
      <div
        className={`contentContainer ${
          showFirstContent ? "show" : ""
        } hidden logoScreen1:block fixed bottom-0 left-[15px] bg-transparent`}
      >
        <div className="w-[2.5rem] flex flex-col justify-between items-center pt-[10px]">
          {/* Github SVG */}
          <div
            onClick={() => setGithubSvgClicked(true)}
            onMouseOver={() => setGithubSvgHover(true)}
            onMouseOut={() => setGithubSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a href="https://github.com/Abdullah-9862873" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  githubSvgClicked
                    ? "#64ffda"
                    : githubSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          {/* LinkedIn SVG */}
          <div
            onClick={() => setLinkedInSvgClicked(true)}
            onMouseOver={() => setLinkedInSvgHover(true)}
            onMouseOut={() => setLinkedInSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a
              href="https://www.linkedin.com/in/abdullah-sultan-923883254/"
              aria-label="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  linkedInSvgClicked
                    ? "#64ffda"
                    : linkedInSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-linkedin ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          {/* LeetCode SVG */}
          <div
            onClick={() => setLeetcodeSvgClicked(true)}
            onMouseOver={() => setLeetcodeSvgHover(true)}
            onMouseOut={() => setLeetcodeSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a href="https://leetcode.com/u/Abdullah9862873/" aria-label="LeetCode">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  leetcodeSvgClicked
                    ? "#64ffda"
                    : leetcodeSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                class="feather ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
          </div>
          {/* Straight Line */}
          <div className="h-[7.187rem] border-[1px] border-[#a8b2d1]"></div>
        </div>
      </div>

      {/* Email Id */}
      <div
        className={`contentContainer ${
          showSecondContent ? "show" : ""
        } hidden logoScreen1:block fixed bottom-0 right-[15px]`}
      >
        <div
          onClick={() => setMailClicked(true)}
          onMouseOver={() => setMailHover(true)}
          onMouseOut={() => setMailHover(false)}
          className="w-[2.5rem] flex flex-col justify-between items-center"
        >
          <a
            className={
              mailClicked
                ? "straightLine mt-[20px] mb-[30px] mx-auto text-[12px] font-sans text-[#64ffda] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                : mailHover
                ? "straightLine mt-[20px] mb-[25px] mx-auto text-[12px] font-sans text-[#64ffda] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                : "straightLine my-[20px] mx-auto text-[12px] font-sans text-[#a8b2d1] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
            }
            href="mailto:ag9862873@gmail.com"
          >
            ag9862873@gmail.com
          </a>
          {/* Straight Line */}
          <div className="h-[7.187rem] border-[1px] border-[#a8b2d1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
