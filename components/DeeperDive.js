import Link from "next/link";
import React from "react";

const DeeperDive = () => {
  const content = {
    content1:
      "On a fundamental level once someone gets the basics covered as in food, water, shelter. They can start to spend their time and money on convenience, health, and purpose but more often than not; status is where a majority of surplus wealth goes.  ",

    content2:
      "Societally we lack an alignment of our status symbols with creating a better world and with bettering ourselves. This idea to change what we cultural see as status has been referred to as “Status Engineering”. ",
    content3:
      "What we wear is the most direct way we have to represent ourselves and our ideals/values. What your role model wears, or any person of influence is shaping the idea of status in that child, teenager, or adults mind. ",

    content4:
      "Status is what we are buying when we pay $1, $10, or even $500 extra for a certain brand of T-Shirt irrespective of comfort.",
    content5:
      "The problem is not that buying status is a failure mode of an individual. Status is a form of positive competitive drive in society and a tool for respect attribution. That’s why you see Dior shoes in economy. This is not a miscalculation, currently the status from spending $1100 on shoes does have more long term value than things like first class because we are playing the game of unenlightened capitalism.",

    content6:
      "The problem is that we support the status symbol which costs $1100 and does no good for humanity.  Thus this expenditure is not a failure of the buyer who bought status, it is only misguided that we do not have designer shoes that cost $1100, which builds a literal house in Bangladesh (a small home can be built as a permanent structure for someone for this amount).  We need higher forms of status to exist in order to progress our culture which will aid in the distribution of wealth and power on a systemic level. ",

    content7:
      "Once higher status objects are unveiled will these purely financial status seems become recognized for their tackiness and buying status will coincide with doing good. With no better alternative currently, we idolize symbols of wealth. Thus, on our highest display of who we are, the clothing we wear, we display 0 creativity or care for the world in spending and instead promote wasting wealth for the sake of power/leverage over others, and then we wonder why society is misaligned to building a healthy world. Fashion, what we wear, is the biggest signal we have in representing our identity and values.",

    content8:
      "If we can provide a better representation of status in clothing we can not only change the money used to buy status into doing good for the world, but we can change our core representation of status in society towards doing good.",

    content9:
      "While the larger belief is that this systemic change is the real impact in realigning our culture towards true status, the amount of funds in status spending that could be redirected towards positive causes is also no joke. ",

    content10:
      "Aligning status culturally on a global scale means reattributing that wealth towards benefit for humanity and shifting the entire global view of wealth. ",
  };

  return (
    <div>
      <div className="mx-40 px-20 mt-20">
        <Link href="#dive">
          <h2 className="text-blue-800 underline1 font-semibold text-lg underline-offset-3 ">
            A Deeper Dive:
          </h2>
        </Link>
        <div id="dive">
          <p className="mt-8 items-center text-md">{content.content1}</p>
          <p className="mt-8 items-center text-md">{content.content2}</p>
          <p className="mt-8 items-center text-md">{content.content3}</p>
          <p className="mt-8 items-center text-md font-semibold">
            {content.content4}
          </p>
          <p className="mt-8 items-center text-md">{content.content5}</p>
          <p className="mt-8 items-center text-md">{content.content6}</p>
          <p className="mt-8 items-center text-md">{content.content7}</p>
          <p className="mt-8 items-center text-md">{content.content8}</p>
          <p className="mt-8 items-center text-md">{content.content9}</p>

          <blockquote className="mt-10 px-4 bg-gray-50 font-sans italic border-l-4 border-blue-400 text-lg text-black ">
            The personal luxury goods market is projected to grow from USD
            257.26 billion in 2020 to USD 352.84 billion in 2027
            <Link
              target="_blank"
              href="https://www.fortunebusinessinsights.com/luxury-goods-market-103866"
              className=" underline"
            >
              257.26 billion in 2020 to USD 352.84 billion in 2027
            </Link>
          </blockquote>

          <blockquote className="mt-10 px-4 bg-gray-50 font-sans italic border-l-4 border-blue-400 text-lg font-bold text-black">
            The Luxury Cars Market size is expected to grow from{" "}
            <Link
              target="_blank"
              href="https://www.fortunebusinessinsights.com/luxury-goods-market-103866"
              className=" underline"
            >
              {" "}
              USD 449.7 Billion in 2019 to USD 655.0 Billion by 2027; It is
              estimated to grow at a CAGR of 9.3% from 2020 to 2027.
            </Link>
          </blockquote>
          <p className="mt-8 items-center text-md">{content.content10}</p>
        </div>
      </div>
    </div>
  );
};

export default DeeperDive;
