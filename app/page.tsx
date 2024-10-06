// Home.js
import React from "react";
import Cards from "@/app/cards/page";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-around items-start content-center text-center py-10 bg-gray-100">
      {/* Card Container 1 */}
      <div className="flex flex-col items-center w-48 p-4 bg-white shadow-md rounded-lg">
        <div className="relative w-24 h-24">
          <Image
            className="rounded-full"
            src="/maskgirl.jpg"
            alt="profile pic"
            fill
            objectFit="cover"
          />
        </div>
        <Cards name="Maryam" age={11} rollno={123} day="Monday" slot="2 to 5" />
      </div>

      {/* Card Container 2 */}
      <div className="flex flex-col items-center w-48 p-4 bg-white shadow-md rounded-lg">
        <div className="relative w-24 h-24">
          <Image
            className="rounded-full"
            src="/portfolio.jpg"
            alt="profile picture"
            fill
            objectFit="cover"
          />
        </div>
        <Cards name="Huda" age={12} rollno={123} day="Monday" slot="2 to 5" />
      </div>

      {/* Card Container 3 */}
      <div className="flex flex-col items-center w-48 p-4 bg-white shadow-md rounded-lg">
        <div className="relative w-24 h-24">
          <Image
            className="rounded-full"
            src="/portfolio5.jpg"
            alt="profile picture"
            fill
            objectFit="cover"
          />
        </div>
        <Cards name="Mehak" age={11} rollno={123} day="Monday" slot="2 to 5" />
      </div>
    </div>
  );
};

export default Home;
