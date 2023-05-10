import React from "react";
import Link from "next/link";

const SimpleSol = () => {
  const content = {
    content1:
      "Thought experiments make it obvious that this idea is memetic, and just has not been tried in the market. Once one initial company opens up this model, many more will follow and copy: ",

    content2:
      "For the same price as a Louie Vuitton bag, a permanent shelter can be built in Bangladesh for a family in need. This gives rise to the idea that anytime someone walks into a designer store and purchased an item, they are having to burn down a house (most making this decision unknowingly).    ",

    content3:
      "Based on the principle “if a penny saved is a penny earned” we can extrapolate that to a Louie bag is a home burned. But just telling someone not to flex is not going to solve the problem. If we really want to win this war, we just need to sell higher status, for the same price.        ",

    content4:
      "Imagine trying to connect with a luxury purse buyer as protestors outside of a designer store. Rather than simply protesting their spending on that good, we need to sell them a better version of what they are buying.    ",
    content5:
      "Protests outside of stores that sell meat where stands are set up showing customers videos of the harmed animals may not be a great way to connect with the target audience, and often cause a greater divide in mindsets.         ",

    content6:
      "In this case volunteers or employees could stand outside of luxury goods markets, sporting the aligned luxury merch. Rodeo drive for example is a notorious spot where every designer store not only has a shop, but theres a steady flow of customers.         ",

    content7:
      "Social media accounts devoted to making content here are already massively viral amassing hundreds of millions of views interviewing buyers. Each successful conversion, would make for a viral video and an ad set, bringing potentially thousands of new customers while kickstarting educating the world of the low status of wasteful spending now that a better alternative exists.    ",
  };

  return (
    <div>
      <div className="mx-40 px-20 mt-20">
        <h2 className="text-blue-900 underline1 font-semibold text-lg underline-offset-3 ">
          <Link href="#">The Simple Solution</Link>
        </h2>
        <p className="mt-8 items-center text-md font-semibold">
          {content.content1}
        </p>
        <p className="mt-8 items-center text-md">{content.content2}</p>
        <p className="mt-8 items-center text-md">{content.content3}</p>
        <p className="mt-8 items-center text-md ">{content.content4}</p>
        <div className="mt-8 cursor-pointer flex-auto">
          <img src="/proj2.avif" alt=" " layout="fill" />
        </div>
        <p className="mt-8 items-center text-md">{content.content5}</p>
        <p className="mt-8 items-center text-md">{content.content6}</p>
        <p className="mt-8 items-center text-md">{content.content7}</p>
      </div>
    </div>
  );
};

export default SimpleSol;
