'use client'
import React from 'react'
import Style from './Event.module.css'
import EventCard from './EventCard/EventCard'
import EventDescription from './EventDescription/EventDescription'

const Event = (props) => {
  const event = props.event;
  const id = event.id;
  let flexDirection = 'flex-row';
  if (id % 2 == 0) {
    flexDirection = 'flex-row-reverse';
  }
  return (
    <>
    <div className='block mx-[5vw] my-16'>

      <div className={`flex justify-between ${flexDirection} mx-28`}>

      <EventDescription event={event}/>
      <EventCard event={event}/>
      </div>
    </div>
    </>
  )
}

export default Event
