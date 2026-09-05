import CardData from "./utils/mockData";
import "./Problem2.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "lenis";

function Problem2() {
  const Cards = CardData;
  // register scroll trigger
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 3,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Mask animation
    // const mask_clip_paths = [
    //   "(100% 0% 0% 0%)",
    //   "(0% 100% 0% 0%)",
    //   "(0% 0% 100% 0%)",
    //   "(0% 0% 0% 100%)",
    // ];

    // randomly animate based on clip paths
    // gsap.to(".mask-box", {
    //   opacity: 1,
    //   clipPath: () => {
    //     return `inset${mask_clip_paths[Math.floor(Math.random() * 4)]}`;
    //   },
    //   duration: 2,
    // });

    gsap.to(".mask-box", {
      rotateX: () => (Math.random() > 0.5 ? 180 : -180),
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: "random",
      },
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card",
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    gsap.from(".bottom-hero h1", {
      opacity: 0,
      rotateX: "180deg",
      duration: 0.6,
    });
    t1.from(".card", {
      x: -100,
      opacity: 0,
      stagger: 0.1,
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  });
  return (
    <div className="page">
      {/* Hero Section  */}
      <div className="hero-section">
        <div className="top-hero">
          <div className="mask">
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
            <div className="mask-box"></div>
          </div>
          <img
            src="https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/f0ec/live/ca6a9dd0-76ad-11f0-8155-5f8739f897b4.jpg"
            alt="loading"
          />
        </div>

        <div className="bottom-hero">
          <h1>Welcome to Scuderia Ferrari</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            sit animi assumenda doloremque? Accusantium voluptas aperiam quo
            facere repellendus sapiente autem rem id ut sunt nesciunt velit,
            repudiandae eveniet neque tempora commodi reiciendis iusto placeat
            maxime eius quas alias dolorem temporibus! Commodi et voluptatem aut
            consequatur voluptate eum amet corrupti?
          </p>
        </div>
      </div>
      {/* Cards section  */}
      <div className="cards">
        {Cards.map((card, idx) => (
          <Card key={idx} props={card} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ props }) => {
  return (
    <>
      <div className="card">
        {/* Title of the card  */}
        <div>
          <h4>{props.title}</h4>
        </div>
        {/* Description of card  */}
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Problem2;
