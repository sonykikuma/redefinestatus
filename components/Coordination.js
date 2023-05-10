import Link from "next/link";
import React from "react";

const Coordination = () => {
  const content = {
    content1:
      "If we have every individual with a self-interest approach we go into a terrible situation. The more we convert to love for others the better chance we have to pass the test.  ",

    content2:
      "It wasn't until our culture defined cigarettes as bad that we quit them. They are just as addicting. They become negative status symbols. Hopefully showing the power status has on human behavior. If you thought sex/mating runs the world just wait till you realize that status is above even that.    ",
  };
  return (
    <div>
      <div className="mx-40 px-20 mt-20">
        <Link href="#">
          {" "}
          <h2 className="text-black underline1 font-semibold text-lg underline-offset-3 ">
            We have a coordination test for humanity.
          </h2>
        </Link>
        <p className="mt-8 items-center text-md">{content.content1}</p>
        <blockquote className="mt-10 px-4 bg-gray-50 font-sans italic border-l-4 border-blue-400 text-lg text-black ">
          “If only we could make love what people optimize for over wealth. We
          can help society at large realize that is the true way to win the game
          of life” -
          <Link href="https://jackjay.io/" className=" underline">
            Jack Jay
          </Link>
        </blockquote>

        <p className="mt-8 items-center text-md">{content.content2}</p>
        <p className="mt-8 items-center text-md">
          If we can change whats cool, then love can rule.
        </p>
        <p className="mt-8 items-center text-md font-semibold">
          If you are moved, then let’s move mountains.
        </p>
        <p className="mt-8 items-center text-md">
          Schedule a call
          <Link
            href="https://www.calendar.com/not-found/"
            className="underline font-semibold"
          >
            {" "}
            HERE
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Coordination;
