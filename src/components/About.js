import React, { useState, useEffect, useRef } from "react";
import "../Css_applied/aboutStyles.css";
import simpleProfile from "../images/SimpleProfile.png";
import shadedProfile from "../images/SimpleProfile.png";
import simpleProfile2 from "../images/SimpleProfile2.jpg";
import ShadedProfile2 from "../images/ShadedProfile2.jpg";

const About = ({ aboutBtnClickedActive }) => {
  const mySecondImage = useRef();
  const myImage = useRef();
  const [clickedSm, setClickedSm] = useState(false);
  const [clicked, setClicked] = useState(false);
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) {
        return;
      }

      const { top, height } = aboutRef.current.getBoundingClientRect();
      if (top <= 600 && top + height >= 600) {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisibleTwo(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef]);

  const handleSmallImageClick = (e) => {
    if (!clickedSm) {
      setClickedSm(true);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!myImage.current.contains(e.target)) {
        setClicked(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [myImage, setClicked]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!mySecondImage.current.contains(e.target)) {
        setClickedSm(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [mySecondImage, setClickedSm]);

  const [aboutNavClick, setAboutNavClick] = useState(false);
  useEffect(() => {
    setAboutNavClick(aboutBtnClickedActive);
  }, [aboutBtnClickedActive]);

  useEffect(() => {
    if (aboutNavClick) {
      var el = document.querySelector("#ABOUTDIV");
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
  }, [aboutNavClick]);

  return (
    <div
      id="ABOUTDIV"
      ref={aboutRef}
      className={`mr-12 ml-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        className={`contentContainer ${
          isVisible ? "show" : ""
        } pt-[5.538rem] pb-[2.5rem] relative`}
      >
        <div className="inline-block absolute top-[105px] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased aboutScreen3:top-[100px]">
          01.
        </div>{" "}
        <div className="aboutMe inline-block ml-12 bottom-0 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[50] aboutScreen1:w-[7.4rem]">
          About Me
          <div className="z-[50] w-[10%] inline-block h-[100%] absolute bottom-0 aboutScreen1:hidden"></div>
        </div>
        <div className="border-[1px] block box-content relative bottom-[17px] w-[56.7%] left-[38%] border-[#303c55] aboutScreen1:hidden aboutScreen2:left-[174px] md:w-[20rem] aboutScreen7:left-[205px]"></div>
      </div>
      {/* Body Section for < md-screen */}
      <div
        className={`contentContainer ${
          isVisibleTwo ? "show" : ""
        } block aboutScreen8:hidden`}
      >
        {/* Section 2 */}
        <div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Hello! I'm Abdullah, a Full-Stack Software Engineer based in
            Sheikhupura, Pakistan. I specialize in building scalable, high-performance web applications with strong system design principles at their core. I enjoy crafting efficient, creative, and production-ready solutions using modern technologies, whether collaborating in teams or working independently as a freelancer.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Over the past two years, I have been deeply immersed in Artificial Intelligence, actively exploring and contributing to the rapidly evolving AI landscape. I have hands-on experience in machine learning and deep learning, including training, fine-tuning, and deploying models in real-world environments. I collaborated with a cross-functional team to develop production-grade computer vision systems, contributing throughout the entire AI lifecycle — including data collection, annotation, model training, evaluation, and scalable deployment.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I have also designed and implemented generalized AI agent frameworks to support large-scale model training and evaluation workflows, contributing to advanced AI systems including work related to Google's Gemini ecosystem. My technical stack includes PyTorch, TensorFlow, and scikit-learn for model development, integrated seamlessly into FastAPI backend pipelines to enable efficient, real-time AI inference in production systems.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I am passionate about merging AI with full-stack engineering to build intelligent, scalable applications that solve meaningful problems and push systems toward greater autonomy and performance.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-5">
            Here are few technologies I have been working on recently:
          </div>
          {/* Technologies - Box Style */}
          <div className="w-full">
            {/* Languages & Version Control */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Languages & Version Control
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> JavaScript (ES6+)
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Python
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> C Language
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> C++ (OOP + DSA)
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Git
                </div>
              </div>
            </div>
            {/* AI & Machine Learning */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                AI & Machine Learning
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> TensorFlow
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> PyTorch
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> OpenAI (GPT-4/GPT-4o)
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> LangChain
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> LlamaIndex
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Hugging Face
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> OpenCV
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> YOLOv5/YOLOv8
                </div>
              </div>
            </div>
            {/* Web Frameworks & Libraries */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Web Frameworks & Libraries
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> React Js
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Node.js
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Expressjs
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> FastAPI
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Redux DevTool
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Tailwind CSS
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Bootstrap 5
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> HTML5
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> CSS3, SCSS
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Docker
                </div>
              </div>
            </div>
            {/* Databases */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Databases
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> MongoDB
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> MySQL
                </div>
              </div>
            </div>
            {/* Cloud & DevOps */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Cloud & DevOps
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> AWS
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Azure
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Cloudflare
                </div>
              </div>
            </div>
            {/* IDEs & Tools */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                IDEs & Tools
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Visual Studio Code
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Visual Studio
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Anaconda
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Jupyter Notebook
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Google Colab
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Android Studio
                </div>
                <div className="w-[45%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Linux
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-auto py-12">
          <div className="relative">
            <img
              ref={mySecondImage}
              onClick={handleSmallImageClick}
              src={clickedSm ? simpleProfile : shadedProfile}
              alt="profile"
              className="h-auto w-auto mr-auto ml-auto object-cover transition-ImageTransitionProperty duration-ImageTransitionDuration ease-ImageTransitionTiming delay-ImageTransitionDelay z-10 opacity-100 relative"
              style={{
                outline: "2px solid #45b2a0",
                outlineOffset: clickedSm ? "10px" : "15px",
                position: "relative",
                top: "0px",
                left: "0px",
                transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Body Section for > md-screen */}
      <div
        className={`contentContainer ${
          isVisibleTwo ? "show" : ""
        } hidden aboutScreen8:block relative`}
      >
        {/* Section 2 */}
        <div className="w-[49.5136vw] aboutScreen11:w-[51vw] aboutScreen12:w-[49vw]">
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Hello! I'm Abdullah, a Full-Stack Software Engineer based in
            Sheikhupura, Pakistan. I specialize in building scalable, high-performance web applications with strong system design principles at their core. I enjoy crafting efficient, creative, and production-ready solutions using modern technologies, whether collaborating in teams or working independently as a freelancer.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Over the past two years, I have been deeply immersed in Artificial Intelligence, actively exploring and contributing to the rapidly evolving AI landscape. I have hands-on experience in machine learning and deep learning, including training, fine-tuning, and deploying models in real-world environments. I collaborated with a cross-functional team to develop production-grade computer vision systems, contributing throughout the entire AI lifecycle — including data collection, annotation, model training, evaluation, and scalable deployment.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I have also designed and implemented generalized AI agent frameworks to support large-scale model training and evaluation workflows, contributing to advanced AI systems including work related to Google's Gemini ecosystem. My technical stack includes PyTorch, TensorFlow, and scikit-learn for model development, integrated seamlessly into FastAPI backend pipelines to enable efficient, real-time AI inference in production systems.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I am passionate about merging AI with full-stack engineering to build intelligent, scalable applications that solve meaningful problems and push systems toward greater autonomy and performance.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-5">
            Here are few technologies I have been working on recently:
          </div>
          {/* Technologies - Box Style Desktop */}
          <div className="w-full">
            {/* Languages & Version Control */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Languages & Version Control
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> JavaScript (ES6+)
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Python
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> C Language
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> C++ (OOP + DSA)
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Git
                </div>
              </div>
            </div>
            {/* AI & Machine Learning */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                AI & Machine Learning
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> TensorFlow
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> PyTorch
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> OpenAI (GPT-4/GPT-4o)
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> LangChain
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> LlamaIndex
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Hugging Face
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> OpenCV
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> YOLOv5/YOLOv8
                </div>
              </div>
            </div>
            {/* Web Frameworks & Libraries */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Web Frameworks & Libraries
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> React Js
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Node.js
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Expressjs
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> FastAPI
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Redux DevTool
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Tailwind CSS
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Bootstrap 5
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> HTML5
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> CSS3, SCSS
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Docker
                </div>
              </div>
            </div>
            {/* Databases */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Databases
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> MongoDB
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> MySQL
                </div>
              </div>
            </div>
            {/* Cloud & DevOps */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                Cloud & DevOps
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> AWS
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Azure
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Cloudflare
                </div>
              </div>
            </div>
            {/* IDEs & Tools */}
            <div className="mb-4 p-3 border border-[#303c55] rounded">
              <div className="text-[#64ffda] font-customMono text-[13px] antialiased mb-2">
                IDEs & Tools
              </div>
              <div className="text-[#8892b0] flex flex-wrap">
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Visual Studio Code
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Visual Studio
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Anaconda
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Jupyter Notebook
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Google Colab
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Android Studio
                </div>
                <div className="w-[30%] font-customMono text-[13px] antialiased pr-4">
                  <span className="text-[#64ffda]">▹</span> Linux
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[21.0864vw] absolute top-0 right-2 aboutScreen11:right-[2.25rem] aboutScreen12:max-w-[15rem] aboutScreen12:right-[50%] aboutScreen12:left-[69%]">
          <div className="h-auto py-12">
            <div className="relative">
              <img
                ref={myImage}
                onMouseOver={() => setClicked(true)}
                onMouseOut={() => setClicked(false)}
                src={clicked ? simpleProfile2 : ShadedProfile2}
                alt="profile"
                className="h-auto w-auto mr-auto ml-auto object-cover transition-ImageTransitionProperty duration-ImageTransitionDuration ease-ImageTransitionTiming delay-ImageTransitionDelay z-10 opacity-100 relative"
                style={{
                  outline: "2px solid #45b2a0",
                  outlineOffset: clicked ? "10px" : "15px",
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
