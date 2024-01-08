'use client'
import React from 'react'
import Style from './EventDescription.module.css'

const EventDescription = (props) => {
  const event = props.event;
  return (
    <div className='w-[55%] text-left'>
      <div id= {Style.title} className='mb-4'>{event.name}</div> <br />
      <div id= {Style.description} className=''>{event.description}</div> <br />
      <div className='flex flex-row justify-between mr-20'>
        <div className=''>
        <div id={Style.dateTime} className="flex flex-col">
          <div className="date">Date: {event.date}</div>
          <div className="time">Time: {event.time}</div>
        </div>
        </div>
        <div id={Style.moreInfo} className='w-fit flex items-center'><span id={Style.seeMore} className='mx-8'>See More Info</span></div>
      </div>
    </div>
  )
}

export default EventDescription
