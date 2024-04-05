"use client";
import react, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { FaPlay } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { AiOutlineTranslation } from "react-icons/ai";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import AnimateCard from "./AnimateCard";

export default function landingPage() {
  const router = useRouter();
  const [isHamburger, setIsHamburger] = useState(false);
  const setMenu = () => {
    setIsHamburger(!isHamburger);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isExpanded1, setIsExpanded1] = useState(false);
  const toggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const [isExpanded2, setIsExpanded2] = useState(false);
  const toggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const [isExpanded3, setIsExpanded3] = useState(false);
  const toggle3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const [isExpanded4, setIsExpanded4] = useState(false);
  const toggle4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  const Navbar = () => {
    return (
      <nav>
        <div className="flex justify-center items-center space-x-5 z-10">
          <button className="text-white">Services</button>
          <button className="text-white">Pricing</button>
          <button className="text-white">About us</button>
          <button className="text-white">Contact us</button>
        </div>
      </nav>
    );
  };

  const Hamburger = () => {
    return (
      <div>
        <button onClick={setMenu}>
          {!isHamburger ? <GiHamburgerMenu /> : <RxCross1 />}
        </button>
        {isHamburger && (
          <div className="flex flex-col">
            <button className="text-white">Services</button>
            <button className="text-white">Pricing</button>
            <button className="text-white">About us</button>
            <button className="text-white">Contact us</button>
            <button
              onClick={() => router.push("/user/login")}
              className="p-4 rounded-md bg-[#B36CEE] text-sm md:text-base md:mr-6"
            >
              SIGN IN
            </button>
          </div>
        )}
      </div>
    );
  };

  const slideImages = [
    "slider1.png",
    "slider2.jpg",
    "slider3.webp",
    "slider4.png",
  ];

  const Slider = () => {
    return (
      <div className="sm:h-[300px] sm:w-[1600px] w-[350px] h-[180px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="slider1.png"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider2.jpg"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider3.webp"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider4.png"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="slider1.png"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider2.jpg"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider3.webp"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider4.png"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="slider1.png"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider2.jpg"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider3.webp"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider4.png"
              className="sm:h-[250px] sm:w-[350px] h-[150px] w-[250px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

  const Video = () => {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        width="750"
        height="240"
        src="v1.mp4"
        className="rounded-xl z-10"
      ></video>
    );
  };

  const Card1 = () => {
    const title = "10+ AI Voices & Your Unique Cloned Voice Unleashed";
    const images = Array.from({ length: 8 }, (_, index) => `chris.webp`);
    const content =
      "Your Sound, Your Style: Dive into 10+ AI Voices, Shaped by Gender, Age & Style Choices for a Truly Unique Experience";

    return <AnimateCard title={title} images={images} content={content} />;
  };

  const Card2 = () => {
    const title = "140+ Languages";
    const images = Array.from({ length: 10 }, (_, index) => "india.jpg");
    const content =
      "Effortless translation: Upload, Select language and Transform Any Content with a single click!";

    return <AnimateCard title={title} images={images} content={content} />;
  };

  const Card3 = () => {
    const title = "Transforming Words Into Symphony";
    const content =
      "Elevate your content with our Text-To-Speech AI. Effortlessly convert written words into captivating audio experience. Personalized, natural and engaging - let your words be heard like never before.";

    return <AnimateCard title={title} content={content} />;
  };

  const Card4 = () => {
    return (
      <div className="flex flex-col relative w-[90%] justify-center mx-auto">
        <div className="absolute bottom-1/2 left-0 h-[200px] w-[200px] rounded-r-full bg-gradient-to-b from-[#7E7FFE] to-[#CB6AEF] blur-[120px] mt-40 absolute top-50"></div>
        <h1 className="ml-10 sm:text-2xl text-xl">Current AI Video Dubbing</h1>
        <h1 className="ml-10 sm:text-2xl text-xl">Use Cases</h1>
        <p className="ml-10 mb-5">
          The applications for AI dubbing are limitless, here are just a few
        </p>
        {!isMobile ? (
          <div className="flex space-x-2 sm:space-x-8">
            <div>
              <img className="rounded-lg" src="documentary_pic.webp" />
              <p className="mt-2 text-center">Documentaries</p>
            </div>

            <div>
              <img className="rounded-lg" src="documentary_pic.webp" />
              <p className="mt-2 text-center">News Videos</p>
            </div>

            <div>
              <img className="rounded-lg" src="documentary_pic.webp" />
              <p className="mt-2 text-center">Training Videos</p>
            </div>

            <div>
              <img className="rounded-lg" src="documentary_pic.webp" />
              <p className="mt-2 text-center">Marketing Videos</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex space-x-3">
              <div>
                <img className="rounded-lg" src="documentary_pic.webp" />
                <p className="mt-2 text-center">Documentaries</p>
              </div>

              <div>
                <img className="rounded-lg" src="documentary_pic.webp" />
                <p className="mt-2 text-center">News Videos</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <img className="rounded-lg" src="documentary_pic.webp" />
                <p className="mt-2 text-center">Training Videos</p>
              </div>

              <div>
                <img className="rounded-lg" src="documentary_pic.webp" />
                <p className="mt-2 text-center">Marketing Videos</p>
              </div>
            </div>
          </div>
        )}
        <h2 className="sm:text-2xl text-lg text-center py-8">
          Coming Soon - Live & Movie Dubbing
        </h2>
      </div>
    );
  };

  const Card5 = () => {
    return (
      <div className="bg-gradient-to-b from-[#216784] to-[#1A5B76] p-4">
        <h1 className="sm:text-2xl text-xl text-center text-white">
          Dubbing and Voiceovers Faster, Profitable & Magical
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center mt-4">
            <FaPlay size={20} color="white" />
            <h2 className="sm:text-2xl text-xl text-white">10X</h2>
            <p className="text-white">Watch time of your content</p>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-center">
              <CgSearch size={20} color="white" />
              <h2 className="sm:text-2xl text-xl text-white">300%</h2>
              <p className="text-white">Watch time of your content</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-center">
              <GoClock size={20} color="white" />
              <h2 className="sm:text-2xl text-xl text-white">80%</h2>
              <p className="text-white">Time Reduction in Video Dubbing</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-center">
              <AiOutlineTranslation size={20} color="white" />
              <h2 className="sm:text-2xl text-xl text-white">99.3%</h2>
              <p className="text-white">Accurate Translations</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-center">
              <RiUserVoiceFill size={20} color="white" />
              <h2 className="sm:text-2xl text-xl text-white">100%</h2>
              <p className="text-white">Realistic Ai voice-over</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-center">
              <FaMicrophoneLines size={20} color="white" />
              <h2 className="sm:text-2xl text-xl text-white">150</h2>
              <p className="text-white">Languages in any voice</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FAQ = () => {
    return (
      <div className="flex flex-col space-y-4 space-x-4 sm:w-3/5 shadow-md">
        <div className="ml-4 card bg-[#FFF9F925] p-4 rounded-md">
          <div className="flex justify-between">
            <p>
              Can AI dubbing make my videos sound like a Hollywood blockbuster?
            </p>
            <span className="arrow" onClick={toggle1}>
              {isExpanded1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {isExpanded1 && (
            <div className="expandable-content">
              <p>
                Etiam posuere metus vel neque imperdiet, vel condimentum eros
                consequat. Donec in sapien sed nisi ullamcorper viverra at non
                nulla. Quisque hendrerit tellus id gravida rutrum. Praesent ex
                lorem, imperdiet sed sem eget, tempor fringilla urna.
              </p>
            </div>
          )}
        </div>

        <div className="card bg-[#282828] p-4 rounded-md">
          <div className="flex justify-between">
            <p>
              Will AI dubbing turn my videos into a multilingual masterpiece?
            </p>
            <span className="arrow" onClick={toggle2}>
              {isExpanded2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {isExpanded2 && (
            <div className="expandable-content">
              <p>
                Etiam posuere metus vel neque imperdiet, vel condimentum eros
                consequat. Donec in sapien sed nisi ullamcorper viverra at non
                nulla. Quisque hendrerit tellus id gravida rutrum. Praesent ex
                lorem, imperdiet sed sem eget, tempor fringilla urna.
              </p>
            </div>
          )}
        </div>

        <div className="card bg-[#282828] p-4 rounded-md">
          <div className="flex justify-between">
            <p>
              {" "}
              Can AI dubbing make my characters sound like superheroes or
              villains?
            </p>
            <span className="arrow" onClick={toggle3}>
              {isExpanded3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {isExpanded3 && (
            <div className="expandable-content">
              <p>
                Etiam posuere metus vel neque imperdiet, vel condimentum eros
                consequat. Donec in sapien sed nisi ullamcorper viverra at non
                nulla. Quisque hendrerit tellus id gravida rutrum. Praesent ex
                lorem, imperdiet sed sem eget, tempor fringilla urna.
              </p>
            </div>
          )}
        </div>

        <div className="card bg-[#282828] p-4 rounded-md">
          <div className="flex justify-between">
            <p>Will AI dubbing make my videos "sing" with expressive voices?</p>
            <span className="arrow" onClick={toggle4}>
              {isExpanded4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {isExpanded4 && (
            <div className="expandable-content">
              <p>
                Etiam posuere metus vel neque imperdiet, vel condimentum eros
                consequat. Donec in sapien sed nisi ullamcorper viverra at non
                nulla. Quisque hendrerit tellus id gravida rutrum. Praesent ex
                lorem, imperdiet sed sem eget, tempor fringilla urna.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Subscribe = () => {
    return (
      <div className="relative z-10 flex flex-col space-x-4 bg-gradient-to-r from-[#0F2B55] to-[#308EC2] w-full sm:w-3/5 p-8 sm:rounded-2xl items-center absolute top-0 left-0 right-0 mb-[-10%] mx-auto">
        <h1 className="sm:text-2xl text-xl text-center mb-5">
          Dive into the Future with us!
        </h1>
        <p className="mb-5">
          Join the ranks of avant-garde! Subscribe to MogiVerse Insider for a
          backstage pass to our digital odyssey. Stay ahead, stay inspired
          Subscribe now!
        </p>
        <div className="flex bg-white w-full sm:w-1/2 justify-between rounded-full">
          <input
            className="text-black p-3 focus:outline-none w-4/5"
            type="text"
            placeholder="Enter Email"
          />
          <button className="rounded-full bg-gradient-to-r from-[#0F2B55] to-[#308EC2] w-1/5">
            Sent
          </button>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="relative flex flex-col justify-end bg-gradient-to-b from-[#0D223F] to-[#0E100F] h-[320px]">
        <div className="flex flex-col sm:flex-row justify-between items-center top-0">
          <div className="flex p-5 sm:ml-5">
            <img className="h-10 w-10 rounded-md" src="mogi.jpeg" />
            <p className="mt-2 mr-3">MOGIVERSE</p>
          </div>
          <nav>
            {!isMobile ? (
              <div className="flex flex-row justify-center items-center sm:space-x-8 sm:py-8">
                <button className="text-white">About</button>
                <button className="text-white">Services</button>
                <button className="text-white">Pricing</button>
                <button className="text-white">Contact us</button>
                <button className="text-white">Terms & Conditions</button>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex justify-between space-x-12">
                  <button className="text-white">About</button>
                  <button className="text-white">Services</button>
                  <button className="text-white">Pricing</button>
                </div>
                <div className="flex justify-between space-x-12">
                  <button className="text-white">Contact us</button>
                  <button className="text-white">Terms & Conditions</button>
                </div>
              </div>
            )}
          </nav>
          <div className="flex space-x-4 sm:mr-6 my-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center">
            <FaCopyright />
            <p className="ml-1">Copyright 2023 Mogiverse</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    // heading component
    <div>
      <div className="flex flex-col items-center justify-end p-4 sticky top-0 bg-[#101825] backdrop-filter backdrop-blur-md bg-opacity-50 z-50">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center p-2 md:ml-6">
            <img
              className="h-8 w-8 md:h-10 md:w-10 rounded-md"
              src="mogi.jpeg"
              alt="Mogiverse Logo"
            />
            <p className="ml-2 text-sm md:text-base">MOGIVERSE</p>
          </div>
          {!isMobile && <Navbar />}
          {!isMobile ? (
            <button
              onClick={() => router.push("/user/login")}
              className="p-2 rounded-md bg-[#B36CEE] text-sm md:text-base md:mr-6"
            >
              SIGN IN
            </button>
          ) : (
            <Hamburger />
          )}
        </div>
      </div>

      {/* main body */}
      <div className="flex flex-col items-center w-full p-2 overflow-x-hidden">
        <h1 className="sm:text-4xl text-2xl text-center mb-4">
          Elevate Your Content with Exclusive Translation and Dubbing Magic!
        </h1>
        <div className="flex items-center lg:justify-between justify-center w-full">
          {/* Added w-full here */}
          <div className="hidden lg:block h-[480px] w-[500px] rounded-xl bg-gradient-to-b from-[#0F2B55] to-[#0F2A54] ml-[15rem] blur-[50px] transform -rotate-45"></div>
          <Video />
          <div className="hidden lg:block h-[480px] w-[500px] rounded-xl bg-gradient-to-b from-[#0F2B55] to-[#0F2A54] mr-[15rem] blur-[50px] transform rotate-45"></div>
        </div>
        <button className="p-2 sm:p-4 mt-2 lg:mt-0 rounded-md bg-[#B36CEE]">
          <h5>Try Now for Free</h5>
        </button>

        <div className="relative">
          <div className="flex items-center justify-center w-full">
            <div className="h-[50px] w-[50px] sm:h-[200px] sm:w-[200px] rounded-l-full bg-gradient-to-b from-[#7E7FFE] to-[#CB6AEF] blur-[100px] absolute left-0"></div>
            <h1 className="sm:text-2xl text-xl sm:mt-12 mt-6 sm:mb-5 mb-2">
              Discover Our Exclusive Solutions
            </h1>
            <div className="h-[50px] w-[50px] sm:h-[200px] sm:w-[200px] rounded-r-full bg-gradient-to-b from-[#7E7FFE] to-[#CB6AEF] blur-[100px] mt-40 absolute top-50 right-0"></div>
          </div>
          <div className="py-8">
            <Slider />
          </div>
        </div>

        <h1 className="sm:text-2xl text-xl mb-5">Unmatched Brilliance</h1>
        {/* if web version: */}
        {!isMobile ? (
          <div className="relative w-[90%]">
            <div className="w-[800px] h-[400px] rounded-full bg-gradient-to-b from-[#0F2B55] to-[#0F2A54] blur-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex flex-row items-start justify-center gap-10 my-8 ">
              <Card1 />
              <div className="flex flex-col gap-5 ">
                <Card2 />
                <Card3 />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-[90%]">
            <div className="w-[800px] h-[400px] rounded-full bg-gradient-to-b from-[#0F2B55] to-[#0F2A54] blur-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex flex-col items-center justify-center space-y-5">
              <Card1 />
              <Card2 />
              <Card3 />
            </div>
          </div>
        )}
        <div className="py-8">
          <Card4 />
        </div>
      </div>
      <Card5 />
      <div className="my-8">
        <h1 className="mt-5 mb-5 sm:text-2xl text-xl text-center">
          Frequently Asked Questions
        </h1>
        <div className="flex w-full sm:w-9/10 mx-auto sm:space-x-8 justify-center items-center mb-20 relative">
          <FAQ />
          {!isMobile && (
            <span className="relative">
              {/* Radial gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(144, 238, 144, 0.5) 0%, rgba(144, 238, 144, 0) 100%)",
                  filter: "blur(50px)",
                }}
              ></div>

              {/* Robot image */}
              <img
                className="h-auto relative z-10"
                src="robot.png"
                alt="Robot Image"
              />
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}
