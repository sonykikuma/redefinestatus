import React from "react";
import Link from "next/link";

const Inevitable = () => {
  const content = {
    content1:
      "There’s a vibe shift underway, as we get closer and closer to a post scarcity economy, the eternal currency of the future of good karma will become more clear. ",

    content2:
      "For the greedy who still wish to hold on to ownership of something land is going to skyrocket as an asset, ownership on plots of earth will be seen as one of the steadiest investments as we approach a hyper decrease in the cost of building.         ",

    content3:
      "The people who recognize this shift will do well to mortgage their house, buying a larger plot of land somewhere.      ",

    content4:
      "If super-intelligence is democratic, honoring that ownership of land will be a decision the world makes. (Clearly the idea that those who hoarded their wealth and tried to hold on to value should have more value than those who put their wealth to work, giving up their assets, is one that will be a hard attempt) Propaganda for people to relinquish their assets to funds more of the poverty of the world will help the world make this decision when the time comes.         ",

    // content5:
    //  "While theres no specific data for what defines “Luxury” housing, this is of course a far larger asset class which outshines the luxury car and luxury goods market. ",

    content6:
      "What actually makes one house better than the other (often its simply the status it has rather than utility) if it was all about utility people would buy the cheaper house and install the heated seat toilets, and floors etc. (but then how would people respect them more?). What if we were not ranked by the size of our house, but instead by the size of our donations.",

    content7:
      "You may remember that app that was $999 called “Im rich” and did nothing. That’s what designer clothing represents today. Useless expense for materials with patterns that represent pure vanity. Pure spending power gone to pure status.        ",

    content8:
      "It is tasteless…. and we believe society is not only waking up to that fact, but it is inevitable that we will create better alternatives.        ",

    content9:
      "In a subjective culture sense we see IN-YOUR-FACE luxury style goods declining while a push for understated looks are coming forward. Brands such as Gucci are being seen as more oversaturated, and pieces that lack design besides the plastery of the luxury logo on the piece are seen as tacky.        ",

    content10:
      "We believe the changing of status starting at a clothing level will cause one of the largest wealth flow transfers towards good for the world. Imagine an individual who is struggling to provide for themselves, eventually however, they begin to thrive. They start a business and after having major success exit for a few million dollars. What is the standard look and lifestyle of this person after this event?        ",

    content11:
      "For the most part, most people are living to keep their “social survival mammoth” feeling good. This is the part of the brain which feeds off of status, which defines our place in the social hierarchy. And this is not something I believe we can change, people WILL naturally compete to go up the chain of the social hierarchy, people want to outdo each other, people are competitive, people are different and respect should be given where it is due.     ",

    content12:
      "This climb, this fight up the ladder is not inherently bad, what's wrong right now is what we consider to be markers of people who are higher up that ladder. We have been sold a narrative by the luxury and designer corporations, who have massive budgets to win the celebrities over, that designer and luxury clothing IS high status. Those who spend $4k on a designer bag versus one of equivalent quality for $50 are put higher on the status scale. If we can collectively redefine this status symbol as tacky, which has already been changing for in-your-face luxury design brand styles, we will change where the money which pays for status goes.    ",

    content13:
      "While projects like Shelter NFT would build a home for a family who would have otherwise never had one before for the same price as a designer bag, it is no replacement for a BAG. People still want to buy a high end item, so instead, a brand which offers that price of bag, that level of quality, whose surplus funds goes towards making that positive change is perfect.    ",
  };

  return (
    <div>
      <div className="mx-40 px-20 mt-20">
        <h2 className="text-gray-800 underline font-semibold text-lg underline-offset-3 ">
          <Link href="#">Bringing The Inevitable Future Forward</Link>
        </h2>
        <p className="mt-8 items-center text-md">{content.content1}</p>
        <p className="mt-8 items-center text-md">{content.content2}</p>
        <p className="mt-8 items-center text-md">{content.content3}</p>
        <p className="mt-8 items-center text-md ">{content.content4}</p>
        <p className="mt-8 items-center text-md">
          While theres no specific data for what defines “Luxury” housing, this
          is of course a{" "}
          <Link
            href="https://www.savills.com/impacts/market-trends/the-total-value-of-global-real-estate.html#:~:text=The"
            className="underline"
          >
            far larger asset class
          </Link>{" "}
          which outshines the luxury car and luxury goods market.
        </p>
        <p className="mt-8 items-center text-md">{content.content6}</p>
        <p className="mt-8 items-center text-md">{content.content7}</p>
        <p className="mt-8 items-center text-md">{content.content8}</p>
        <p className="mt-8 items-center text-md">{content.content9}</p>
        <p className="items-center text-md mt-8">Evidence of this:</p>
        <p className="items-center text-md mt-8">
          Brands like Gucci are becoming less hip.{" "}
        </p>
        <p className="items-center text-md">
          Designer brands that are in your face are not it.
        </p>
        <p className="items-center text-md mt-8">
          Designer that’s low-key is now the trend.
        </p>
        <p className="items-center text-md mt-8">
          Designer is dialing back as consumers replace spending to these
          models.
        </p>

        <p className="mt-8 items-center text-md">{content.content10}</p>
        <p className="mt-8 items-center text-md">{content.content11}</p>
        <p className="mt-8 items-center text-md">{content.content12}</p>
        <p className="mt-8 items-center text-md">{content.content13}</p>
      </div>
    </div>
  );
};

export default Inevitable;
