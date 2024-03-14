import React from "react";
import { liveAuctions1 } from "../constants";
import LatestLiveAuctionCard from "./reusables/LatestLiveAuctionCard";

const LatestLiveAuctions = () => {
  return (
    <section className="mt-48">
      <h3 className="text-white text-4xl text-center">Latest live auctions</h3>

      <div className="flex gap-6 flex-wrap justify-center mt-16">
        {liveAuctions1.map((card) => (
          <li key={card.id} className="list-none">
            <LatestLiveAuctionCard
              img={card.img}
              heading={card.heading}
              eth={card.eth}
              time={card.time}
              bid={card.bid}
              avatar={card.avatar}
              heart={card.heart}
              heartNumber={card.heartNumber}
            />
          </li>
        ))}
      </div>
    </section>
  );
};

export default LatestLiveAuctions;
