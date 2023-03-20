"use client";
import { motion } from "framer-motion";

//internal imports
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";

const World = () => (
  <section className={`${styles.paddings} realtive z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title={"| People on the world"} textStyles={"text-center"} />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles={"text-center"}
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[500px]"
      >
        <img src="./map.png" alt="map" className="w-full h-full object-cover" />
        <div
          className={`absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]`}
        >
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div
          className={`absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]`}
        >
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div
          className={`absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]`}
        >
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div
          className={`absolute top-[40%] left-[15%] w-[230px] h-[180px] p-[4px] rounded-[24px] bg-[#5d6680]`}
        >
          <img
            src="./MaskGroup1.png"
            alt="mask group"
            className="w-full h-full object-cotain relative"
          />
          <img
            src="./maskGgroup1User1.png"
            alt="mask group user"
            className="w-[30px] h-[30px] rounded-full absolute bottom-[25%] left-[5%] z-3"
          />
          <img
            src="./maskGroup1User2.png"
            alt="mask group user"
            className="w-[30px] h-[30px] rounded-full absolute bottom-[25%] left-[15%] z-2"
          />
          <img
            src="./maskGroup1User3.png"
            alt="mask group user"
            className="w-[30px] h-[30px] rounded-full absolute bottom-[25%] left-[25%] z-1"
          />
          <p className=" font-[12px] bottom-[25%] left-[45%] absolute text-white">
            +264 has joind
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
