"use client";

import { motion } from "framer-motion";

//internal imports
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} realtive z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title={"| Insight"} textStyles="text-center" />
      <TitleText title={"Insight about metaversus"} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((el, i) => (
          <InsightCard key={`insight-${i}`} {...el} index={i + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
