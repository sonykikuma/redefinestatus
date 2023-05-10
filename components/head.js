import { GiPolarStar } from "react-icons/gi";

export default function Head() {
  return (
    <>
      <title>RedefineStatus</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="this is the imdb clone website" />
      <link rel="icon" href={<GiPolarStar />} />
    </>
  );
}
//      <link rel="icon" href="/favicon.ico" />
//      <GiPolarStar className="text-orange-400" />
