import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export function DemoApp() {
  const [events, setEvents] = useState([
    { title: 'Meeting', start: new Date() },
  ]);

  const handleDayClick = (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = { title, start: arg.date, allDay: true };
      setEvents([...events, newEvent]);
    }
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div>
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
        dateClick={handleDayClick} // Attach the day click handler
      />
    </div>
  );
}

export default DemoApp;
