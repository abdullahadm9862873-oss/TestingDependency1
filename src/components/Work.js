import { React, useEffect, useState, useRef } from "react";
import "../Css_applied/workStyles.css";

const Work = ({ experienceBtnClickedActive }) => {
  // Work
  const [firstWorkClicked, setFirstWorkClicked] = useState(true);
  const [secondWorkClicked, setSecondWorkClicked] = useState(false);
  const [thirdWorkClicked, setThirdWorkClicked] = useState(false);
  const [fourthWorkClicked, setFourthWorkClicked] = useState(false);
  const [fifthWorkClicked, setFifthWorkClicked] = useState(false);
  const [noneWorkClicked, setNoneWorkClicked] = useState(true);
  // Bar
  const [firstBarClicked, setFirstBarClicked] = useState(false);
  const [secondBarClicked, setSecondBarClicked] = useState(false);
  const [thirdBarClicked, setThirdBarClicked] = useState(false);
  const [fourthBarClicked, setFourthBarClicked] = useState(false);
  const [fifthBarClicked, setFifthBarClicked] = useState(false);
  // Mobile active tab index (0-4 for 5 tabs)
  const [mobileActiveTab, setMobileActiveTab] = useState(0);
  // Scroll Left and Right
  const [scrollLeft, setScrollLeft] = useState(0);
  // Hover
  const [firstWorkHover, setFirstWorkHover] = useState(false);
  const [secondWorkHover, setSecondWorkHover] = useState(false);
  const [thirdWorkHover, setThirdWorkHover] = useState(false);
  const [fourthWorkHover, setFourthWorkHover] = useState(false);
  const [fifthWorkHover, setFifthWorkHover] = useState(false);
  // Displaying content after show time
  const workRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setisVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!workRef.current) {
        return;
      }

      const { top, height } = workRef.current.getBoundingClientRect();
      if (top <= 600 && top + height >= 600) {
        setIsVisible(true);
        setTimeout(() => {
          setisVisibleTwo(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [workRef]);

  // For Small Screen
  const yourDiv = document.getElementById("firstDiv");
  function isElementInViewportWithOffset(el, offset = 0) {
    let rect = el.getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let topInView = rect.top + offset >= 0 && rect.top + offset <= windowHeight;

    return topInView;
  }

  window.addEventListener("scroll", function () {
    let element = document.getElementById("title");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  window.addEventListener("scroll", function () {
    let element = document.getElementById("body");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  //__________________________________________________________

  const handleScroll = (event) => {
    setScrollLeft(event.target.scrollLeft);
  };

  const borderBottomStyle = {
    position: "absolute",
    bottom: 0,
    left: secondBarClicked
      ? "134.7px"
      : thirdBarClicked
      ? "221px"
      : fourthBarClicked
      ? "307.842px"
      : fifthBarClicked
      ? "394px"
      : "0px",
    width: firstBarClicked
      ? `calc(134.7px + ${scrollLeft}px)`
      : secondBarClicked
      ? `86.3px`
      : thirdBarClicked
      ? `86.842px`
      : fourthBarClicked
      ? `118px`
      : fifthBarClicked
      ? `149px`
      : `calc(134.7px + ${scrollLeft}px)`,
    height: "2px",
    backgroundColor: "#64ffda",
    transform: firstBarClicked
      ? `translateX(-${scrollLeft}px)`
      : secondBarClicked
      ? null
      : thirdBarClicked
      ? null
      : fourthBarClicked
      ? null
      : fifthBarClicked
      ? null
      : `translateX(-${scrollLeft}px)`,
    transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  const handleFirstWorkClicked = () => {
    setFirstWorkClicked(true);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    setFifthWorkClicked(false);
    setMobileActiveTab(0);
    handleFirstBarClicked();
  };
  const handleSecondWorkClicked = () => {
    setSecondWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    setFifthWorkClicked(false);
    setMobileActiveTab(1);
    handleSecondBarClicked();
  };
  const handleThirdWorkClicked = () => {
    setThirdWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setSecondWorkClicked(false);
    setFourthWorkClicked(false);
    setFifthWorkClicked(false);
    setMobileActiveTab(2);
    handleThirdBarClicked();
  };
  const handleFourthWorkClicked = () => {
    setFourthWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFifthWorkClicked(false);
    setMobileActiveTab(3);
    handleFourthBarClicked();
  };
  const handleFifthWorkClicked = () => {
    setFifthWorkClicked(true);
    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    setMobileActiveTab(4);
    handleFifthBarClicked();
  };
  const handleFirstBarClicked = () => {
    setFirstBarClicked(true);
    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleSecondBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(true);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleThirdBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(false);
    setThirdBarClicked(true);
    setFourthBarClicked(false);
  };
  const handleFourthBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(true);
    setFifthBarClicked(false);
  };
  const handleFifthBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
    setFifthBarClicked(true);
  };

  useEffect(() => {
    setFirstBarClicked(true);
    setMobileActiveTab(0);
  }, []);

  // Handling when click on Experience happens on the Navbar
  const [experienceNavClick, setExperienceNavClick] = useState(false);
  useEffect(() => {
    setExperienceNavClick(experienceBtnClickedActive);
  }, [experienceBtnClickedActive]);

  useEffect(() => {
    if (experienceNavClick) {
      var el = document.querySelector("#EXPERIENCEDIV");
      var start = window.pageYOffset;
      var end = el.offsetTop;
      var duration = 1000;
      var easing = function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var startTime = null;

      function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = easing(timeElapsed / duration);
        window.scroll(0, start + (end - start) * progress);
        if (timeElapsed < duration) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
  }, [experienceNavClick]);
  return (
    <div id="EXPERIENCEDIV" ref={workRef}>
      <div className="mr-12 ml-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]">
        {/* Header Section */}
        <div
          id="title"
          className={`contentContainer ${
            isVisible ? "show" : ""
          } pt-[5.538rem] relative`}
        >
          <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
            02.
          </div>{" "}
          <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
            Where I've Worked
            <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen9:hidden"></div>
          </div>
          <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen9:hidden workScreen6:left-[305px] workScreen7:w-[22rem]"></div>
        </div>
        {/* When screen > 500px */}
        <div
          className={`contentContainer ${
            isVisibleTwo ? "show" : ""
          } block workScreen1:hidden`}
        >
            <div className="flex">
            {/* Left Side */}
            <div className="w-[20%] myScreen1:w-[8rem] workScreen10:w-[25.5%]">
              <div className="h-[12.8rem] relative border-l-[1px] border-l-[#8892b0] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay">
                <div
                  className={
                    firstBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute top-0 border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : secondBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[2.2rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : thirdBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[4.9rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : fourthBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[7.6rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : fifthBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[10.3rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                  }
                ></div>
                {/* iCodeGuru */}
                <div
                  onMouseOver={() => setFirstWorkHover(true)}
                  onMouseOut={() => setFirstWorkHover(false)}
                  onClick={handleFirstWorkClicked}
                  className={
                    firstWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  iCodeGuru 
                </div>
                {/* Sinohydro */}
                <div
                  onMouseOver={() => setSecondWorkHover(true)}
                  onMouseOut={() => setSecondWorkHover(false)}
                  onClick={handleSecondWorkClicked}
                  className={
                    secondWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : secondWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Sinohydro 
                </div>
                {/* Gigalabs */}
                <div
                  onMouseOver={() => setThirdWorkHover(true)}
                  onMouseOut={() => setThirdWorkHover(false)}
                  onClick={handleThirdWorkClicked}
                  className={
                    thirdWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : thirdWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Gigalabs
                </div>
                {/* MansolHab */}
                <div
                  onMouseOver={() => setFourthWorkHover(true)}
                  onMouseOut={() => setFourthWorkHover(false)}
                  onClick={handleFourthWorkClicked}
                  className={
                    fourthWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : fourthWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  MansolHab
                </div>
                {/* SevenOvn */}
                <div
                  onMouseOver={() => setFifthWorkHover(true)}
                  onMouseOut={() => setFifthWorkHover(false)}
                  onClick={handleFifthWorkClicked}
                  className={
                    fifthWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : fifthWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  SevenOvn
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="ml-[10%] w-[70%] relative workScreen10:w-[70%] workScreen10:ml-[4.5%]">
              {/* First One */}
              {(firstWorkClicked || noneWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  {/* For firstWork */}
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Trainer{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="#"
                          className="viewArchive"
                        >
                          iCodeGuru
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Feb 2026 - present · Silicon Valley USA (Remote)
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        As a Python Trainer at iCodeGuru, I mentor aspiring developers in mastering Data Structures & Algorithms with a strong focus on problem-solving patterns and interview readiness.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Teaching Python for Data Structures & Algorithms (DSA)
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Breaking down complex problems into structured, pattern-based solutions
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Training students on how to approach coding interview questions strategically
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Guiding learners in analyzing Time and Space Complexity (Big-O analysis)
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Conducting live coding sessions and mock interview practices
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Second One */}
              {secondWorkClicked && (
                <div className="blink_me">
                  {/* For secondWork */}
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                    Tech Lead – AI Safety Systems{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a href="#" className="viewArchive">
                      Sinohydro Corporation
                      </a>
                    </span>
                  </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Feb 2025 - Jan 2026 · Jubail, Saudi Arabia (On-site)
                    </div>

                  <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Initially hired as a Work Permit Receiver (WPR) in the HSE department, promoted to Tech Lead supporting Site Command Center security team.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Improved automated computer vision surveillance systems aligned with Aramco Safety Standards.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Enhanced AI camera logical reasoning and rule-based detection mechanisms to proactively identify safety violations.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Engineered automated evidence capture workflows with geo-location tagging, time-stamped logging, and automatic escalation.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Completed internationally recognized HSE certifications including NEBOSH, IOSH, and OSHA.
                    </div>
                  </div>
                </div>
              )}
              {/* Third One */}
              {thirdWorkClicked && (
                <div className="blink_me">
                  {/* For thirdWork */}
                  <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                    Associate Software Engineer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a href="#" className="viewArchive">
                        Gigalabs Pvt Ltd
                      </a>
                    </span>
                  </div>
                  <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                    Mar 2024 - Nov 2024 · JoharTown, Lahore, Pakistan (On-site)
                  </div>

                  <div className="pt-[1.5rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Collaborated with senior developers to deliver quality software solutions.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Developed and tested features for web and backend systems.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Debugged and resolved technical issues efficiently.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Learned and adapted to new tools, frameworks, and industry practices.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Participated in daily standups, code reviews, and Agile sprints.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Documented project workflows and coding practices.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Contributed ideas for product improvements and innovation.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Supported team efforts in meeting project deadlines.
                    </div>
                  </div>
                </div>
              )}
              {/* Fourth One */}
              {fourthWorkClicked && (
                <div className="blink_me">
                  {/* For fourthWork */}
                  <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                    Web Dev Trainer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a className="viewArchive">MansolHab</a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                    Oct 2023 - Jan 2024 · Sheikhupura, Punjab Pakistan (On-site)
                  </div>
                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Designed and delivered a structured curriculum covering HTML, CSS, JavaScript, React, Node.js, and databases.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Conducted interactive sessions, live coding demonstrations, and project-based learning.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Provided personalized mentorship, debugging support, and industry insights.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Organized group projects and coding challenges, fostering collaboration and problem-solving.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Prepared students for competitive environments, guiding them through a successful hackathon organized by PSDF.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Successfully trained 30-40 students in web development from scratch.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Led students to win a hackathon organized by PSDF, Punjab Skills Development Fund, Pakistan.
                    </div>
                  </div>
                </div>
              )}
              {/* Fifth One */}
              {fifthWorkClicked && (
                <div className="blink_me">
                  {/* For fifthWork */}
                  <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                    Full Stack Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a href="https://sevenovn.com/" className="viewArchive">SevenOvn</a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                    Sept 2022 - Aug 2023 · JoharTown, Lahore, Pakistan (Hybrid)
                  </div>
                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Engaged with clients to understand their business needs and technical requirements.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Designed and documented system workflows to ensure clarity in project scope and execution.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Collaborated with two partners to manage and deliver the front-end of projects.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Handled the integration of various APIs to ensure smooth communication between front-end and back-end.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      After six months, transitioned into a full-stack role, mentoring new interns.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Promoted to supervise the full-stack development team, overseeing development process and troubleshooting errors.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* When Screen <= 600px */}
      <div id="body" className={`contentContainer hidden workScreen1:block`}>
        <div className="flex flex-col">
          {/* First Upper Side When the screen < 425 i-e when it has scroll bar*/}
          <div className="hidden workScreen9:block">
            <div className="relative rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay ">
              {/* Companies Names*/}
              <div className="flex">
                <div
                  onScroll={handleScroll}
                  className="flex smallScreenWorkWidth mb-[30px] border-b-[2px] border-[#303c55] z-0 overflow-x-scroll relative"
                >
                  {/* iCodeGuru */}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    iCodeGuru
                  </div>
                  {/* Sinohydro */}
                  <div
                    onClick={handleSecondWorkClicked}
                    className={
                      secondWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Sinohydro
                  </div>
                  {/* Gigalabs */}
                  <div
                    onClick={handleThirdWorkClicked}
                    className={
                      thirdWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Gigalabs
                  </div>
                  {/* MansolHab */}
                  <div
                    onClick={handleFourthWorkClicked}
                    className={
                      fourthWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    MansolHab
                  </div>
                  {/* SevenOvn */}
                  <div
                    onClick={handleFifthWorkClicked}
                    className={
                      fifthWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    SevenOvn
                  </div>
                  {/* Mobile underline - slides under active tab */}
                  <div 
                    className="absolute bottom-0 h-[3px] bg-[#64ffda] transition-all duration-300 ease-in-out workScreen9:hidden"
                    style={{
                      left: `${mobileActiveTab * 20}%`,
                      width: 'calc(20% - 2px)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* First Upper Side When the screen >= 425 i-e when it has no scroll bar*/}
          <div className="hidden workScreen8:flex items-center justify-center">
            <div className="relative rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay ">
              {/* Companies Names*/}
              <div className="flex">
                <div className="flex mb-[30px] border-b-[2px] border-[#303c55] z-0 relative">
                  {/* iCodeGuru */}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    iCodeGuru
                  </div>
                  {/* Sinohydro */}
                  <div
                    onClick={handleSecondWorkClicked}
                    className={
                      secondWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Sinohydro
                  </div>
                  {/* Gigalabs */}
                  <div
                    onClick={handleThirdWorkClicked}
                    className={
                      thirdWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Gigalabs
                  </div>
                  {/* MansolHab */}
                  <div
                    onClick={handleFourthWorkClicked}
                    className={
                      fourthWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    MansolHab
                  </div>
                  {/* SevenOvn */}
                  <div
                    onClick={handleFifthWorkClicked}
                    className={
                      fifthWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    SevenOvn
                  </div>
                  {/* Mobile underline - slides under active tab */}
                  <div 
                    className="absolute bottom-0 h-[3px] bg-[#64ffda] transition-all duration-300 ease-in-out"
                    style={{
                      left: `${mobileActiveTab * 20}%`,
                      width: 'calc(20% - 2px)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lower Side */}
          <div className="ml-[10%] w-[70%] relative">
            {/* First One */}
            {(firstWorkClicked || noneWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                {/* For firstWork */}
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Trainer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a
                        href="#"
                        className="viewArchive"
                      >
                        iCodeGuru
                      </a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Feb 2026 - present · Silicon Valley USA (Remote)
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      As a Python Trainer at iCodeGuru, I mentor aspiring developers in mastering Data Structures & Algorithms with a strong focus on problem-solving patterns and interview readiness.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Teaching Python for Data Structures & Algorithms (DSA)
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Breaking down complex problems into structured, pattern-based solutions
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Training students on how to approach coding interview questions strategically
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Guiding learners in analyzing Time and Space Complexity (Big-O analysis)
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Conducting live coding sessions and mock interview practices
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Second One */}
            {secondWorkClicked && (
              <div className="blink_me">
                {/* For secondWork */}
                <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                  Tech Lead – AI Safety Systems{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <span className="antialiased text-[#64ffda] relative">
                    <a href="#" className="viewArchive">
                    Sinohydro Corporation
                    </a>
                  </span>
                </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Feb 2025 - Jan 2026 · Jubail, Saudi Arabia (On-site)
                  </div>

                <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Initially hired as a Work Permit Receiver (WPR) in the HSE department, promoted to Tech Lead supporting Site Command Center security team.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Improved automated computer vision surveillance systems aligned with Aramco Safety Standards.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Enhanced AI camera logical reasoning and rule-based detection mechanisms to proactively identify safety violations.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Engineered automated evidence capture workflows with geo-location tagging, time-stamped logging, and automatic escalation.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Completed internationally recognized HSE certifications including NEBOSH, IOSH, and OSHA.
                  </div>
                </div>
              </div>
            )}
            {/* Third One */}
            {thirdWorkClicked && (
              <div className="blink_me">
                {/* For thirdWork */}
                <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                  Associate Software Engineer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <span className="antialiased text-[#64ffda] relative">
                    <a href="#" className="viewArchive">
                      Gigalabs Pvt Ltd
                    </a>
                  </span>
                </div>
                <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                  Mar 2024 - Nov 2024 · JoharTown, Lahore, Pakistan (On-site)
                </div>

                <div className="pt-[1.5rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Collaborated with senior developers to deliver quality software solutions.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Developed and tested features for web and backend systems.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Debugged and resolved technical issues efficiently.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Learned and adapted to new tools, frameworks, and industry practices.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Participated in daily standups, code reviews, and Agile sprints.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Documented project workflows and coding practices.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Contributed ideas for product improvements and innovation.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Supported team efforts in meeting project deadlines.
                  </div>
                </div>
              </div>
            )}
            {/* Fourth One */}
            {fourthWorkClicked && (
              <div className="blink_me">
                {/* For fourthWork */}
                <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                  Web Dev Trainer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <span className="antialiased text-[#64ffda] relative">
                    <a className="viewArchive">MansolHab</a>
                  </span>
                </div>
                <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                  Oct 2023 - Jan 2024 · Sheikhupura, Punjab Pakistan (On-site)
                </div>
                <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Designed and delivered a structured curriculum covering HTML, CSS, JavaScript, React, Node.js, and databases.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Conducted interactive sessions, live coding demonstrations, and project-based learning.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Provided personalized mentorship, debugging support, and industry insights.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Organized group projects and coding challenges, fostering collaboration and problem-solving.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Prepared students for competitive environments, guiding them through a successful hackathon organized by PSDF.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Successfully trained 30-40 students in web development from scratch.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Led students to win a hackathon organized by PSDF, Punjab Skills Development Fund, Pakistan.
                  </div>
                </div>
              </div>
            )}
            {/* Fifth One */}
            {fifthWorkClicked && (
              <div className="blink_me">
                {/* For fifthWork */}
                <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                  Full Stack Developer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <span className="antialiased text-[#64ffda] relative">
                    <a href="https://sevenovn.com/" className="viewArchive">SevenOvn</a>
                  </span>
                </div>
                <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                  Sept 2022 - Aug 2023 · JoharTown, Lahore, Pakistan (Hybrid)
                </div>
                <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Engaged with clients to understand their business needs and technical requirements.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Designed and documented system workflows to ensure clarity in project scope and execution.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Collaborated with two partners to manage and deliver the front-end of projects.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Handled the integration of various APIs to ensure smooth communication between front-end and back-end.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    After six months, transitioned into a full-stack role, mentoring new interns.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Promoted to supervise the full-stack development team, overseeing development process and troubleshooting errors.
                  </div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
