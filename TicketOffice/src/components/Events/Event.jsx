import { useState } from 'react';

import EventItem from './components/EventItem/EventItem';
import eventsJson from '../../data/events.json';

//console.log(data);

//const events = data._embedded;

// object destructuring
// const { _embedded: { events }} = eventsJson;



// console.log(events);


const Event = () => {

  const [data] = useState(eventsJson);
  const { _embedded: { events }} = eventsJson;

  return (
    <div>
        Events...
        {events.map((eventItem) => (
        <EventItem
            key={`event-item-${eventItem.id}`}
            name = {eventItem.name}
            info = {eventItem.info}
            image = {eventItem.images[0].url}
        />
    ))}  
    </div>
  )
}

export default Event