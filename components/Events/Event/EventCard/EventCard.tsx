"use client";
import React from "react";
import Image from "next/image";
import Style from "./EventCard.module.css";

const EventCard = (props) => {
  const event = props.event;
  return (
    <>
      <div id={Style.cardContainer} className="w-[35%] p-3">
        <div id={Style.imageContainer} className="">
          <Image
            src={event.img}
            alt="Event Image"
            width={400}
            height={250}
            objectFit="cover"
          ></Image>
        </div>
        <div id={Style.eventName} className="mx-3 my-5">
          {event.name}
        </div>
        <div id={Style.eventDescription} className="mx-3 mb-8">
          {event.description}
        </div>
      </div>
    </>
  );
};

export default EventCard;
