import React from "react";
import graph from "../assets/yearlyimpactmobile-1642795729506.svg";

const About = () => {
  return (
    <div className="container">
      <div className="aboutContainer">
        <h1 className="aboutTitle">About</h1>
        <p>
          There are two things I know about myself. I will never stop wanting to
          travel and if there is a chance to travel, I will never give it up. I
          first visited Venice in 2014 as a wide-eyed university student eager
          to explore. Getting lost in Venice was an amazing experience. When I
          visited 5 years later, eager for that same experience, I was extremely
          disappointed. Most parts of Venice were flooded the moment the tide
          rose up. Getting lost could potentially leave me stranded. It was
          sobering to see how much impact global warming had had in just 5
          years.
          <br />
          <br />
          Globally, we emit 40 gigatonnes of greenhouse gases into the
          atmosphere each year. To stay reasonably safe from climate change, we
          need to reduce this number in half every decade.
          <br />
          <br />
          While corporations and countries are the ones that can make the
          biggest impact, individuals can also make a change and help contribute
          to meeting the targets needed for our planet's well-being. Yet, the
          desire to travel is strong. Knowing that travel is one of the largest
          factors behind my carbon footprint, I set about looking for ways to
          mitigate or offset it.
        </p>
        <h1 className="aboutTitle">About One Tree Planted</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y2qf5BTDq2w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <p>
          I came across One Tree Planted while searching for my solution and was
          immediately impressed. Their vision is to make it simple for anyone to
          help the environment by planting trees. Since 2014, they have more
          than doubled the number of trees planted each year, and are working
          with partners across 47+ countries in North America, Latin America,
          Africa, Asia, Europe and the Pacific. <br /> <br />
          They have planted over 40 million trees in more than 47 countries
          across the globe since 2014. In 2021, they more than doubled our
          impact from 2020 - with 23.5 million trees!
        </p>

        <h1 className="aboutTitle">About the Calculator</h1>
        <p>
          The calculator fetches data using Climatiq's API. For flights,
          Climatiq uses the airport codes for origin and destination to
          automatically determine flight distance and burned fuel. This allows
          them to calculate CO2E. Emission accounting is largely done in CO2
          equivalents even though there is a variety of greenhouse gases that
          heat up the atmosphere.
        </p>
      </div>
    </div>
  );
};

export default About;
