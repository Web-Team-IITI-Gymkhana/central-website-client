"use client";
import React from "react";
import Style from "./Events.module.css";
import Event from "./Event/Event";

let events = [
  {
    id: 1,
    name: "Event Name",
    img: "/EventImages/DemoImage.png",
    description:
      "type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise",
    date: "xx/xx/xx",
    time: "xx/xx",
  },
  {
    id: 2,
    name: "Event Name",
    img: "/EventImages/DemoImage.png",
    description:
      "type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise",
    date: "xx/xx/xx",
    time: "xx/xx",
  },
];

const Events = () => {
  return (
    <>
      <div className="w-full bg-[#F6F6F6]  my-10 py-16">
        <div id="header" className=" ml-[5vw]">
          <div id={Style.headingCapsule} className="w-fit">
            <span id={Style.heading} className="mx-8 my-10">
              Events
            </span>
          </div>
        </div>
        <div id="eventContainer" className="">
          <div id="eventList" className="">
            {events.map((event) => {
              return <Event key={event.id} event={event} />;
            })}
          </div>
        </div>
        <div className="flex justify-center mt-16 mb-8">
        <div id ={Style.moreEvents} className="py-4"><span id={Style.seeMore} className="mx-8">See More Events</span></div>
        </div>
      </div>
    </>
  );
};

export default Events;
