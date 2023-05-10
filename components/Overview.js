import Link from "next/link";
import React from "react";

const Overview = () => {
  const content = {
    content1:
      "The fact that our designer goods do not represent wealth for positive utility is having more negative damage to society than we can fathom. This article is going to help detail why, and detail our solution in progress. ",

    content2:
      "As individuals, once we cover our basic needs, status becomes an intrinsic motivator in the rest of our actions. Status comes in many forms. The healthiest / most enlightened cultures put the highest status in rewarding positive sum behavior. In global culture, luxury goods like a Gucci bag/belt have become widespread as top status symbols, reflecting vapid use of money as the highest form of status. It has become such common Christmas list item for broke young teenagers that the richest man on the planet at the time of this writing got his riches from selling these overpriced goods representing nothing more than the ability to waste money. Collectively this misrepresentation of true status (service to others) is attributing more damage to building a healthy positive culture than we can imagine.",

    content3:
      "Social media, our emergent global cultural production system, could be used collectively to unify humanity around bettering ourselves and others. Instead it is used to further extract youth through a false form of status as a service. Imagine a world where this wasteful spending was considered cancelable. One where we collectively take accountability for the capability to money to the positive growth of us as a species. Imagine a world where the designer things we wore showed off spending a lot of money to make a lot of positive impact. If the world you imagined only went as far as to redistribute the wealth of designer wear, try imagining the deeper cultural effects this new alignment would have. ",
  };

  return (
    <div className="mx-40 px-20 mt-20">
      <h2 className="text-red-500 underline1 font-semibold text-lg underline-offset-1">
        <Link href="#">Overview Of The Problem</Link>
      </h2>
      <p className="mt-8 items-center text-md">{content.content1}</p>
      <p className="mt-8 items-center text-md">{content.content2}</p>
      <p className="mt-8 items-center text-md">{content.content3}</p>
      <blockquote className="mt-10 px-4 bg-gray-50 font-sans italic border-l-4 border-blue-400 text-black text-lg ">
        “Over the past hundred years we have increase the global GDP sevenfold,
        yet wealth inequality continues to skyrocket and luxury spending grows
        rapidly. In order to change the failure of redistribution of wealth at
        scale, we must effectively influence culture and help redefine what
        “status” is in the modern age. This will ultimately change the flow of
        money in society as the new age of status being helping the world,
        becomes more prominent. We have failed at building a society which
        healthily distributes wealth/power. Given society is a collective
        project we are responsible for, we think this stems from the culture not
        supporting doing good as the highest form of status. We have more than
        enough resources, but many people without access to them, and a culture
        that motivates and glorifies overspending on vanity luxury goods.” -
        <Link
          href="https://jackjay.io/"
          className="underline hover:underline-red-300"
        >
          Jack Jay
        </Link>
      </blockquote>
    </div>
  );
};

export default Overview;
