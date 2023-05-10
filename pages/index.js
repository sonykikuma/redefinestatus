"use client";

export const dynamic = "force-dynamic";

import Head from "next/head";
import Image from "next/image";
import Overview from "../components/Overview";
import DeeperDive from "../components/DeeperDive";
import SimpleSol from "../components/SimpleSol";
import Culteng from "../components/Culteng";
import Inevitable from "../components/Inevitable";
import Coordination from "../components/Coordination";
//import MyModal from "../components/Modal";

export default function Home() {
  return (
    <>
      <div>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold text-center text-gray-900">
            Redefine Status
          </h1>
          <div className="text-md ml-40 px-20 mt-10">
            How We Can Correct
            <span className="font-semibold"> Mankind&apos;s LeaderBoard</span>
          </div>
        </div>
        <Overview />
        <DeeperDive />
        <SimpleSol />
        <Culteng />
        <Inevitable />
        <Coordination />
      </div>
    </>
  );
}
