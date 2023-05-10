import React from "react";
import Link from "next/link";

const Culteng = () => {
  const content = {
    content1:
      "Ultimately, the more projects that promote this new line of thinking, the more people think others think this way, the more status will align culturally with its true nature. Watching others do good for the world has always given us more hope for humanity.  We believe the flippening of status has the potential to solve the worlds greatest cause of poverty, the failed distribution of wealth worldwide.  ",

    content2:
      "We don’t need to enforce rules where people are forced to give up their things, we need brands that invest in education for the masses to wake up to what real status/value is and place higher alternatives into the market.  ",

    content3:
      "With the release  of more and more globally disruptive technology, anxiousness about our focus on making sure things goes right becomes more apparent. By educating the world on alignment of using money and power for good from the most basic layer of apparel we will begin to cause this shift. With the right priming, a large amount of legacy wealth will be funneled into shifting the global workforce into focusing on the worlds greatest problems.       ",
  };

  return (
    <div>
      <div className="mx-40 px-20 mt-20">
        <h2 className="text-orange-500 underline1 font-semibold text-lg underline-offset-1">
          <Link href="#">Large Scale Cultural Engineering</Link>
        </h2>
        <h3 className="mt-4 text-lg font-semibold">
          Making Altruism Culturally High Status
        </h3>
        <p className="mt-8 items-center text-md">{content.content1}</p>
        <p className="mt-8 items-center text-md">{content.content2}</p>
        <p className="mt-8 items-center text-md">{content.content3}</p>
      </div>
    </div>
  );
};

export default Culteng;
