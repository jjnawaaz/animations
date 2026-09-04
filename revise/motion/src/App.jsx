import { motion } from "motion/react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const Cards = [
    {
      title: "Lewis Hamilton",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "Max Verstappen",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "Lando Norris",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "George Russell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "Kimi Antonelli",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "Charles Leclerc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "Pierre Gasly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
    {
      title: "Isack Hadjar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptates!",
    },
  ];

  // animation variants

  const page_container_animation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time gap between Hero, Cards container, and Button
      },
    },
  };
  const hero_section_animation = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const hero_item_1_animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  const hero_item_2_animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  const cards_animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const button_section = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <motion.div
        className="page"
        variants={page_container_animation}
        initial="hidden"
        animate="visible"
      >
        {/* Hero container  */}
        <motion.div className="hero-section" variants={hero_section_animation}>
          <motion.div variants={hero_item_1_animation}>
            <h1>Welcome to Scuderia Ferrari Website</h1>
          </motion.div>
          <motion.div variants={hero_item_2_animation}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              minima quos at molestiae quo debitis ullam voluptates ad quaerat
              ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Impedit minima quos at molestiae quo debitis ullam voluptates ad
              quaerat ducimus. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Impedit minima quos at molestiae quo debitis
              ullam voluptates ad quaerat ducimus. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Impedit minima quos at molestiae
              quo debitis ullam voluptates ad quaerat ducimus. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Impedit minima quos at
              molestiae quo debitis ullam voluptates ad quaerat ducimus.
            </p>
          </motion.div>
        </motion.div>
        {/* cards section  */}
        <motion.div className="cards" variants={cards_animation}>
          {/* map cards component here  */}
          {Cards.map((card, idx) => (
            <Card props={card} className="card" key={idx} />
          ))}
        </motion.div>
        {/* button section  */}
        <motion.div className="button-section" variants={button_section}>
          <button>Click Me!</button>
        </motion.div>
      </motion.div>
    </>
  );
}

const Card = ({ props }) => {
  const card_animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
  };
  return (
    <>
      <motion.div className="card" variants={card_animation}>
        {/* Title of the card  */}
        <div>
          <h4>{props.title}</h4>
        </div>
        {/* Description of card  */}
        <div>
          <p>{props.description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default App;
