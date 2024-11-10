import { useState, useEffect } from "react";
import videoBg from "../assets/nike.mp4";
import videoBgMobile from "../assets/nike-mobile.mp4";
import Button from "./Button";


const Hero = () => {
  const [setVideo, setSetVideo] = useState(
    window.innerWidth <= 640 ? videoBgMobile : videoBg
  );

  useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth <= 640) {
            setSetVideo(videoBgMobile);
        } else {
            setSetVideo(videoBg);
        }
    };
    window.addEventListener('resize', handleResize);
    return() => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <div className="md:flex relative w-full md:h-[70vh]">
        <div className="hero-video">
          <video
            className="w-full h-full object-cover"
            src={setVideo}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="hero-content absolute bottom-10 m-10">
          <div className="hero-title">
            <h1 className="text-white text-6xl font-black">RUN IN THE RAIN.</h1>
          </div>
          <div className="hero-title text-white mt-2 mb-5">
            <p>Get out there in the Nike Pegasus 41 GORE-TEX.</p>
          </div>
         <Button name='Shop Now'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
