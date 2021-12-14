import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image showing Sorin"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Sorin</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React, Next.JS
      </p>
    </section>
  );
};

export default Hero;
