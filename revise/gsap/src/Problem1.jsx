import { useRef } from "react";
import "./Problem1.css";
import CardData from "./utils/mockData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Problem1 = () => {
  const headingRef = useRef();
  const headingParaRef = useRef();
  const buttonRef = useRef();
  const Cards = CardData;

  // Gsap Stuff

  useGSAP(() => {
    // animate timeline for all elements

    // Timeline for cards and headings and button and image
    const t1 = gsap.timeline();
    t1.from(headingRef.current, {
      x: -100,
      opacity: 0,
    })
      .fromTo(
        ".hero-section-right img",
        {
          clipPath: "inset(0% 0% 100% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.7,
        },
      )
      .from(
        headingParaRef.current,
        {
          opacity: 0,
          x: -100,
        },
        "-=1.7",
      )
      .from(
        ".card",
        {
          x: -100,
          opacity: 0,
          stagger: 0.15,
        },
        "-=1.1",
      )
      .from(buttonRef.current, {
        opacity: 0,
        x: -100,
      });

    // Seperate for image
    // gsap.fromTo(
    //   ".hero-section-right img",
    //   {
    //     clipPath: "inset(0% 0% 100% 0%)",
    //   },
    //   {
    //     clipPath: "inset(0% 0% 0% 0%)",
    //     duration: 1.7,
    //   },
    // );
  });

  return (
    <div className="page">
      <div className="hero-section">
        {/* Hero Section Left  */}
        <div className="hero-section-left">
          <h1 ref={headingRef}>Welcome to Scuderia Ferrari</h1>
          <p ref={headingParaRef}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            provident veritatis reiciendis corrupti placeat, cupiditate in,
            quibusdam facilis inventore, ut sunt totam dolore beatae culpa
            aliquid nam. Eligendi repudiandae obcaecati ipsam aliquam expedita,
            fugiat voluptatem corporis saepe provident aut atque.
          </p>
        </div>
        {/* Hero Section Right Image */}
        <div className="hero-section-right">
          <img
            src="https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/f0ec/live/ca6a9dd0-76ad-11f0-8155-5f8739f897b4.jpg"
            alt=""
          />
        </div>
      </div>
      {/* Cards Section  */}
      <div className="cards-section">
        {Cards.map((card, idx) => (
          <Card props={card} key={idx} />
        ))}
      </div>
      {/* Button Section  */}
      <div className="button-section">
        <button ref={buttonRef}>Click Me!</button>
      </div>
    </div>
  );
};

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

export default Problem1;
